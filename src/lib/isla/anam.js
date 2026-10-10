// Anam REST calls for Isla, authenticated with ANAM_API_KEY. Switching Anam
// accounts only needs a new key: Isla's custom avatar is found in, or
// recreated in, whichever account the key belongs to. Server only.

import { createHash } from "crypto";

const API = "https://api.anam.ai/v1";
const SITE = "https://www.bestorthopaedicsurgeon.com.au";

// Isla's custom avatar in the original account, the name it is recreated under
// in other accounts, the photo it is made from, and a stock avatar in case the
// account cannot hold custom avatars.
const ORIGINAL_AVATAR_ID = "d4cac2e3-816a-4ad4-af58-2a084fdcfccb";
const AVATAR_NAME = "Isla (BOS)";
const AVATAR_SOURCE = `${SITE}/avatars/isla-avatar-source.jpg`;
const STOCK_AVATAR_ID = "30fa96d0-26c4-4e55-94a0-517025942e18";

export class AnamError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

function apiKey() {
  const key = process.env.ANAM_API_KEY?.trim();
  if (!key) throw new AnamError("ANAM_API_KEY is not set", 503);
  return key;
}

async function anam(path, { method = "GET", body } = {}) {
  const res = await fetch(`${API}${path}`, {
    method,
    headers: { Authorization: `Bearer ${apiKey()}`, "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
    cache: "no-store",
  });
  const text = await res.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = { raw: text };
  }
  if (!res.ok) {
    const detail = data?.error || data?.message || text.slice(0, 300);
    throw new AnamError(`Anam ${method} ${path} failed: ${res.status} ${typeof detail === "string" ? detail : JSON.stringify(detail)}`, res.status);
  }
  return data;
}

// Avatar per account, cached per API key for six hours.
const avatarCache = new Map();
const keyId = () => createHash("sha256").update(apiKey()).digest("hex").slice(0, 12);
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function findNamedAvatar() {
  const list = await anam(`/avatars?onlyOneShot=true&perPage=100&search=${encodeURIComponent("Isla")}`);
  const items = list?.data || list?.items || (Array.isArray(list) ? list : []);
  return items.find((a) => a.displayName === AVATAR_NAME)?.id || null;
}

async function provisionAvatar() {
  if (process.env.ANAM_AVATAR_ID) return process.env.ANAM_AVATAR_ID.trim();
  try {
    await anam(`/avatars/${ORIGINAL_AVATAR_ID}`);
    return ORIGINAL_AVATAR_ID;
  } catch (e) {
    if (e.status === 401) throw e;
  }
  const existing = await findNamedAvatar();
  if (existing) return existing;
  try {
    const created = await anam("/avatars", {
      method: "POST",
      body: { displayName: AVATAR_NAME, imageUrl: AVATAR_SOURCE, avatarModel: "cara-4" },
    });
    if (created?.id) return created.id;
  } catch (e) {
    if (e.status === 409) {
      // Another request is creating it right now.
      for (let i = 0; i < 5; i++) {
        await wait(3000);
        const id = await findNamedAvatar();
        if (id) return id;
      }
    }
    console.error("Isla avatar could not be created, using a stock avatar:", e.message);
  }
  return STOCK_AVATAR_ID;
}

export async function islaAvatarId() {
  const id = keyId();
  const hit = avatarCache.get(id);
  if (hit && Date.now() - hit.at < 6 * 3600 * 1000) return hit.promise;
  const promise = provisionAvatar();
  avatarCache.set(id, { at: Date.now(), promise });
  promise.catch(() => avatarCache.delete(id));
  return promise;
}

export async function createSessionToken(personaConfig) {
  const data = await anam("/auth/session-token", {
    method: "POST",
    body: { clientLabel: "bos-website-isla", personaConfig },
  });
  if (!data?.sessionToken) throw new AnamError("Anam returned no session token", 502);
  return data.sessionToken;
}

// Isla's looping idle clip for the launcher. Anam signs it for an hour.
let previewCache = { at: 0, key: "", url: null };
export async function islaPreviewVideo() {
  const id = keyId();
  if (previewCache.url && previewCache.key === id && Date.now() - previewCache.at < 30 * 60 * 1000) return previewCache.url;
  const avatar = await anam(`/avatars/${await islaAvatarId()}`);
  const url = avatar?.idleVideoUrl || avatar?.videoUrl || null;
  previewCache = { at: Date.now(), key: id, url };
  return url;
}
