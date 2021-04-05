import React from 'react';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import projects from './schemas';

import techs from '../../../assets/techs';

function ProjectDetails({ projectKey }) {
	const project = projects[projectKey];
	return (
		<Container>
			<Row className="d-flex align-self-end ">
				<Col className="pip-details p-0 mr-4 pt-2">
					<p className="mb-5">{project.description}</p>
					<div>
						<p className="features">FONCTIONNALITÉS:</p>
						<ul>
							{project.features.map((feature, index) => <li key={index}>- {feature}</li>)}
						</ul>
					</div>
				</Col>
				<Col lg={3} className="pip-details p-0 pt-2">
					<div className="pl-2">
						<p>Réalisé avec :</p>
						{project.techs.map((tech) => (
							<div key={tech.name}>
								<img className="pip-icon" src={techs[tech.image]} alt="" />
								<p>{tech.name}</p>
							</div>
						))}
					</div>
				</Col>
			</Row>

			<div className={`${project.source || project.demo ? 'pip-details ' : ''}pt-3`}>
				{project.source && (
					<a target="_blank" rel="noreferrer" href={project.source}>
						<button type="button" className="pip-btn pip-source-btn mr-3">Source</button>
					</a>
				)}
				{project.demo && <a target="_blank" rel="noreferrer" href={project.demo}><button type="button" className="pip-btn pip-try-btn">Demo</button></a>}
			</div>
		</Container>
	);
}

export default ProjectDetails;
