export const skills = [
  {
    name: "FrontEnd",
    parent: true,
    children: [
      {
        name: "HTML \\ CSS",
        proficiency: 1,
        children: [
          { name: "Figma", proficiency: 0.95, isUsed: false, children: [] },
          { name: "Adobe", proficiency: 0.95, isUsed: false, children: [] },
          { name: "Gimp", proficiency: 0.95, isUsed: false, children: [] },
        ],
      },
      {
        name: "Javascript \\ Typescript",
        proficiency: 1,
        isUsed: true,
        children: [
          { name: "Storybook", proficiency: 0.95, isUsed: false, children: [] },
        ],
      },
      { name: "React", proficiency: 1, isUsed: true, children: [] },
      { name: "Angular", proficiency: 0.85, isUsed: false, children: [] },
      { name: "Vue.js", proficiency: 0.6, isUsed: false, children: [] },
      { name: "jQuery", proficiency: 1, isUsed: false, children: [] },
    ],
  },
  {
    name: "BackEnd",
    parent: true,
    children: [
      {
        name: "C#",
        proficiency: 1,
        isUsed: false,
        children: [
          { name: ".Net", proficiency: 1, isUsed: false, children: [] },
          { name: "EF", proficiency: 1, isUsed: false, children: [] },
          { name: "Dapper", proficiency: 1, isUsed: false, children: [] },
        ],
      },
      {
        name: "Java",
        proficiency: 1,
        isUsed: false,
        children: [
          { name: "Kotlin", proficiency: 1, isUsed: false, children: [] },
          { name: "Spring", proficiency: 1, isUsed: false, children: [] },
          {
            name: "Hibernate",
            proficiency: 1,
            isUsed: false,
            children: [],
          },
          { name: "Flyway", proficiency: 1, isUsed: false, children: [] },
        ],
      },
      {
        name: "Node.js",
        proficiency: 1,
        isUsed: true,
        children: [
          { name: "Express", proficiency: 1, isUsed: true, children: [] },
        ],
      },
      { name: "Python", proficiency: 0.7, isUsed: false, children: [] },
      { name: "PyTeal", proficiency: 0.8, isUsed: false, children: [] },
      { name: "Go", proficiency: 0.5, isUsed: false, children: [] },
    ],
  },
  {
    name: "DB",
    parent: true,
    children: [
      {
        name: "MSSQL",
        proficiency: 1,
        isUsed: false,
        children: [
          { name: "SSIS", proficiency: 1, isUsed: false, children: [] },
          {
            name: "Stored Procs",
            proficiency: 1,
            isUsed: false,
            children: [],
          },
          { name: "Profiler", proficiency: 1, isUsed: false, children: [] },
        ],
      },
      { name: "MySQL", proficiency: 0.8, isUsed: false, children: [] },
      { name: "MongoDB", proficiency: 0.85, isUsed: false, children: [] },
      { name: "CosmosDB", proficiency: 0.95, isUsed: false, children: [] },
    ],
  },
  {
    name: "DevOps",
    parent: true,
    children: [
      {
        name: "Azure",
        proficiency: 1,
        isUsed: true,
        children: [
          { name: "DevOps", proficiency: 1, isUsed: true, children: [] },
          { name: "VMs", proficiency: 1, isUsed: true, children: [] },
          { name: "OpenAI", proficiency: 1, isUsed: true, children: [] },
        ],
      },
      {
        name: "AWS",
        proficiency: 0.8,
        isUsed: false,
        children: [
          { name: "CodePipeline", proficiency: 1, isUsed: true, children: [] },
          { name: "Code Deploy", proficiency: 1, isUsed: true, children: [] },
        ],
      },
      {
        name: "Docker",
        proficiency: 0.9,
        isUsed: false,
        children: [
          { name: "Containers", proficiency: 1, isUsed: true, children: [] },
          { name: "Compose", proficiency: 1, isUsed: true, children: [] },
        ],
      },
      {
        name: "Git",
        proficiency: 1,
        isUsed: true,
        children: [
          {
            name: "GitHub Actions",
            proficiency: 1,
            isUsed: true,
            children: [],
          },
        ],
      },
    ],
  },
  {
    name: "Language",
    parent: true,
    children: [
      {
        name: "English",
        proficiency: 1,
        isUsed: true,
        children: [
          { name: "Native", proficiency: 1, isUsed: true, children: [] },
        ],
      },
      {
        name: "Spanish",
        proficiency: 0.7,
        isUsed: false,
        children: [
          { name: "Speaking", proficiency: 1, isUsed: true, children: [] },
          { name: "Writing", proficiency: 1, isUsed: true, children: [] },
        ],
      },
    ],
  },
];
