// import React from 'react';
// import './newscenter.scss';
// import Image from 'gatsby-image';
// import { graphql, useStaticQuery } from 'gatsby';
// import { Link } from 'gatsby';
// import {MdKeyboardArrowRight}from 'react-icons/md';


// const query = graphql`
//   {
//     allStrapiNewsCollection(limit: 3, sort: { fields: date, order: DESC }) {
//       nodes {
//         author
//         title
//         strapiId
//         source
//         slug
//         shortDescription
//         description
//         date
//         image {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `;
// const NewsCenter = () => {
// 	const data = useStaticQuery(query);
// 	const {
// 		allStrapiNewsCollection: { nodes: allNews },
// 	} = data;
// 	console.log(allNews);
// 	return (
// 		<section className="newsCenterSection">
// 			<div className="newsCenterSectionTitle">
// 				<h2>News Center</h2>
// 			</div>
// 			<div className="newsCenterSubSectionTitle">
// 				<h4>新闻中心</h4>
// 				<p style={{paddingRight:'2.5%'}}><Link to="/" className="linkToAllNews">
// 					More<MdKeyboardArrowRight size={25} style={{ height: 25, width: 25, margin : 'auto',position:'absolute'}}/>
// 				</Link>
// 				</p>

// 			</div>
// 			<div className="newsSectionCenter newsCenter">
// 				{allNews.map((news) => {
// 					console.log(typeof news.date.split('-')[0]);
// 					return (
// 						<article key={news.strapiId} className="newsCenterArticle">
// 							<Image fluid={news.image.childImageSharp.fluid}/>
// 							<div className="newsTitleRow">
// 								<div className="dateTime">
// 									<h1>{news.date.substring(8,10)}</h1>
// 									<p style={{fontSize:'11px'}}>{news.date.substring(0,7)}</p>
// 								</div>
// 								<div className="newsTitle">
// 									<p style={{fontSize:'15px'}}>{news.title}</p>
// 								</div>
// 							</div>
// 							<div className="newsSeparator"/>
// 							<p className="newsShortDescription">{news.shortDescription}</p>
// 							<button className="moreButton">查看更多</button>
// 						</article>
// 					);
// 				})}
// 			</div>
// 		</section>
// 	);
// };

// export default NewsCenter;
