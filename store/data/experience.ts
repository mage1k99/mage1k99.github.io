import { defineStore } from "pinia";

export const useWorkExperienceStore = defineStore("experience", {
    state: () => ({
        experience: [
            {
                company: "TPH Global, Australia",
                position: "FullStack Developer (Remote)",
                date: "March 2024 - Present",
                description: [
                    "Primary focused on frontend development with react",
                    "Working on maintenance of accounting product which is live and being used by thousands of customers",
                    "Agile development process",
                ],
                achievements: [
                    "Improved the performance of existing React Application by 25% by reducing unwanted render cycles",
                ],
                technologies: ["React.js"],
            },
            {
                company: "Memorres Digital Private Limited, India",
                position: "Software Engineer",
                date: "March 2023 - June 2022",
                description: [
                    "Primary focused on backend development with microservices architecture",
                    "Worked with various AWS technologies to create scalable, high availability microservices",
                    "Developed backend APIs using Node.js Express framework that works with PostgreSQL database for Clinic Metrics software, Community Management Product.",
                ],
                achievements: [
                    "Improved the performance of API call by 95% (reduced the response time from 22 seconds to 2 seconds)",
                    "Sync huge amount of data from external source to database with recovery mechanism",
                ],
                technologies: [
                    "Node.js",
                    "Express",
                    "PostgreSQL",
                    "AWS",
                    "Jest",
                    "SonarQube",
                    "Docker",
                    "Jenkins",
                ],
            },
            {
                company: "FossFreaks Private Limited, India",
                position: "Fullstack developer, System Administrator",
                date: "March 2021 - March 2023",
                description: [
                    "Worked on both backend and frontend with various technologies and tools",
                    "Developed Event management platform with payment gateway integration, Oauth and mobile app that is made in Flutter",
                    "Did deployment and maintenance of all systems from APIs, database, and servers",
                ],
                achievements: [
                    "Able to deploy 2 different applications that run in different port under same origin",
                ],
                technologies: [
                    "MongoDB",
                    "Vue.js",
                    "Fastify.js",
                    "Nuxt.js",
                    "PM2",
                    "Flutter",
                    "Redis",
                    "Git",
                    "Python",
                    "Flask",
                ],
            },
        ],
    }),
});
