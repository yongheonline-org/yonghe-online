import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import Banner from './banner/banner';
import Tabs from './tabs/tab';

class NewsPageLayout extends React.Component {
	render() {
		return (
			<>
				<Navbar/>
				<Banner/>
				{/* IMPORTANT: Pass Value to list page */}
				<Tabs/>
				<Footer/>
			</>
		);
	}
}

NewsPageLayout.propTypes = {
	children: PropTypes.node,
};

export default NewsPageLayout;
