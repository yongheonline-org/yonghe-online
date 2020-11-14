/* eslint-disable react/prop-types */
import React from 'react';
import { graphql } from 'gatsby';
import NewsHeader from '../newsList/newsHeader/newsHeader';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import ReactMarkdown from 'react-markdown';

const NewsDetails = ({data}) => {
	return(
		<>
			<Navbar/>
			<NewsHeader/>
			<div className="container" style={{paddingTop:'2vw',textAlign:'center'}}>
				<h4>{data.news.data.title.text}</h4>
				<form>
					<div className="form-group row" style={{paddingTop:'13px',justifyContent:'center', color:'rgb(151,151,151)', fontSize:'13px'}}>
						<label className="col-form-label" style={{marginRight:'10px'}}>来源：{data.news.data.source.text} </label>
						{/* <label className="col-form-label" style={{marginRight:'10px'}}>作者：{data.news.data.author.text} </label> */}
						<label className="col-form-label" style={{marginRight:'10px'}}>日期：{data.news.data.date} </label>
					</div>
					<div className="text-center" style={{padding:'1vw 8%'}}>
						<img src={data.news.data.image.url} style={{width:'100%', height:'auto'}}/>
					</div>
					<div className="form-group text-left" style={{padding:'2vw 8%'}}>
						<ReactMarkdown source={data.news.data.description.text} escapeHtml={false}></ReactMarkdown>
					</div>
				</form>
			</div>
			<Footer/>
		</>
	);
};

export const query = graphql`
  query GetSingleNews($uid: String) {
    news: prismicNewscollection(uid: { eq: $uid }) {
        data {
            date
            author {
              text
            }
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
    }
  }
`;

export default NewsDetails;
