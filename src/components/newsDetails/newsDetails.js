// /* eslint-disable react/prop-types */
// import React from 'react';
// import { graphql } from 'gatsby';
// import NewsHeader from '../newsList/newsHeader/newsHeader';
// import Image from 'gatsby-image';

// const NewsDetails = ({data}) => {
// 	return(
// 		<>
// 			<NewsHeader/>
// 			<div className="container" style={{paddingTop:'2vw',textAlign:'center'}}>
// 				<h4>{data.news.title}</h4>
// 				<form>
// 					<div className="form-group row" style={{paddingTop:'13px',justifyContent:'center', color:'rgb(151,151,151)', fontSize:'13px'}}>
// 						<label className="col-form-label" style={{marginRight:'10px'}}>来源：{data.news.source} </label>
// 						<label className="col-form-label" style={{marginRight:'10px'}}>作者：{data.news.author} </label>
// 						<label className="col-form-label" style={{marginRight:'10px'}}>日期：{data.news.date} </label>
// 					</div>
// 					<div className="form-group">
// 						<Image fluid={data.news.image.childImageSharp.fluid} style={{padding:'15px 12%'}}/>
// 					</div>

// 				</form>
// 			</div>
// 		</>
// 	);
// };

// export const query = graphql`
//   query GetSingleNews($slug: String) {
//     news: strapiNewsCollection(slug: { eq: $slug }) {
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
//     }
//   }
// `;

// export default NewsDetails;
