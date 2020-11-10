/* eslint-disable react/jsx-key */
import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './topSection.scss';
import {AiOutlineLine } from 'react-icons/ai';
import Carousel from 'react-bootstrap/Carousel';
import { graphql, useStaticQuery } from 'gatsby';
const TopSection = () => {
	const data = useStaticQuery(graphql`
    {
      prismicSlide {
        data {
          slide_images {
            slide_image {
              url
            }
          }
        }
      }
	}`);
	const slides = data.prismicSlide.data.slide_images.map((image) => {
		return <Carousel.Item className='slideWrapper'>
			<img className='d-block w-80' src={image.slide_image.url}></img>
		</Carousel.Item>;
	});
	return (
		<div className="homePageTopSection" >
			<Card className="mb-3" style={{borderRadius:'0px', paddingLeft: '6%',border:'none'}}>
				<Row className="no-gutters justify-content-enter" style={{paddingRight:'6%', paddingTop:'3vw'}}>
					<Col md={6} style={{paddingBottom:'2vw'}}>
						<Jumbotron style={{backgroundColor:'white',paddingBottom:'1vw',paddingTop:'2vw'}}>
							<p style={{fontSize:'calc(11px + 1vw)'}}><AiOutlineLine  size={27} style={{transform: 'scale(1.3, 1)'}}/><label style={{fontWeight:'500',marginBottom:'0px'}}>&nbsp;WELCOME</label></p>
							<label style={{backgroundColor:'#902413', 
								color:'white',
								textDecoration:'none',
								fontWeight:'500',
								borderRadius:'10px 0 10px 10px',
								padding: '0.4rem 0.8rem',
								fontSize:'calc(17px + 1vw)'
							}}>雍和在线</label>
							<h1 style={{paddingTop:'calc(10px + 1vw)',fontWeight:'800',fontSize:'calc(18px + 2vw)',transform: 'scale(1, 1.2)'}}>YONGHE</h1>
							<h1 style={{fontWeight:'800',fontSize:'calc(18px + 2vw)',transform: 'scale(1, 1.2)'}}>ONLINE</h1>
							<div style={{borderRadius:'100px 0 0 100px', background:'linear-gradient(to right, rgb(242,242,242) , white)',marginLeft:'-60px'}}>
								<p style={{fontFamily:'FandolKai', paddingLeft:'60px',fontSize:'calc(20px + 0.5vw)',marginTop:'calc(10px + 1vw)', marginBottom:'1px',paddingTop:'20px'}}>
                                懂 艺 术 甄 品
								</p>
								<p style={{fontFamily:'FandolKai',paddingLeft:'60px',paddingBottom:'10px',fontSize:'calc(20px + 0.5vw)'}}>
                                更 懂 得 品 甄 的 艺 术
								</p>
								<p style={{paddingLeft:'60px',fontSize:'calc(8px + 0.5vw)', marginBottom:'1px'}}>
                                雍和在线为您提供全新的多维艺术体验
								</p>
								<p style={{paddingLeft:'60px',paddingBottom:'20px',fontSize:'calc(8px + 0.5vw)'}}>
                                让艺术品走入您的生活
								</p>
							</div>
							{/* <MoreButton path="/"/> */}
								
						</Jumbotron>
					</Col>
					<Col md={6} style={{paddingBottom:'3vw', justifyContent:'center'}}>
						<Carousel indicators={false} style={{ backgroundColor: 'rgb(144, 36,19)'}} controls={true} fade>
							{slides}
						</Carousel>
					</Col>
				</Row>
			</Card>
		</div>
	);
};

export default TopSection;

