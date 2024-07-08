export default function SkillTree({ skill }) {
  return (
    <div className="mx-4 pb-4 mb-4 border-b-2 border-primary-lighter/20">
      <div className="uppercase font-bold border-b-4 mb-6 border-b-primary-dark">
        {skill.name}
      </div>
      <div className="">
        {skill.children.map((individual) => (
          <div className="mb-2">
            <div className="flex justify-between text-sm">
              <div>{individual.name}</div>
              <div>{individual.proficiency * 100}%</div>
            </div>
            <div>
              <div class="w-full bg-gray-200 rounded-fullh-1.5 dark:bg-gray-700">
                <div
                  class="bg-secondary h-1.5 mb-2  rounded-full"
                  style={{ width: `${individual.proficiency * 100}%` }}
                ></div>
              </div>
              <div className="flex flex-wrap">
                {individual.children &&
                  individual.children.map((library) => (
                    <span className="p-1 bg-primary-lighter/10 mr-2 text-sm mb-2 ">
                      {library.name}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
