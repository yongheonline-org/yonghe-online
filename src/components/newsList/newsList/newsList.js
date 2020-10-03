// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js';
// import './newsList.scss';
// import arrow from '../../homePageLayout/newsCenter/arrow.png';
// import { graphql, useStaticQuery } from 'gatsby';
// import { Link } from 'gatsby';

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

// const NewsList = () => {
// 	const data = useStaticQuery(query);
// 	const {
// 		allStrapiNewsCollection: { nodes: allNews },
// 	} = data;
// 	return(
// 		<div className="row" style={{paddingTop:'3rem', paddingLeft:'8%', paddingRight:'10%'}}>
// 			{allNews.map((news) => {
// 				return (
// 					<div className="col-md-6" key={news.strapiId}>
// 						<Link to={`/news/${news.slug}`} style={{color:'black'}} >
// 							<div className="card" style={{border:'none'}}>
// 								<div className="card-body" >
// 									<div className="newsListTitleRow">					
// 										<div className="newsListDateTime">
// 											<h1 style={{fontWeight:'400'}}>{news.date.substring(8,10)}</h1>
// 											<p style={{fontSize:'11px',fontWeight:'400'}}>{news.date.substring(0,7)}</p>
// 										</div>
// 										<div className="newsListTitle">
// 											<p style={{fontSize:'15px', paddingBottom:'5px', fontWeight:'560'}}>{news.title}</p>
// 											<p className="newsListShortDescription">{news.shortDescription}</p>
// 											<div className="newsListArrow" >
// 												<button className="newsListMoreButton">查看更多</button>
// 												<img className="newsListHalfArrowImg" src={arrow} style={{width:'32px',height:'22px'}}/></div>
// 										</div>
// 									</div>
// 								</div>
// 								<div className="newsListUnderline"/>
// 							</div>
// 						</Link>
// 					</div>
// 				);})}
// 		</div>
// 	);
// };
		

// export default NewsList;