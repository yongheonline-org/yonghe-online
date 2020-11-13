/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import {Carousel,Container,Breadcrumb,Image,Col,Row,Button,Modal} from 'react-bootstrap'; 
import { Link } from 'gatsby';
import './productDetails.scss';

export const query = graphql`
  query GetSingleProduct($uid: String) {
	product: prismicProduct(uid: {eq: $uid}) {
		data {
		  categoryid
		  mainimage {
			url(imgixParams: {q: 100})
			}
		  productid {
			text
		  }
		  productname {
			text
		  }
		  productsize {
			text
		  }
		  productyearinfo {
			text
		  }
		  qualificationimages {
			qualificationimage {
				url(imgixParams: {auto: "enhance", q: 100})
			}
			qualificationimageid
		  }
		  productdescription {
			text
		  }
		  subimages {
			image {
			  url(imgixParams: {q: 100})
			}
			subimageid
		  }
		}
	}
  }
`;

const ProductDetails = ({data}) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return(
		<>
			<Navbar/>
			<div className="productDetailsSection">
				<Container style={{paddingBottom:'3rem'}}>
					<Row>
						<Breadcrumb>
							<Breadcrumb.Item linkAs={Link} linkProps={{ to: '/platform' }}>甄品商城首页</Breadcrumb.Item>
							<Breadcrumb.Item linkAs={Link} linkProps={{ to: `/platform/product-list-${data.product.data.categoryid}`}}>列表页</Breadcrumb.Item>
							<Breadcrumb.Item active>商品详情页</Breadcrumb.Item>
						</Breadcrumb>
					</Row>
					<Row style={{paddingBottom:'3.5rem'}}>
						<Col style={{paddingLeft:'0'}} md={7}>
				  <Image src={data.product.data.mainimage.url}  style={{width:'calc(140px + 20vw)',height:'calc(140px + 20vw)'}}/>
						</Col>
						<Col xs={10} sm={10} md={5} >
				  <div className="productDetailsStyle">
								<p style={{fontSize:'calc(18px + 0.4vw)'}}>{data.product.data.productname.text}</p>
								<p className="pStyle">
                					商品编号：{data.product.data.productid.text}
								</p>
								<p className="pStyle">
                					尺寸大小： {data.product.data.productsize.text}
								</p>
								<p className="pStyle">
                					年份：{data.product.data.productyearinfo.text}
								</p>
								<p className="pStyle">
									藏品描述：{data.product.data.productdescription.text}
								</p>
								<br/>
								<p className="pStyle" >
									<Button onClick={handleShow} style={{backgroundColor:'black',color:'white',borderColor:'black',boxShadow:'none'}}>查看征信报告</Button>
								</p>
								<Modal show={show} centered onHide={handleClose} animation={false}>
									<Carousel interval={null} indicators={false}  nextIcon={<span aria-hidden="true" className="nextArrowIconStyle"/>} prevIcon={<span aria-hidden="true" className="prevArrowIconStyle"/>} >								
										{data.product.data.qualificationimages.map(qualification=>{
											return <Carousel.Item className="slideW" key={qualification.qualificationimageid}>
												<img  src={qualification.qualificationimage.url} style={{width:'100%',height:'auto'}} onClick={handleClose} alt="no image"/></Carousel.Item>;
										})}
									</Carousel>
								</Modal>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<Footer/>
		</>
	);
};

export default ProductDetails;
