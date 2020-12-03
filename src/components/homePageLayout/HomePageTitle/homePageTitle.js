import React from 'react';
import { Link } from 'gatsby';
import {MdKeyboardArrowRight}from 'react-icons/md';
import './homePageTitle.scss';
const HomePageTitle = ({sectionTitle, sectionSubTitle, link, display}) => {
	return (
		<>
			<div className="homePageSectionTitle">
				<h4 style={{fontSize: 'calc(18px + 1vw)'}}>{sectionTitle}</h4>
			</div>
			<div className="homePageSubSectionTitle">
				<h2 style={{fontSize: 'calc(12px + 1vw)'}}>{sectionSubTitle}</h2>
				<p style={{display:`${display}`}} ><Link to={link} className="linkToDetailPage">
					更多<MdKeyboardArrowRight size={25} style={{ height: 25, width: 25, margin : 'auto',position:'absolute'}}/>
				</Link>
				</p>
			</div>
		</>
	);
};

export default HomePageTitle;
