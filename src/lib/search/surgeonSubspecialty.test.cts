const assert = require("node:assert/strict");
const test = require("node:test");

const {
  getSubspecialtyMatch,
  SURGEON_SUBSPECIALTY_OPTIONS,
} = require("./surgeonSubspecialty.ts");

test("the dropdown contains only the requested hip and spine choices", () => {
  assert.equal(
    SURGEON_SUBSPECIALTY_OPTIONS.at(-1)?.label,
    "Orthopaedic Spine",
  );
  assert.equal(
    SURGEON_SUBSPECIALTY_OPTIONS.some(
      (option: { label: string }) => option.label === "Hip Arthroscopy",
    ),
    false,
  );
  assert.equal(
    SURGEON_SUBSPECIALTY_OPTIONS.some((option: { label: string }) =>
      ["Hip", "Knee"].includes(option.label),
    ),
    false,
  );
  assert.equal(
    SURGEON_SUBSPECIALTY_OPTIONS.some(
      (option: { label: string }) => option.label === "Hip and Knee Arthroplasty",
    ),
    true,
  );
});

test("hip search rejects a foot-only surgeon", () => {
  assert.equal(
    getSubspecialtyMatch(["Foot & Ankle", "Sports Knees"], "hip"),
    null,
  );
});

test("hip search finds and surfaces the matching entry", () => {
  const match = getSubspecialtyMatch(
    ["Foot & Ankle/ Sports Knees", "Hip Arthritis/replacement", "Trauma"],
    "hip",
  );

  assert.equal(match?.matchedValue, "Hip Arthritis/replacement");
});

test("a primary hip specialty ranks above a secondary hip interest", () => {
  const primary = getSubspecialtyMatch(
    ["Hip And Knee Arthroplasty", "Trauma"],
    "hip",
  );
  const secondary = getSubspecialtyMatch(
    ["Foot & Ankle", "Hip Arthritis/replacement"],
    "hip",
  );

  assert.ok(primary && secondary && primary.score > secondary.score);
});

test("an explicit sports specialty ranks above a secondary sports interest", () => {
  const explicit = getSubspecialtyMatch(["Sports", "Upper Limb"], "sports");
  const secondary = getSubspecialtyMatch(
    ["Paediatric Orthopaedics", "Sports Knee Injuries"],
    "sports",
  );

  assert.ok(explicit && secondary && explicit.score > secondary.score);
  assert.equal(secondary.matchedValue, "Sports Knee Injuries");
});

test("Hip & Knee requires evidence of both subspecialties", () => {
  assert.equal(getSubspecialtyMatch(["Hip Replacement"], "Hip & Knee"), null);
  assert.ok(
    getSubspecialtyMatch(
      ["Anterior Hip Replacement", "Robotic Knee Replacement"],
      "Hip & Knee",
    ),
  );
});

test("whole-word matching does not treat unrelated substrings as specialties", () => {
  assert.equal(getSubspecialtyMatch(["Leadership and Education"], "hip"), null);
});
