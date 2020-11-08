import React from 'react';
import PropTypes from 'prop-types';
import ProductList from './productList';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
class ProductListPageLayout extends React.Component {
	render() {
		return (
			<>
				<Navbar/>
				<ProductList/>
				<Footer/>
			</>
		);
	}
}

ProductListPageLayout.propTypes = {
	children: PropTypes.node,
};

export default ProductListPageLayout;
