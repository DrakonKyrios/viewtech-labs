export default function SkillTree({skill}) {
    return <div className="px-2 mb-8">
			<div className="uppercase font-bold border-b-4 mb-6 border-b-primary-dark">{skill.name}</div>
			<div className="px-4">{skill.children.map((individual) => (
				<div className="mb-2">
					<div className="flex justify-between text-sm">
							<div>{individual.name}</div>
							<div>{individual.proficiency*100}%</div>
					</div>
					<div>
					
					<div class="w-full bg-gray-200 rounded-full mb-2 h-1.5 dark:bg-gray-700">
						<div class="bg-secondary h-1.5 rounded-full" style={{width: `${individual.proficiency*100}%`}}></div>
					</div>
					{individual.children && individual.children.map(library => (<span className="p-1 bg-primary-dark mr-2 text-sm">{library.name}</span>))}
					</div>
				</div>
        ))}
    	</div>
    </div>
}