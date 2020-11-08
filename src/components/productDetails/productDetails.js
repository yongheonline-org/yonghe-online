/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// import { graphql } from 'gatsby';
import Navbar from '../../Navbar/navbar';
import Footer from '../../Footer/footer';
import {Image,Col,Row,Button,Modal} from 'react-bootstrap'; //Carousel
import large1 from './p.png';
import pdfpic from './pdfpic1.png';
import './productDetails.scss';


const ProductDetails = () => { //{data}
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return(
		<>
			<Navbar/>
			<div className="productDetailsSection">
				<Row>
					<Col>
				  <Image src={large1}  style={{width:'calc(120px + 20vw)',height:'calc(120px + 20vw)'}}/>
					</Col>
					<Col xs={10} sm={10} md={6} style={{paddingLeft:'1rem'}}>
				  <div style={{height:'calc(120px + 20vw)',paddingLeft:'2rem', paddingTop:'2.5rem'}}>
							<h3>清朝雍正名窑花瓷</h3>
							<br/>
							<p className="pStyle">
                商品编号：A256894
							</p>
							<p className="pStyle" style={{lineHight:'2'}}>
                尺寸大小： 25 * 63 * 26 cm
							</p>
							<p className="pStyle">
                年份：清朝雍正年间
							</p>
							<p className="pStyle">
                收藏馆：雍和在线艺术商城
							</p>
							<br/>
							<br/>
							<p className="pStyle" >
								<Button onClick={handleShow} style={{backgroundColor:'black',color:'white',borderColor:'black',boxShadow:'none'}}>查看诚信报告</Button>
							</p>
							<Modal show={show} onHide={handleClose} animation={false}>
								 {/* <Carousel autoPlay={false} indicators={false}>
									<Carousel.Item> */}
								<img src={pdfpic} style={{maxWidth:'100%',height:'auto'}} onClick={handleClose} alt="no image"/>
								<br style={{backgroundColor:'black'}} />
								<img src={pdfpic} style={{maxWidth:'100%',height:'auto'}} onClick={handleClose} alt="no image"/>

								{/* </Carousel.Item>
								</Carousel> */}
							</Modal>
						</div>
					</Col>
				</Row>
			</div>
			<Footer/>
		</>
	);
};


// export const query = graphql`
//   query GetSingleNews($uid: String) {
//     news: prismicNewscollection(uid: { eq: $uid }) {
//         data {
//             date
//             author {
//               text
//             }
//             description {
//               text
//             }
//             image {
//               url
//             }
//             shortdescription {
//               text
//             }
//             source {
//               text
//             }
//             title {
//               text
//             }
//         }
//     }
//   }
// `;

export default ProductDetails;
