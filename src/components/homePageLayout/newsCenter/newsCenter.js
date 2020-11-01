import React from 'react';
import './newscenter.scss';
// import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';
import arrow from './arrow.png';
import HomePageTitle from '../HomePageTitle/homePageTitle';

const query = graphql`
{
  allPrismicNewscollection(limit: 3, sort: {fields: data___date, order: DESC}) {
	  edges {
		node {
		  id
		  data {
			author {
			  text
			}
			date
			description {
			  text
			}
			image {
			  url
			}
			shortdescription {
			  text
			}
			source {
			  text
			}
			title {
			  text
			}
		  }
		  uid
		}
	  }
	}
  }
`;
const NewsCenter = () => {
	const data = useStaticQuery(query);
	const {
		allPrismicNewscollection: { edges: allNews },
	} = data;
	console.log(allNews);
	return (
		<section className="newsCenterSection">
			<HomePageTitle sectionTitle="新闻中心" sectionSubTitle="News Center" link="/news"/>
			<div className="newsSectionCenter newsCenter">
				{allNews.map((news) => {
					console.log(news.node.data.image.url);
					return (
						<article key={news.node.id} className="newsCenterArticle">
							<img src={news.node.data.image.url} style={{width: '100%', height: '100%',objectFit:'contain'}}/>
							<div className="newsTitleRow">
								<div className="dateTime">
									<h1>{news.node.data.date.substring(8,10)}</h1>
									<p style={{fontSize:'11px', paddingTop:'0px'}}>{news.node.data.date.substring(0,7)}</p>
								</div>
								<div className="newsTitle">
									<p style={{fontSize:'15px',paddingTop:'10px'}}>{news.node.data.title.text}</p>
								</div>
							</div>
							<div className="newsSeparator"/>
							<p className="newsShortDescription">{news.node.data.shortdescription.text}</p>
							<div className="arrow" >
								<Link to={`/news/${news.node.uid}`} className="moreButton">查看更多</Link>
								<img className="halfArrowImg" src={arrow} style={{width:'32px',height:'22px'}}/></div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default NewsCenter;
