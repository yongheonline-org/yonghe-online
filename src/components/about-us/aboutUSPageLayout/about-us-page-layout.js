import React from 'react';
import AboutUSMiddle from '../about-us-middle/about-us-middle';
import './about-us-page-layout.scss';
// import OurTeam from '../about-us-ourteam/ourTeam';
class AboutUSPageLayout extends React.Component {
	render() {
		return (
			<div>
				<AboutUSMiddle></AboutUSMiddle>
				{/* <OurTeam /> */}
			</div>
		);
	}
}

export default AboutUSPageLayout;
