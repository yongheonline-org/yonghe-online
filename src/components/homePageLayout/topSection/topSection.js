import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './topSection.scss';
import MoreButton from '../MoreButton/MoreButton';
import art1 from './art1.png';
import {AiOutlineLine } from 'react-icons/ai';
import Carousel from 'react-bootstrap/Carousel';
const TopSection = () => {
	return (
		<section className="homePageTopSection" >
			<Card className="mb-3" style={{borderRadius:'0px', paddingLeft: '6%',border:'none'}}>
				<Row className="no-gutters justify-content-enter" style={{paddingRight:'6%', paddingTop:'3vw'}}>
					<Col md={6} style={{paddingBottom:'2vw'}}>
						<Jumbotron style={{backgroundColor:'white',paddingBottom:'1vw',paddingTop:'2vw'}}>
							<p style={{fontSize:'20px'}}><AiOutlineLine  size={27} style={{transform: 'scale(1.3, 1)'}}/><label style={{fontWeight:'500'}}>&nbsp;WE ARE</label></p>
							<label style={{backgroundColor:'#902413', 
								color:'white',
								textDecoration:'none',
								fontWeight:'500',
								borderRadius:'10px 0 10px 10px',
								padding: '0.4rem 0.8rem',
								fontSize:'24px'
							}}>雍和在线</label>
							<h1 style={{fontWeight:'600'}}>YONGHE</h1>
							<h1 style={{fontWeight:'600'}}>ONLINE</h1>
							<p style={{fontSize:'15px'}}>
                                This is a simple hero unit, a simple jumbotron-style component for calling
                                extra attention to featured content or information.his is a simple hero unit, a simple jumbotron-style component for calling
                                extra attention to featured content or information.
							</p>
							<br/>
							<MoreButton path="/"/>
								
						</Jumbotron>
					</Col>
					<Col md={6} style={{paddingBottom:'3vw', justifyContent:'center'}}>
						<Carousel style={{transform: 'rotate(270deg)'}} controls={false}>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src={art1}
									alt="First slide"
									style={{transform: 'rotate(90deg)'}}
								/>
								<Carousel.Caption>
									<h3>First slide label</h3>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src={art1}
									alt="First slide"
									style={{transform: 'rotate(90deg)' }}
								/>
								<Carousel.Caption>
									<h3>First slide label</h3>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src={art1}
									alt="Third slide"
									style={{transform: 'rotate(90deg)'}}
								/>
								<Carousel.Caption>
									<h3>Second slide label</h3>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>

						{/* <Image src={art} style={{width:'90%', paddingTop:'0',paddingBottom:'0'}}/> */}
					</Col>
				</Row>
			</Card>
		</section>
	);
};

export default TopSection;

