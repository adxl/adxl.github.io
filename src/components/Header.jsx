import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export default function Header({ setSection }) {
	return (
		<Container fluid className="border">
			<Nav className="d-flex justify-content-around">
				<Nav.Link onClick={() => setSection('Home')}>Home</Nav.Link>
				<Nav.Link onClick={() => setSection('Education')}>Education</Nav.Link>
				<Nav.Link onClick={() => setSection('Skills')}>Skills</Nav.Link>
				<Nav.Link onClick={() => setSection('Projects')}>Projects</Nav.Link>
				<Nav.Link onClick={() => setSection('Resume')}>Resume</Nav.Link>
			</Nav>
		</Container>
	);
}
