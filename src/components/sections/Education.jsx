import React from 'react';

export default class Education extends React.Component {
	render() {
		return (
			<section className="bg-secondary">
				<div>
					<h1 className="section-title">FORMATION</h1>
					<div>
						<ul id="edu-list">
							<li>
								<p className="d-flex align-items-center">
									<span className="circle" />
									2020-2021
								</p>
								<p>
									Bachelor en Ingénierie du Web - ESGI, France
								</p>
								<br />
							</li>
							<li>
								<p className="d-flex align-items-center">
									<span className="circle" />
									2016-2019
								</p>
								<p>
									Licence en Informatique - Université d&apos;Oran 1, Algérie
								</p>
								<br />
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
				</div>
			</section>
		);
	}
}
