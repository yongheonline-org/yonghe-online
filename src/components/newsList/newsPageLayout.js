import React from 'react';
import PropTypes from 'prop-types';
import NewsHeader from './newsHeader/newsHeader';
import NewsList from './newsList/newsList';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
class NewsPageLayout extends React.Component {
	render() {
		return (
			<>
				<Navbar/>
				<NewsHeader/>
				<NewsList/>
				<Footer/>
			</>
		);
	}
}

NewsPageLayout.propTypes = {
	children: PropTypes.node,
};

export default NewsPageLayout;
