import React from 'react';
import HomePageTitle from '../HomePageTitle/homePageTitle';
import {Card,Row,Col,Image,Jumbotron} from 'react-bootstrap';
import LeftImage from './aboutusLeft.png';
import './aboutus.scss';
import MoreButton from '../MoreButton/MoreButton';
import left from './left.png';
import middle from './middle.png';
import right from './right.png';
import CommonCol from './commonCard';

const AboutUS = () => {
	return (
		<section className="homePageAboutUsSection" >
			<HomePageTitle sectionTitle="About US" sectionSubTitle="关于我们" link="/about-us"/>
			<Card className="mb-3" style={{borderRadius:'0px', paddingLeft: '6%',border:'none'}}>
				<Row className="no-gutters justify-content-enter" style={{paddingRight:'6%', paddingTop:'3vw'}}>
					<Col md={6} style={{paddingBottom:'3vw', justifyContent:'center'}}>
						<Image src={LeftImage} style={{width:'90%', paddingTop:'0',paddingBottom:'0'}}/>
					</Col>
					<Col md={6} style={{paddingBottom:'2vw'}}>
						<Row>
							<CommonCol picSrc={left} title="专业团队" desc="行业内精英打造的专业团队为您提供专项服务"/>
							<CommonCol picSrc={middle} title="精准服务" desc="行业内精英打造的专业团队为您提供专项服务"/>
							<CommonCol picSrc={right} title="行业翘楚" desc="行业内精英打造的专业团队为您提供专项服务"/>
						</Row>
						<Row>
							<Jumbotron style={{backgroundColor:'white',paddingBottom:'1vw',paddingTop:'2vw'}}>
								<h5>雍和在线</h5>
								<p style={{fontSize:'12px'}}>
                                This is a simple hero unit, a simple jumbotron-style component for calling
                                extra attention to featured content or information.his is a simple hero unit, a simple jumbotron-style component for calling
                                extra attention to featured content or information.
								This is a simple hero unit, a simple jumbotron-style component for calling
                                extra attention to featured content or information.his is a simple hero unit, a simple jumbotron-style component for calling
                                extra attention to featured content or information.
								</p>
								<br/>
								
								<MoreButton className="float-right" path="/about-us"/>	
							</Jumbotron>
						</Row>
					</Col>
				</Row>
			</Card>
		</section>
	);
};

export default AboutUS;
