import React from 'react';
import PropTypes from 'prop-types';

import '../global.scss';
import HomePageLayoutStyle from './homePageLayout.module.scss';

class HomePageLayout extends React.Component {
	render(){
		return <div className={HomePageLayoutStyle.yongheOnlineHomePage}>{this.props.children}</div>;
	}
}

HomePageLayout.propTypes = {
	children: PropTypes.node
};

export default HomePageLayout;
