import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import Banner from './banner/banner';
import { Link } from 'gatsby';

// import ProductDetails from '../productDetails/productDetails';
class NewsPageLayout extends React.Component {
	// constructor(props){
	// 	super(props);
	// 	this.state = {
	// 		pageValue: 4,
	// 	};
	// }

	// updateValue = (event) => {
	// 	const value = event.target.getValue();
	// 	this.setState({
	// 		pageValue: value
	// 	});
	// 	console.log(event.target.getValue());
	// }
	render() {
		return (
			<>
				<Navbar/>
				<Banner/>
				<Link to="/platform/product-list" state={{ pageValue: 0 }}>GO TO 0</Link>
				<Link to="/platform/product-list" state={{ pageValue: 1 }}>GO TO 1</Link>
				<Link to="/platform/product-list" state={{ pageValue: 2 }}>GO TO 2</Link>

				{/* <ProductDetails/> */}
				<Footer/>
			</>
		);
	}
}

NewsPageLayout.propTypes = {
	children: PropTypes.node,
};

export default NewsPageLayout;
