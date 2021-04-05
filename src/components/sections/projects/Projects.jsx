/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';

import ProjectDetails from './ProjectDetails';

export default function Projects() {
	const [currentProject, setCurrentProject] = useState();

	return (
		<Container>
			<h1 className="section-title">PROJETS</h1>
			<Container className="d-flex justify-content-between">
				<div className="pip-list" style={{ width: 200 }}>
					<ul>
						<li onClick={() => setCurrentProject('herme')}>Herme.io</li>
						<li onClick={() => setCurrentProject('wtracker')}>Weight Tracker</li>
						<li onClick={() => setCurrentProject('life')}>Game of Life</li>
						<li onClick={() => setCurrentProject('knights')}>Knights</li>
						<li onClick={() => setCurrentProject('webuy')}>WeBuy</li>
						<li onClick={() => setCurrentProject('forum')}>Forum</li>
					</ul>
				</div>
				<div>
					{currentProject && <ProjectDetails projectKey={currentProject} />}
				</div>
			</Container>
		</Container>
	);
}
