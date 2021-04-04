import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export default function Header({ setSection }) {
	const [currentTab, setCurrentTab] = useState('home');

	const selectTab = (tab) => {
		setSection(tab);
		setCurrentTab(tab);
	};

	return (
		<Container fluid>
			<Nav className="d-flex justify-content-around pip-nav mt-3">
				<Nav.Link className={`pip-menu${currentTab === 'home' ? ' pip-menu-selected' : ''}`} onClick={() => selectTab('home')}>Home</Nav.Link>
				<Nav.Link className={`pip-menu${currentTab === 'edu' ? ' pip-menu-selected' : ''}`} onClick={() => selectTab('edu')}>Education</Nav.Link>
				<Nav.Link className={`pip-menu${currentTab === 'exp' ? ' pip-menu-selected' : ''}`} onClick={() => selectTab('exp')}>Experiences</Nav.Link>
				<Nav.Link className={`pip-menu${currentTab === 'skills' ? ' pip-menu-selected' : ''}`} onClick={() => selectTab('skills')}>Skills</Nav.Link>
				<Nav.Link className={`pip-menu${currentTab === 'projects' ? ' pip-menu-selected' : ''}`} onClick={() => selectTab('projects')}>Projects</Nav.Link>
				<Nav.Link className={`pip-menu${currentTab === 'resume' ? ' pip-menu-selected' : ''}`} onClick={() => selectTab('resume')}>Resume</Nav.Link>
			</Nav>
		</Container>
	);
}
