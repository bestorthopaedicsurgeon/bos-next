export type SubspecialtyOption = {
  value: string;
  label: string;
};

type SubspecialtyDefinition = SubspecialtyOption & {
  aliases: string[];
  requiredTermGroups: string[][];
};

export type SubspecialtyMatch = {
  label: string;
  matchedValue: string;
  score: number;
};

const DEFINITIONS: SubspecialtyDefinition[] = [
  {
    value: "Hip",
    label: "Hip",
    aliases: ["hip surgeon", "hip surgery", "hip replacement"],
    requiredTermGroups: [["hip"]],
  },
  {
    value: "Knee",
    label: "Knee",
    aliases: ["knee surgeon", "knee surgery", "knee replacement"],
    requiredTermGroups: [["knee"]],
  },
  {
    value: "Hip & Knee",
    label: "Hip & Knee",
    aliases: ["hip and knee", "hip knee"],
    requiredTermGroups: [["hip"], ["knee"]],
  },
  {
    value: "Foot & Ankle",
    label: "Foot & Ankle",
    aliases: ["foot and ankle", "foot surgeon", "ankle surgeon"],
    requiredTermGroups: [
      ["foot", "ankle", "hindfoot", "achilles", "bunion", "bunions"],
    ],
  },
  {
    value: "Sports",
    label: "Sports",
    aliases: [
      "sport",
      "sports orthopaedics",
      "sports orthopedics",
      "sports injury",
      "sports injuries",
    ],
    requiredTermGroups: [["sport", "sports", "sporting"]],
  },
  {
    value: "Shoulder",
    label: "Shoulder",
    aliases: ["shoulder surgeon", "shoulder surgery"],
    requiredTermGroups: [["shoulder", "rotator cuff"]],
  },
  {
    value: "Upper Limb",
    label: "Upper Limb",
    aliases: ["upper extremity"],
    requiredTermGroups: [
      ["upper limb", "upper extremity", "shoulder", "elbow", "hand", "wrist"],
    ],
  },
  {
    value: "Lower Limb",
    label: "Lower Limb",
    aliases: ["lower extremity"],
    requiredTermGroups: [
      ["lower limb", "lower extremity", "hip", "knee", "foot", "ankle"],
    ],
  },
  {
    value: "Elbow",
    label: "Elbow",
    aliases: ["elbow surgeon", "elbow surgery"],
    requiredTermGroups: [["elbow", "tennis elbow"]],
  },
  {
    value: "Trauma",
    label: "Trauma",
    aliases: [
      "orthopaedic trauma",
      "orthopedic trauma",
      "fracture",
      "fractures",
    ],
    requiredTermGroups: [["trauma", "fracture", "fractures"]],
  },
  {
    value: "Paediatric Orthopaedics",
    label: "Paediatric Orthopaedics",
    aliases: [
      "paediatric",
      "pediatric",
      "pediatric orthopedics",
      "children's orthopaedics",
    ],
    requiredTermGroups: [["paediatric", "pediatric", "children", "child"]],
  },
  {
    value: "General Orthopaedics",
    label: "General Orthopaedics",
    aliases: [
      "general orthopedics",
      "general orthopaedic",
      "general orthopedic",
    ],
    requiredTermGroups: [
      [
        "general orthopaedics",
        "general orthopedics",
        "general orthopaedic",
        "general orthopedic",
      ],
    ],
  },
  {
    value: "Tumour",
    label: "Tumour",
    aliases: [
      "tumor",
      "orthopaedic oncology",
      "orthopedic oncology",
      "sarcoma",
    ],
    requiredTermGroups: [["tumour", "tumor", "oncology", "sarcoma"]],
  },
  {
    value: "Orthopaedic Spine",
    label: "Orthopaedic Spine",
    aliases: [
      "spine",
      "spinal",
      "spine surgeon",
      "spinal surgeon",
      "orthopaedics spine",
      "orthopaedics spines",
    ],
    requiredTermGroups: [["spine", "spinal"]],
  },
];

