import React from 'react';
import './productList.scss';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import {CardGroup,Card,Row,Col,Container,Breadcrumb} from 'react-bootstrap';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import Img from 'gatsby-image';

export const query = graphql`
  query GetSingleCategory($categoryId: Float) {
	products: allPrismicProduct(filter: {data: {categoryid: {eq: $categoryId}}}){
		edges {
			node {
			  uid
			  data {
				categoryid
				mainimage {
					localFile {
						childImageSharp {
						  fluid {
							...GatsbyImageSharpFluid
						  }
						}
					}
					fluid(imgixParams: {q: 50}){
						...GatsbyPrismicImageFluid
					}
				}
				productname {
				  text
				}
			  }
			}
		  }
	}
  }
`;
const ProductList = ({data}) => {
	const pageValue = data.products.edges[0]?.node.data.categoryid;
	return(<>
		<Navbar/>
		<div className="productListSection" style={{backgroundColor:'rgb(248,248,248)'}}>
			<Container>
				<Row>
					<Breadcrumb>
						<Breadcrumb.Item linkAs={Link} linkProps={{ to: '/platform' }}>甄品商城首页</Breadcrumb.Item>
						<Breadcrumb.Item active>列表页</Breadcrumb.Item>
					</Breadcrumb>
				</Row>
				<Row style={{columnGap: '1rem',rowGap:'1rem'}}>
					<Col xs={12} sm={12} md={2} lg={2} xl={2} className="btnContainer" >
						<Link to='/platform/product-list-0' className={`categoryBtn ${0 === pageValue? 'active-btn':''}`}>
						国瓷
						</Link>
						<Link to='/platform/product-list-1' className={`categoryBtn ${1 === pageValue? 'active-btn':''}`}>
						丹青
						</Link>
						<Link to='/platform/product-list-2' className={`categoryBtn ${2 === pageValue? 'active-btn':''}`}>
						琼琳
						</Link>
						<Link to='/platform/product-list-3' className={`categoryBtn ${3 === pageValue? 'active-btn':''}`}>
						钟鼎
						</Link>
						<Link to='/platform/product-list-4' className={`categoryBtn ${4 === pageValue? 'active-btn':''}`}>
						霓裳
						</Link>
						<Link to='/platform/product-list-5' className={`categoryBtn ${5 === pageValue? 'active-btn':''}`}>
						钱坤
						</Link>
						<Link to='/platform/product-list-6' className={`categoryBtn ${6 === pageValue? 'active-btn':''}`}>
						摩尼
						</Link>
						<Link to='/platform/product-list-7' className={`categoryBtn ${7 === pageValue? 'active-btn':''}`}>
						杂家
						</Link>
						<Link to='/platform/product-list-8' className={`categoryBtn ${8 === pageValue? 'active-btn':''}`}>
						预售藏品
						</Link>
					</Col>
					<Col xs={12} sm={12} md={9} lg={9} className="pictureListColumn">
						<CardGroup>
							{
								data.products.edges.map(product =>{
									return<Card key={product.node.uid}  style={{flex:'0 0 33.3%',borderWidth:'0 12px 10px 0', borderColor:'rgb(248,248,248)'}}>
										<Link to={`/platform/product-list-${product.node.data.categoryid}/${product.node.uid}`} style={{textDecoration: 'none'}}>
											<Img variant="top" fluid={product.node.data.mainimage.localFile.childImageSharp.fluid} />
											<Card.Body>
												<Card.Text className="productTitle">
													{product.node.data.productname.text}
												</Card.Text>
											</Card.Body>
										</Link>
									</Card>;
								})}
						</CardGroup>
					</Col>
				</Row>
			</Container>
		</div>
		<Footer/>
	</>
	);
};
		

export default ProductList;
