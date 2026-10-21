import { htmlToDOM } from "html-react-parser";

// The minimum amount of article text that must follow the inline ad, so it
// never sits at the very end of a short post.
export const MIN_TEXT_AFTER_AD = 600;
const MAX_WRAPPER_DEPTH = 4;

const isHeading = (node) => node.type === "tag" && node.name === "h2";
const isBlank = (node) =>
  node.type === "comment" || (node.type === "text" && !node.data.trim());
const textOf = (node) =>
  node.type === "text" ? node.data : (node.children || []).map(textOf).join("");

// Where an article can carry its inline ad: just before its third <h2>, so the
// ad follows the second section and never separates a heading from its text.
// Most posts wrap their body in one <article> (or similar) element; the split
// then happens inside it, and each half closes or reopens the same wrapper
// tags so both stay valid HTML. The HTML itself is sliced, not re-serialised,
// so the article renders exactly as before. Returns [before, after], or null
// when the post has fewer than three sections or too little text after.
export function splitForInlineAd(html) {
  let nodes;
  try {
    nodes = htmlToDOM(html, { withStartIndices: true });
  } catch {
    return null;
  }

  const wrappers = [];
  while (!nodes.some(isHeading)) {
    const meaningful = nodes.filter((node) => !isBlank(node));
    const [only] = meaningful;
    if (
      wrappers.length >= MAX_WRAPPER_DEPTH ||
      meaningful.length !== 1 ||
      only.type !== "tag" ||
      typeof only.children?.[0]?.startIndex !== "number"
    ) {
      return null;
    }
    wrappers.push(only);
    nodes = only.children;
  }

  const headings = nodes.filter(isHeading);
  const third = headings[2];
  if (!third || typeof third.startIndex !== "number") return null;

  const textAfter = nodes
    .slice(nodes.indexOf(third))
    .map(textOf)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
  if (textAfter.length < MIN_TEXT_AFTER_AD) return null;

  const opening = wrappers
    .map((node) => html.slice(node.startIndex, node.children[0].startIndex))
    .join("");
  const closing = wrappers
    .map((node) => `</${node.name}>`)
    .reverse()
    .join("");
  const at = third.startIndex;
  return [html.slice(0, at) + closing, opening + html.slice(at)];
}
