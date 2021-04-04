import React from 'react';
import Container from 'react-bootstrap/Container';

export default function Education() {
	return (
		<Container>
			<div>
				<div>
					<h1 className="mb-4">FORMATION</h1>
					<ul id="edu-list">
						<li>
							<p className="d-flex align-items-center">
								<span className="circle" />
								2020-2021
							</p>
							<p>
								Bachelor en Ingénierie du Web - ESGI, France
							</p>
						</li>
						<li>
							<p className="d-flex align-items-center">
								<span className="circle" />
								2016-2019
							</p>
							<p>
								Licence en Informatique - Université d&apos;Oran 1, Algérie
							</p>
						</li>
						<li>
							<p className="d-flex align-items-center">
								<span className="circle" />
								Juin 2016
							</p>
							<p>
								Baccalauréat Scientifique - Lycée Colonel Lotfi, Algérie
							</p>
						</li>
					</ul>
				</div>
				<div id="mobile-curve-container">
					<div id="mobile-curve" />
				</div>

			</div>
		</Container>
	);
}
