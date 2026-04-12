import aiML from "./aiMlLearning";
import dataScience from "./dataScience";
import programmingDSA from "./programmingDSA";
import coreCPlusPlus from "./coreC++";
import cloudComputing from "./cloudComputing";
import cyberSecurityEthicalHackingCurriculum from "./cyberSecurity&EthicalHackingCurriculum";
import dsaMastery from "./dsaMastery";
import coreJava from "./coreJava";
import fullStackWebDevelopment from "./fullStackWebDevelopment";
import Iot from "./Iot";
import kotlinAndroid from "./kotilnProgramming";
import advanceJava from "./advanceJava";
import meanStack from "./meanStack";
import machineLearning from "./machineLearning";
import mernStack from "./mernStack";
import cProgramming from "./cProgramming";
import pythonProgramming from "./pythonProgramming";


/* 🔥 CLEAN + SAFE ARRAY */
const allCourses = [aiML, coreCPlusPlus, cloudComputing, cyberSecurityEthicalHackingCurriculum, dataScience, dsaMastery, programmingDSA,
  coreJava, fullStackWebDevelopment, Iot, kotlinAndroid, advanceJava, meanStack, mernStack, machineLearning, cProgramming, pythonProgramming]
  .filter(Boolean) // ✅ remove undefined imports
  .map((course) => ({
    slug: course.slug || "",
    title: course.title || "Untitled Course",
    jobs: course.jobs || [],
    ...course, // ✅ keep full freedom
  }));

/* ✅ EXPLORE PAGE */
export const courses = allCourses;

/* ✅ DETAIL PAGE */
export const courseMap = Object.fromEntries(
  allCourses.map((course) => [course.slug, course])
);