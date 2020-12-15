import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './newsList.scss';
import arrow from '../../homePageLayout/newsCenter/arrow.png';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';

const query = graphql`
{
    allPrismicNewscollection(sort: {fields: data___date, order: DESC}) {
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

const NewsList = () => {
	const data = useStaticQuery(query);
	const {
		allPrismicNewscollection: { edges: allNews },
	} = data;
	return(
		<div className="row" style={{paddingTop:'3rem', paddingLeft:'8%', paddingRight:'10%', paddingBottom:'2rem'}}>
			{allNews.map((news) => {
				return (
					<div className="col-md-6" key={news.node.id}>
						<Link to={`/news/${news.node.uid}`} style={{color:'black'}} >
							<div className="card" style={{border:'none'}}>
								<div className="card-body">
									<div className="newsListTitleRow">					
										<div className="newsListDateTime">
											<h1 style={{fontWeight:'400'}}>{news.node.data.date.substring(8,10)}</h1>
											<p style={{fontSize:'11px',fontWeight:'400'}}>{news.node.data.date.substring(0,7)}</p>
										</div>
										<div className="newsListTitle">
											<p style={{fontSize:'15px', paddingBottom:'5px', fontWeight:'560'}}>{news.node.data.title.text}</p>
											<p className="newsListShortDescription">{news.node.data.shortdescription.text}</p>
											<div className="newsListArrow" >
												<button className="newsListMoreButton">了解详情</button>
												<img className="newsListHalfArrowImg" src={arrow} style={{width:'32px',height:'22px'}}/></div>
										</div>
									</div>
								</div>
								<div className="newsListUnderline"/>
							</div>
						</Link>
					</div>
				);})}
		</div>
	);
};
		

export default NewsList;