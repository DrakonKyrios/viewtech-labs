export const skills = [
  {
    name: "FrontEnd",
    parent: true,
    children: [
      { name: "HTML \\ CSS", isProficient: true, isUsed: true, children: [] },
      {
        name: "Javascript",
        isProficient: true,
        isUsed: true,
        children: [
          { name: "React", isProficient: true, isUsed: true, children: [] },
          { name: "Angular", isProficient: false, isUsed: false, children: [] },
          {
            name: "Typescript",
            isProficient: true,
            isUsed: false,
            children: [],
          },
          { name: "Vue.js", isProficient: false, isUsed: false, children: [] },
        ],
      },
      { name: "Storybook", isProficient: false, isUsed: false, children: [] },
      { name: "jQuery", isProficient: false, isUsed: false, children: [] },
    ],
  },
  {
    name: "BackEnd",
    parent: true,
    children: [
      {
        name: "C#",
        isProficient: true,
        isUsed: false,
        children: [
          { name: ".Net", isProficient: true, isUsed: false, children: [] },
          { name: "EF", isProficient: true, isUsed: false, children: [] },
          { name: "Dapper", isProficient: true, isUsed: false, children: [] },
        ],
      },
      {
        name: "Java",
        isProficient: true,
        isUsed: false,
        children: [
          { name: "Kotlin", isProficient: false, isUsed: false, children: [] },
          { name: "Spring", isProficient: true, isUsed: false, children: [] },
          {
            name: "Hibernate",
            isProficient: false,
            isUsed: false,
            children: [],
          },
          { name: "Flyway", isProficient: false, isUsed: false, children: [] },
        ],
      },
      {
        name: "Node.js",
        isProficient: false,
        isUsed: true,
        children: [
          { name: "Express", isProficient: false, isUsed: true, children: [] },
        ],
      },
      { name: "Python", isProficient: false, isUsed: false, children: [] },
      { name: "PyTeal", isProficient: true, isUsed: true, children: [] },
      { name: "Go", isProficient: false, isUsed: false, children: [] },
    ],
  },
  {
    name: "DB",
    parent: true,
    children: [
      { name: "MSSQL", isProficient: true, isUsed: false, children: [] },
      { name: "MySQL", isProficient: false, isUsed: false, children: [] },
      { name: "MongoDB", isProficient: false, isUsed: false, children: [] },
      { name: "CosmosDB", isProficient: true, isUsed: false, children: [] },
    ],
  },
  {
    name: "Deployment",
    parent: true,
    children: [
      { name: "Azure", isProficient: true, isUsed: false, children: [] },
      { name: "AWS", isProficient: false, isUsed: false, children: [] },
      { name: "Docker", isProficient: true, isUsed: false, children: [] },
    ],
  },
  { name: "Git", isProficient: true, isUsed: false, children: [] },
];
