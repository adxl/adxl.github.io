import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';

import Header from './components/Header';
import Section from './components/Section';

export default function App() {
	const [section, setSection] = useState('Home');

	return (
		<Container fluid className="d-flex flex-column h-100">
			<Header setSection={setSection} />
			<Section section={section} />
		</Container>
	);
}
