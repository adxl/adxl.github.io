/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import ProjectDetails from './ProjectDetails';
import projectsSchemas from './schemas';

export default function Projects() {
	const [currentProject, setCurrentProject] = useState(Object.keys(projectsSchemas)[0]);

	return (
		<Row className="d-flex justify-content-between w-100">
			<Col lg={5} className="pip-list pl-5" style={{ width: 200 }}>
				<h1 className="section-title">PROJETS</h1>
				<ul>
					{Object.keys(projectsSchemas).map((key) => (
						<li
							key={key}
							className={currentProject === key ? ' pip-item-selected' : ''}
							onClick={() => setCurrentProject(key)}
						>{projectsSchemas[key].name}
						</li>
					))}
				</ul>
			</Col>
			<Col className="d-flex align-items-center">
				{currentProject && <ProjectDetails projectKey={currentProject} />}
			</Col>
		</Row>
	);
}
