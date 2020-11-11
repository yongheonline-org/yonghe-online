import React from 'react';
import './cooperators.scss';
import { graphql, useStaticQuery } from 'gatsby';
import HomePageTitle from '../HomePageTitle/homePageTitle';
import {Col,CardGroup,Image} from 'react-bootstrap';

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
		<div className="cooperatorSection">
			<HomePageTitle sectionTitle="合作单位" sectionSubTitle="Cooperators" link="/cooperators" display="none"/>
			<CardGroup className="cooperatorSectionCenter">
				{cooperators.map((cooperator) => {
					return <Col xs={9} sm={6} md={6} lg={4} xl={4} key={cooperator.node.id} style={{marginLeft:'auto', marginRight:'auto'}}>
						<Image style={{marginBottom:'0',width:'100%',height:'auto', objectFit: 'contain',}} src={cooperator.node.data.cooperator.url}></Image>
					</Col>;
				})}
			</CardGroup>
		</div>
	);
};

export default Cooperators;
