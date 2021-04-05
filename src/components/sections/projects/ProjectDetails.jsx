import React from 'react';
import projects from './projectsDetails';

function ProjectDetails({ projectKey }) {
	const project = projects[projectKey];
	console.log(project);
	return (
		<div>
			<div>
				<p>{project.name}</p>
				<p>{project.description}</p>
				<p>Réalisé avec:
					<span>{project.tech}</span>
				</p>
				{/* <div>
					<div>
						<img className="tech-icon" src={techs.node} alt=" " />
						<img className="tech-icon" src={techs.react} alt=" " />
						<img className="tech-icon" src={techs.pg} alt=" " />
					</div>
				</div> */}
				<p className="features">FONCTIONNALITÉS:</p>
				<ul>
					{project.features.map((feature, index) => <li key={index}>- {feature}</li>)}
				</ul>
				<div>
					{project.source && (
						<a target="_blank" rel="noreferrer" href={project.source}>
							<button type="button" className="source-btn btn btn-light">Source</button>
						</a>
					)}
					{project.demo && <a target="_blank" rel="noreferrer" href={project.demo}><button type="button" className="try-btn btn btn-outline-success waves-effect">Tester</button></a>}
				</div>
			</div>
		</div>
	);
}

export default ProjectDetails;
