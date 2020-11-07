import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import Banner from './banner/banner';
import ProductDetails from './productDetails/productDetails';
class NewsPageLayout extends React.Component {
	render() {
		return (
			<>
				<Navbar/>
				<Banner/>
				<ProductDetails/>
				<Footer/>
			</>
		);
	}
}

NewsPageLayout.propTypes = {
	children: PropTypes.node,
};

export default NewsPageLayout;
