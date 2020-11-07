/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from 'react';
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
	return <div
		className='sectionWrapper'
		style={{ height: typeof window !== 'undefined' ? window.innerHeight : 'auto'}}
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

const DEFAULT_SECTION_INDEX = 0;

const HomePageLayout = () => {
	const [sectionIndex, setSectionIndex] = useState(DEFAULT_SECTION_INDEX);
	const scrollHander = (event) => {
		if(event.deltaY > 0){
			if(sectionIndex < convertedSections.length - 1){
				const target = document.getElementById(`${sectionIndex + 1}`).offsetTop;
				window.scrollTo(0, target);
				setSectionIndex(() => {
					return sectionIndex + 1;
				});
			}
		}else if(event.deltaY < 0){
			if(sectionIndex > 0){
				const target = document.getElementById(`${sectionIndex - 1}`).offsetTop;
				window.scrollTo(0, target);
				setSectionIndex(() => {
					return sectionIndex - 1;
				});
			}
		}
	};
	useEffect(() => {
		window.addEventListener('wheel', scrollHander);
		return () => {
			window.removeEventListener('wheel', scrollHander);
		};
	});
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
