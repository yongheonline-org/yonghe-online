/* eslint-disable react/jsx-key */
// import React, { useEffect, useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

import Cooperators from './cooperators/cooperators';
import NewsCenter from './newsCenter/newsCenter';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import TopSection from './topSection/topSection';
import AboutUS from './aboutus/aboutus';
import Platform from './platform/platform';

import './homePageLayout.scss';

const withScreenHeight = (component, id) => {
	let style = {};
	return <div
		className='sectionWrapper'
		style={style}
		id={id}
		key={id}
	>{component}</div>;
};

const sections = [
	<TopSection/>,
	<AboutUS/>,
	<NewsCenter />,
	<Platform/>,
	<Cooperators/>
];

const convertedSections = sections.map((section, index) => {
	return withScreenHeight(section, index);
});

const HomePageLayout = () => {
	return <div>
		<Navbar/>
		{convertedSections}
		<Footer/>
	</div>;
};

HomePageLayout.propTypes = {
	children: PropTypes.node,
};

export default HomePageLayout;
