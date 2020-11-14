import React from 'react';
import Container from 'react-bootstrap/Container';

import Home from './Home';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Resume from './Resume';

export default function Section({ section }) {
	console.log(`renders section with : ${section}`);
	return (
		<Container fluid className="border d-flex justify-content-center align-items-center h-100">
			{section === 'Home' && <Home />}
			{section === 'Education' && <Education />}
			{section === 'Skills' && <Skills />}
			{section === 'Projects' && <Projects />}
			{section === 'Resume' && <Resume />}
		</Container>
	);
}
