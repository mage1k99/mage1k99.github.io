import { defineStore } from "pinia";

export const useProjectsStore = defineStore("projects", {
  state: () => ({
    projects: [
      {
        image: "/images/projects/debloat.jpeg",
        title: "De-bloat MI",
        description:
          "A Script to remove the bloatware installed in Xiaomi Devices without root permission.",
        technologies: ["Shell"],
        github_url: "https://github.com/mage1k99/DebloatMi",
        isOpenSource: true,
      },
      {
        image: "/images/projects/debloat.jpeg",
        title: "De-bloat MI",
        description:
          "A Script to remove the bloatware installed in Xiaomi Devices without root permission.",
        technologies: ["Shell"],
        isOpenSource: false,
      },
    ],
  }),
});
