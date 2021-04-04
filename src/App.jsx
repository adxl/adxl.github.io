import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import './sass/main.scss';

import Header from './components/Header';
import Section from './components/Section';
import Footer	 from './components/Footer';

export default function App() {
	const [section, setSection] = useState('skills');

	return (
		<Container id="main" fluid className="d-flex flex-column h-100 p-0 position-relative">
			<Header setSection={setSection} />
			<Section section={section} />
			<Footer />
		</Container>
	);
}
