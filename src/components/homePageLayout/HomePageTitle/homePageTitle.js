import React from 'react';
import { Link } from 'gatsby';
import {MdKeyboardArrowRight}from 'react-icons/md';
import './homePageTitle.scss';
const HomePageTitle = ({sectionTitle, sectionSubTitle, link}) => {
	console.log(sectionTitle,sectionSubTitle);
	return (
		<>
			<div className="homePageSectionTitle">
				<h2>{sectionTitle}</h2>
			</div>
			<div className="homePageSubSectionTitle">
				<h4>{sectionSubTitle}</h4>
				<p style={{paddingRight:'2.5%'}}><Link to={link} className="linkToDetailPage">
					More<MdKeyboardArrowRight size={25} style={{ height: 25, width: 25, margin : 'auto',position:'absolute'}}/>
				</Link>
				</p>
			</div>
		</>
	);
};

export default HomePageTitle;
