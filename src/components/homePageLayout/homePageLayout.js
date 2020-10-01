import React from 'react';
import PropTypes from 'prop-types';

import HomePageLayoutStyle from './homePageLayout.module.scss';
// import Cooperators from './cooperators/cooperators';
// import NewsCenter from './newsCenter/newsCenter';
class HomePageLayout extends React.Component {
	render() {
		return (
			<>
				<div className={HomePageLayoutStyle.yongheOnlineHomePage}>
					{this.props.children}
				</div>
				{/* <NewsCenter /> */}
				{/* <Cooperators></Cooperators> */}
			</>
		);
	}
}

HomePageLayout.propTypes = {
	children: PropTypes.node,
};

export default HomePageLayout;
