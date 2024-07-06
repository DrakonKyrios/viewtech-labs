export const skills = [
  {
    name: "FrontEnd",
    parent: true,
    children: [
      { name: "HTML \\ CSS", proficiency: 1, children: [
        { name: "Figma", proficiency: .95, isUsed: false, children: [] },
        { name: "Adobe", proficiency: .95, isUsed: false, children: [] },
        { name: "Gimp", proficiency: .95, isUsed: false, children: [] },
      ] },
      {
        name: "Javascript \\ Typescript",
        proficiency: 1,
        isUsed: true,
        children: [
          { name: "Storybook", proficiency: .95, isUsed: false, children: [] },
          
        ]
      },
      { name: "React", proficiency: 1, isUsed: true, children: [] },
      { name: "Angular", proficiency: .85, isUsed: false, children: [] },
      { name: "Vue.js", proficiency: .6, isUsed: false, children: [] },
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
      { name: "Python", proficiency: .7, isUsed: false, children: [] },
      { name: "PyTeal", proficiency: .8, isUsed: false, children: [] },
      { name: "Go", proficiency: .5, isUsed: false, children: [] },
    ],
  },
  {
    name: "DB",
    parent: true,
    children: [
      { name: "MSSQL", proficiency: 1, isUsed: false, children: [] },
      { name: "MySQL", proficiency: .8, isUsed: false, children: [] },
      { name: "MongoDB", proficiency: .85, isUsed: false, children: [] },
      { name: "CosmosDB", proficiency: .95, isUsed: false, children: [] },
    ],
  },
  {
    name: "DevOps",
    parent: true,
    children: [
      { name: "Azure", proficiency: 1, isUsed: true, children: [] },
      { name: "AWS", proficiency: .8, isUsed: false, children: [] },
      { name: "Docker", proficiency: .9, isUsed: false, children: [] },
      { name: "Git", proficiency: 1, isUsed: true, children: [] }
    ],
  },
 ,
];
