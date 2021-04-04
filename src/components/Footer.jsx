import React from 'react';
import Container from 'react-bootstrap/Container';

export default function Footer() {
	const getTodayDate = () => {
		const date = new Date();
		const day = String(date.getDate()).padStart(2, '0');
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const year = date.getFullYear();
		return `${day}.${month}.${year}`;
	};

	const getAge = () => {
		const date = new Date();
		const year = date.getFullYear();
		return year - 1999;
	};

	const getAgeProgress = () => {
		const todayDate = new Date();
		const birthDate = new Date('1999-04-03');

		let diffDays = Math.ceil((todayDate - birthDate) / (1000 * 60 * 60 * 24));
		diffDays -= (365 * getAge());

		return ((diffDays * 200) / 365);
	};
	return (
		<Container fluid id="footer" className="d-flex justify-content-between">
			<div>
				{getTodayDate()}
			</div>
			<div className="d-flex align-items-center">
				<span className="mr-2">Niveau {getAge()}</span>
				<div id="age-bar">
					<div style={{ width: getAgeProgress() }} />
				</div>
			</div>
		</Container>
	);
}
