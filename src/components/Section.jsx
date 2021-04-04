import React from 'react';
import Container from 'react-bootstrap/Container';

import sections from './sections';

export default function Section({ section }) {
	return (
		<Container fluid className="d-flex justify-content-center align-items-center h-100 pb-4">
			<Container fluid className="pip-main h-100 d-flex justify-content-center">
				{section === 'home' && <sections.Home />}
				{section === 'edu' && <sections.Education />}
				{section === 'exp' && <sections.Experiences />}
				{section === 'skills' && <sections.Skills />}
				{section === 'projects' && <sections.Projects />}
				{section === 'resume' && <sections.Resume />}
			</Container>
		</Container>
	);
}
