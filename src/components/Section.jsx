import React from 'react';
import Container from 'react-bootstrap/Container';

import Home from './Home';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';

export default function Section({ section }) {
	return (
		<Container fluid className="border d-flex justify-content-center align-items-center ">
			<h1>{section}</h1>
		</Container>
	);
}
