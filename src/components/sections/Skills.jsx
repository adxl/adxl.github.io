import React from 'react';
import Container from 'react-bootstrap/Container';

export default function Skills() {
	return (
		<Container className="text-center">
			<h1 className="section-title">COMPÉTENCES</h1>
			<div className="d-flex justify-content-between">
				<div className="skill-cat">
					<p className="font-weight-bold">Languages Web</p>
					<ul>
						<li>HTML</li>
						<li>CSS/SCSS</li>
						<li>JavaScript</li>
						<li>Python</li>
					</ul>
				</div>
				<div className="skill-cat">
					<p className="font-weight-bold">Technologies Web</p>
					<ul>
						<li>React</li>
						<li>jQuery</li>
						<li>Node.js</li>
						<li>FastAPI</li>
						<li>Starlette</li>
					</ul>
				</div>
				<div className="skill-cat">
					<p className="font-weight-bold">Bases de Données</p>
					<ul>
						<li>MySQL</li>
						<li>PostgreSQL</li>
						<li>MongoDB</li>
					</ul>
				</div>
				<div className="skill-cat">
					<p className="font-weight-bold">Outils de Développement/Design</p>
					<ul>
						<li>git/Github</li>
						<li>Docker/Docker-compose</li>
						<li>ESLint/Pylint</li>
						<li>Shell</li>
						<li>Jira/Trello</li>
						<li>Visual Studio Code</li>
						<li>Photoshop/Illustrator</li>
					</ul>
				</div>
			</div>
		</Container>
	);
}
