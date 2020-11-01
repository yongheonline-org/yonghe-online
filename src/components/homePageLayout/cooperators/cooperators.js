import React from 'react';
import './cooperators.scss';
import { graphql, useStaticQuery } from 'gatsby';
import HomePageTitle from '../HomePageTitle/homePageTitle';
const query = graphql`
{
    allPrismicCooperator(sort: {order: ASC, fields: data___ordernumber}) {
      edges {
        node {
          data {
            ordernumber
            cooperator {
              url(imgixParams: {q: 100, auto: ""})
            }
            name {
              text
            }
          }
          id
        }
      }
    }
  }
  
`;
const Cooperators = () => {
	const data = useStaticQuery(query);
	const {
		allPrismicCooperator: { edges: cooperators},
	} = data;
	return (
		<section className="cooperatorSection">
			<HomePageTitle sectionTitle="合作单位" sectionSubTitle="Cooperators" link="/cooperators" display="none"/>
			<div className="gridContainer">
				<div className="gridCenter">
					{cooperators.map((cooperator) => {
						return (<div className="gridItem" key={cooperator.node.id}>
							    <img style={{marginBottom:'0',width:'100%',height:'100%', objectFit: 'contain',}} src={cooperator.node.data.cooperator.url}></img>
							 </div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Cooperators;
