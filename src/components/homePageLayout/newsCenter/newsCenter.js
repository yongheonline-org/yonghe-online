import React from 'react';
import './newscenter.scss';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';
import arrow from './arrow.png';
import HomePageTitle from '../HomePageTitle/homePageTitle';
import {Col,CardGroup,Image} from 'react-bootstrap';

const query = graphql`
{
  allPrismicNewscollection(limit: 3, sort: {fields: data___date, order: DESC}) {
	  edges {
		node {
		  id
		  data {
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
	return (
		<div className="newsCenterSection">
			<HomePageTitle sectionTitle="新闻中心" sectionSubTitle="News Center" link="/news"/>
			<CardGroup className="newsSectionCenter">
				{allNews.map((news) => {
					return <Col xs={12} sm={6} md={6} lg={4} xl={4} key={news.node.id} style={{paddingBottom:'15px'}}>
						<Link to={`/news/${news.node.uid}`}>
							<Image variant="top" src={news.node.data.image.url} className="newsImage" />
							<div className="newsTitleRow ">
								<div className="dateTime">
									<h1 style={{color:'black'}}>{news.node.data.date.substring(8,10)}</h1>
									<p style={{fontSize:'11px', paddingTop:'0px',color:'black'}}>{news.node.data.date.substring(0,7)}</p>
								</div>
								<div className="newsTitle">
									<p style={{fontSize:'15px',paddingTop:'10px',color:'black'}}>{news.node.data.title.text}</p>
								</div>
							</div>
						</Link>
						<div className="newsSeparator" />
						<p className="newsShortDescription">{news.node.data.shortdescription.text}</p>
						<div className="arrow" >
							<Link to={`/news/${news.node.uid}`} className="moreButton">了解详情</Link>
							<img className="halfArrowImg" src={arrow} style={{width:'32px',height:'22px',marginRight:'15px'}}/>
						</div>
						
					</Col>;
				})}
			</CardGroup>
		</div>
	);
};

export default NewsCenter;
