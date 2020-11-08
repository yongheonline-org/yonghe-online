import React from 'react';
import './productList.scss';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';
import {CardGroup,Card,Row,Col,Container,Breadcrumb} from 'react-bootstrap';
const query = graphql`
{
	allPrismicProduct{
	  edges {
		node {
		  uid
		  data {
			categoryid
			mainimage {
			  url
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

const ProductList = () => {
	const data = useStaticQuery(query);
	const {
		allPrismicProduct: { edges: allProducts },
	} = data;
	const pageValue = (typeof window !== 'undefined' && window.history.state && window.history.state.pageValue) ? window.history.state.pageValue:0;
	const [value, setValue] = React.useState(pageValue);
	const products = allProducts.filter(product => product.node.data.categoryid === value);	
	
	return(
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
						<button onClick={() => setValue(0)} className={`categoryBtn ${0 === value? 'active-btn':''}`}>
						瓷器
						</button>
						<button onClick={() => setValue(1)} className={`categoryBtn ${1 === value? 'active-btn':''}`}>
						字画
						</button>
						<button onClick={() => setValue(2)} className={`categoryBtn ${2 === value? 'active-btn':''}`}>
						玉石
						</button>
					</Col>
					{/* job info */}
					<Col xs={12} sm={12} md={9} lg={9} className="pictureListColumn">
						<CardGroup>
							{products.map(product =>{
								return<Card key={product.node.uid}  style={{flex:'0 0 33.3%',borderWidth:'0 12px 10px 0', borderColor:'rgb(248,248,248)'}}>
									<Link to={`/platform/product-list/${product.node.uid}`} style={{textDecoration: 'none'}}>
										<Card.Img variant="top" src={product.node.data.mainimage.url} />
										<Card.Body>
											<Card.Text className="productTitle">
												{product.node.data.productname[0].text}
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
	);
};
		

export default ProductList;
