import React from 'react';
import PropTypes from 'prop-types';

import HomePageLayoutStyle from './homePageLayout.module.scss';
// import Cooperators from './cooperators/cooperators';
// import NewsCenter from './newsCenter/newsCenter';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
class HomePageLayout extends React.Component {
	render() {
		return (
			<>
				<Navbar/>
				{/* <Sidebar/> */}
				<div className={HomePageLayoutStyle.yongheOnlineHomePage}>
					{this.props.children}
				</div>
				{/* <NewsCenter /> */}
				{/* <Cooperators></Cooperators> */}
				<Footer/>
			</>
		);
	}
}

HomePageLayout.propTypes = {
	children: PropTypes.node,
};

export default HomePageLayout;
