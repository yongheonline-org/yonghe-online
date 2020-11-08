import React from 'react';
import './productList.scss';
// import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby';
import Huaping1 from './1h.png';
import Huaping2 from './2h.png';

import {CardGroup,Card,Row,Col,Container,Breadcrumb} from 'react-bootstrap';
const ProductList = () => {
	const [value, setValue] = React.useState( window.history.state? window.history.state.pageValue:0);
	const products = {
		'0': {
			'section':'AAA',
		},
		'1':{
			'section':'BBB',
		},
		'2':{
			'section':'CCC',
		},
	};
	console.log(window.history.state);
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
							<Card style={{flex:'0 0 33.3%',borderWidth:'0 12px 10px 0', borderColor:'rgb(248,248,248)'}}>
								<Card.Img variant="top" src={Huaping1} />
								<Card.Body>
									<Card.Text style={{textAlign:'center'}}>
                                清朝名窑花瓶
									</Card.Text>
								</Card.Body>
							</Card>
							<Card style={{flex:'0 0 33.3%',borderWidth:'0 12px 10px 0', borderColor:'rgb(248,248,248)'}}>
								<Card.Img variant="top" src={Huaping2} />
								<Card.Body>
									<Card.Text style={{textAlign:'center'}}>
                                清朝名窑花瓶
									</Card.Text>
								</Card.Body>
							</Card>
							
							<Card style={{flex:'0 0 33.3%',borderWidth:'0 12px 10px 0', borderColor:'rgb(248,248,248)'}}>
								<Card.Img variant="top" src={Huaping2} />
								<Card.Body>
									<Card.Text style={{textAlign:'center'}}>
                                清朝名窑花瓶
                                清朝名窑花瓶
									</Card.Text>
								</Card.Body>
							</Card>
							
							<Card style={{flex:'0 0 33.3%',borderWidth:'0 12px 10px 0', borderColor:'rgb(248,248,248)'}}>
								<Card.Img variant="top" src={Huaping2} />
								<Card.Body>
									<Card.Text style={{textAlign:'center'}}>
                                清朝名窑花瓶
									</Card.Text>
								</Card.Body>
							</Card>
							

							<Card style={{flex:'0 0 33.3%',borderWidth:'0 12px 10px 0', borderColor:'rgb(248,248,248)'}}>
								<Card.Img variant="top" src={Huaping2} />
								<Card.Body>
									<Card.Text style={{textAlign:'center'}}>
                                清朝名窑花瓶
									</Card.Text>
								</Card.Body>
							</Card>
						</CardGroup>
						<h3>{products[value].section}</h3>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
		

export default ProductList;