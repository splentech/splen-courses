import john from "./john-doe";
import raze from "./raze-reaper";
import deepakGurao from "./deepakGurao";
import nishchalGupta from "./nishchalGupta";
import ramanGupta from "./ramanGupta";
import justiceK from "./justiceK";
import revathiGopalan from "./revathiGopalan";
import thallapallyVineeth from "./thallapallyVineeth"
import harshSareen from "./hasrhSareen";
import vinodNagar from "./vinodNagar";

/* 🔥 ARRAY */
const allTrainers = [john, raze, deepakGurao, nishchalGupta, ramanGupta, justiceK, revathiGopalan, thallapallyVineeth, harshSareen, vinodNagar];

/* 🔥 MAP */
export const trainerMap = Object.fromEntries(
  allTrainers.map((t) => [t.slug, t])
);