import john from "./john-doe";
import raze from "./raze-reaper";

/* 🔥 ARRAY */
const allTrainers = [john, raze];

/* 🔥 MAP */
export const trainerMap = Object.fromEntries(
  allTrainers.map((t) => [t.slug, t])
);