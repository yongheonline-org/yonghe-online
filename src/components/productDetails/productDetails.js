/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import { Carousel, Container, Breadcrumb, Image, Col, Row, Button, Modal } from 'react-bootstrap';
import { Link } from 'gatsby';
import './productDetails.scss';

export const query = graphql`
  query GetSingleProduct($uid: String) {
	product: prismicProduct(uid: {eq: $uid}) {
		data {
		  categoryid
		  mainimage {
			url(imgixParams: {q: 1, auto: "compress"})
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
				url(imgixParams: {auto: "enhance", q: 50})
			}
			qualificationimageid
		  }
		  productdescription {
			text
		  }
		  subimages {
			image {
			  url(imgixParams: {q: 1, auto: "compress"})
			}
			subimageid
		  }
		}
	}
  }
`;

const ProductImages = (props) => {
	const { mainimage: mainImage } = props;
	const subImages = props.subimages.map((item) => { return item.image; });

	const allImages = [mainImage, ...subImages];
	const [mainImageURL, setMainImageURL] = useState(mainImage.url);
	const rightSideImages = allImages.filter((image) => { return image.url !== mainImageURL.url; });
	const RightSideImages = () => {
		const result = [];
		const classes = ['first', 'second', 'third', 'fourth'];
		for (let index = 0; index < 4; index++) {
			let thumbnail = null;
			if (rightSideImages.length > index) {
				const url = rightSideImages[index].url;
				thumbnail = <div
					className={`thumbnail ${classes[index]}-thumbnails`}
					onClick={() => { setMainImageURL(url); }}
				>
					<Image
						className='thumbnail-image'
						src={url}
					/>;
				</div>;
			}
			result.push(thumbnail);
		}
		return result;
	};

	useEffect(() => {
		const focusImageContainer = document.getElementsByClassName('product-details-container')[0];
		const focusMainImageContainer = document.getElementsByClassName('product-detail-mainImage')[0];
		focusImageContainer.style.height = focusMainImageContainer.getClientRects()[0].width + 'px';
	});

	return <Container className='product-detail-images'>
		<Row className='product-details-container'>
			<Col className='product-detail-mainImage' sm={9} xs={9} >
				<Image src={mainImageURL} />
			</Col>
			<Col className='product-detail-thumbnails' sm={3} xs={3}>
				<div className='layout-wrapper'>
					{RightSideImages()}
				</div>
			</Col>
		</Row>
	</Container>;
};
const ProductDetails = ({ data }) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const productImages = ProductImages(data.product.data);
	return (
		<>
			<Navbar />
			<div className="productDetailsSection">
				<Container style={{ paddingBottom: '3rem' }}>
					<Row>
						<Breadcrumb>
							<Breadcrumb.Item linkAs={Link} linkProps={{ to: '/platform' }}>甄品商城首页</Breadcrumb.Item>
							<Breadcrumb.Item linkAs={Link} linkProps={{ to: `/platform/product-list-${data.product.data.categoryid}` }}>列表页</Breadcrumb.Item>
							<Breadcrumb.Item active>商品详情页</Breadcrumb.Item>
						</Breadcrumb>
					</Row>
					<Row style={{ paddingBottom: '3.5rem' }}>
						<Col style={{ paddingLeft: '0' }} md={7}>
							{productImages}
						</Col>
						<Col xs={11} sm={11} md={5} >
							<div className="productDetailsStyle">
								<p style={{ fontSize: 'calc(18px + 0.4vw)' }}>{data.product.data.productname.text}</p>
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
								<br />
								<p className="pStyle" >
									<Button onClick={handleShow} style={{ backgroundColor: 'black', color: 'white', borderColor: 'black', boxShadow: 'none' }}>查看征信报告</Button>
								</p>
								<Modal show={show} centered onHide={handleClose} animation={false}>
									<Carousel interval={null} indicators={false} nextIcon={<span aria-hidden="true" className="nextArrowIconStyle" />} prevIcon={<span aria-hidden="true" className="prevArrowIconStyle" />} >
										{data.product.data.qualificationimages.map(qualification => {
											return <Carousel.Item className="slideW" key={qualification.qualificationimageid}>
												<Image src={qualification.qualificationimage.url} style={{width:'100%',height:'auto'}} onClick={handleClose} alt="no image"/></Carousel.Item>;
										})}
									</Carousel>
								</Modal>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<Footer />
		</>
	);
};

export default ProductDetails;
