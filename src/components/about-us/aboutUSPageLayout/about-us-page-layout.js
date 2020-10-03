import React from 'react';
import AboutUSMiddle from '../about-us-middle/about-us-middle';
import './about-us-page-layout.scss';
import Navbar from '../../Navbar/navbar';
import Footer from '../../Footer/footer';
// import OurTeam from '../about-us-ourteam/ourTeam';
class AboutUSPageLayout extends React.Component {
	render() {
		return (
			<div>
				<Navbar/>
				<AboutUSMiddle></AboutUSMiddle>
				{/* <OurTeam /> */}
				<Footer/>
			</div>
		);
	}
}

export default AboutUSPageLayout;
