import aiML from "./aiMlLearning";
import dataScience from "./dataScience";
import programmingDSA from "./programmingDSA";
import mobileApplicationWeb from "./mobileApplicationWeb"
import softwareEngineering from "./softwareEngineering"
import computerNetwork from "./computerNetwork";
import databaseSystem from "./databaseSystems";
import distributedSystemCloudComputing from "./distributedSystemCloudComputing";
import gameDevelopment from "./gameDevelopment";
import naturalLanguageProcessing from "./naturalLanguageProcessing";
import robotics from "./robotics";
import computerArchitecture from "./computerArchitecture";
import operatingSystem from "./operatingSystem";
import computerGraphicsVisualization from "./computerGraphics&Visualization";
import humanComputerInteraction from "./humanComputerInteraction";

/* 🔥 CLEAN + SAFE ARRAY */
const allCourses = [aiML, dataScience, programmingDSA, mobileApplicationWeb, softwareEngineering, computerNetwork, databaseSystem, distributedSystemCloudComputing, gameDevelopment, naturalLanguageProcessing, robotics, computerArchitecture, operatingSystem, computerGraphicsVisualization, humanComputerInteraction]
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