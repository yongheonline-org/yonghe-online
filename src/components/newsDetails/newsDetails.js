// /* eslint-disable react/prop-types */
// import React from 'react';
// import { graphql } from 'gatsby';
// import NewsHeader from '../newsList/newsHeader/newsHeader';
// import Image from 'gatsby-image';
// import Navbar from '../Navbar/navbar';
// import Footer from '../Footer/footer';
// import ReactMarkdown from 'react-markdown';

// const NewsDetails = ({data}) => {
// 	console.log(data.news.description);
// 	return(
// 		<>
// 			<Navbar/>
// 			<NewsHeader/>
// 			<div className="container" style={{paddingTop:'2vw',textAlign:'center'}}>
// 				<h4>{data.news.title}</h4>
// 				<form>
// 					<div className="form-group row" style={{paddingTop:'13px',justifyContent:'center', color:'rgb(151,151,151)', fontSize:'13px'}}>
// 						<label className="col-form-label" style={{marginRight:'10px'}}>来源：{data.news.source} </label>
// 						<label className="col-form-label" style={{marginRight:'10px'}}>作者：{data.news.author} </label>
// 						<label className="col-form-label" style={{marginRight:'10px'}}>日期：{data.news.date} </label>
// 					</div>
// 					<div className="text-center" style={{padding:'1vw 12%'}}>
// 						<Image fluid={data.news.image.childImageSharp.fluid} className="img-fluid"  />
// 					</div>
// 					<div className="form-group text-left" style={{padding:'1.5vw 12%'}}>
// 						<ReactMarkdown source={data.news.description} escapeHtml={false}></ReactMarkdown>
// 					</div>
// 				</form>
// 			</div>
// 			<Footer/>
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