export const SURGEON_SUBSPECIALTY_OPTIONS: SubspecialtyOption[] =
  DEFINITIONS.filter(({ value }) => value !== "Hip" && value !== "Knee").map(
    ({ value, label }) => ({ value, label }),
  );

export function normaliseSubspecialtyText(value: unknown) {
  return String(value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function containsTerm(value: string, term: string) {
  const normalisedValue = normaliseSubspecialtyText(value);
  const normalisedTerm = normaliseSubspecialtyText(term);
  if (!normalisedValue || !normalisedTerm) return false;
  return ` ${normalisedValue} `.includes(` ${normalisedTerm} `);
}

function resolveDefinition(query: string): SubspecialtyDefinition {
  const normalisedQuery = normaliseSubspecialtyText(query);
  const definition = DEFINITIONS.find((item) =>
    [item.value, item.label, ...item.aliases]
      .map(normaliseSubspecialtyText)
      .includes(normalisedQuery),
  );

  if (definition) return definition;

  return {
    value: query.trim(),
    label: query.trim(),
    aliases: [],
    requiredTermGroups: [[normalisedQuery]],
  };
}

export function getSubspecialtyMatch(
  subspecialities: unknown,
  query: string,
): SubspecialtyMatch | null {
  if (!query.trim() || !Array.isArray(subspecialities)) return null;

  const entries = subspecialities
    .map((value) => String(value || "").trim())
    .filter(Boolean);
  if (!entries.length) return null;

  const definition = resolveDefinition(query);
  const groupMatches = definition.requiredTermGroups.map((terms) =>
    entries
      .map((entry, index) => ({
        index,
        entry,
        matched: terms.some((term) => containsTerm(entry, term)),
      }))
      .filter((candidate) => candidate.matched),
  );

  if (groupMatches.some((matches) => matches.length === 0)) return null;

  const normalisedQuery = normaliseSubspecialtyText(query);
  const canonicalNames = [
    definition.value,
    definition.label,
    ...definition.aliases,
  ].map(normaliseSubspecialtyText);
  const candidates = entries
    .map((entry, index) => {
      const matchedGroups = definition.requiredTermGroups.filter((terms) =>
        terms.some((term) => containsTerm(entry, term)),
      ).length;
      const normalisedEntry = normaliseSubspecialtyText(entry);
      return {
        entry,
        index,
        matchedGroups,
        exactQuery: normalisedEntry === normalisedQuery,
        exactCanonical: canonicalNames.includes(normalisedEntry),
      };
    })
    .filter((candidate) => candidate.matchedGroups > 0)
    .sort((a, b) => {
      if (a.exactQuery !== b.exactQuery) return a.exactQuery ? -1 : 1;
      if (a.exactCanonical !== b.exactCanonical)
        return a.exactCanonical ? -1 : 1;
      if (a.matchedGroups !== b.matchedGroups)
        return b.matchedGroups - a.matchedGroups;
      if (a.index !== b.index) return a.index - b.index;
      return a.entry.length - b.entry.length;
    });

  const best = candidates[0];
  const allGroupsInFirstEntry = definition.requiredTermGroups.every((terms) =>
    terms.some((term) => containsTerm(entries[0], term)),
  );
  const allGroupsInBestEntry = definition.requiredTermGroups.every((terms) =>
    terms.some((term) => containsTerm(best.entry, term)),
  );

  let score = 4_000;
  if (best.exactQuery) score = 10_000;
  else if (best.exactCanonical) score = 9_000;
  else if (allGroupsInFirstEntry) score = 7_000;
  else if (best.index === 0) score = 6_000;
  else if (allGroupsInBestEntry) score = 5_500;

  score += best.matchedGroups * 100;
  score += Math.max(0, 90 - best.index * 10);
  score += Math.max(
    0,
    40 - normaliseSubspecialtyText(best.entry).split(" ").length,
  );

  return {
    label: definition.label,
    matchedValue: best.entry,
    score,
  };
}
