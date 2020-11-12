/* eslint-disable react/jsx-key */
import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './topSection.scss';
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
							<p style={{fontSize:'calc(11px + 1vw)'}}><label style={{fontWeight:'500',marginBottom:'0px'}}>&nbsp;WELCOME TO</label></p>
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
							<div>
								<p style={{fontSize:'calc(13px + 0.7vw)',marginTop:'calc(10px + 1vw)', marginBottom:'1px',paddingTop:'calc(13px + 0.7vw)'}}>
                                懂艺术甄品 更懂得品甄的艺术
								</p>

								<p style={{fontSize:'calc(13px + 0.7vw)',  marginBottom:'1px'}}>
                                雍和在线为您提供全新的多维艺术体验
								</p>
								<p style={{fontSize:'calc(13px + 0.7vw)', marginBottom:'1px'}}>
                                让艺术品走入您的生活
								</p>
								<div style={{background:'linear-gradient(to right, rgb(143,37,25) , white)', borderRadius:'5px 0 0 5px',marginTop:'calc(18px + 0.8vw)', height:'3px'}}></div>
							</div>
							{/* <MoreButton path="/"/> */}
								
						</Jumbotron>
					</Col>
					<Col md={6} style={{paddingBottom:'3vw', justifyContent:'center', marginTop:'auto',marginBottom:'auto'}}>
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

