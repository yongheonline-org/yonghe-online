import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import Banner from './banner/banner';
import { Link } from 'gatsby';

class NewsPageLayout extends React.Component {
	render() {
		return (
			<>
				<Navbar/>
				<Banner/>
				{/* IMPORTANT: Pass Value to list page */}
				<Link to="/platform/product-list" state={{ pageValue: 0 }}>GO TO 0</Link>
				<Link to="/platform/product-list" state={{ pageValue: 1 }}>GO TO 1</Link>
				<Link to="/platform/product-list" state={{ pageValue: 2 }}>GO TO 2</Link>
				<Footer/>
			</>
		);
	}
}

NewsPageLayout.propTypes = {
	children: PropTypes.node,
};

export default NewsPageLayout;
