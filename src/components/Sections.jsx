import React from 'react';

import Home from './sections/Home';
import Education from './sections/Education';
import Experiences from './sections/Experiences';
// import Resume from './sections/Resume';
import Skills from './sections/Skills';

// import Projects from './sections/projects';

export default class Sections extends React.Component {
	render() {
		return (
			<>
				<Home />
				<Education />
				<Experiences />
				<Skills />
				{/* <Projects /> */}
				{/* <Resume /> */}
			</>
		);
	}
}
