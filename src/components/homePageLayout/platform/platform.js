import React from 'react';
import HomePageTitle from '../HomePageTitle/homePageTitle';
import {Card,Row,Col,Image,Jumbotron} from 'react-bootstrap';
import BackgroundImage from './background.png';
import PlatformImage from './platform.png';
import './platform.scss';
import MoreButton from '../MoreButton/MoreButton';

const Platform = () => {
	return (
		<section className="platformSection" >
			<HomePageTitle sectionTitle="Platform" sectionSubTitle="旗下平台" link="/platform"/>
			<Card className="mb-3" style={{borderRadius:'0px', paddingLeft: '12%', paddingRight:'6%',border:'none',backgroundImage: `url(${BackgroundImage})`}}>
				<Row className="no-gutters">
					<Col md={6} style={{paddingBottom:'3vw', paddingTop:'8vw', justifyContent:'center'}}>
						<Image src={PlatformImage} style={{width:'100%', paddingTop:'0',paddingBottom:'0'}}/>
					</Col>
					<Col md={1} ></Col>
					<Col md={4} style={{paddingTop:'8vw',paddingBottom:'3vw'}}>
						<Jumbotron style={{backgroundColor:'white',paddingBottom:'2.8vw',paddingTop:'3.5vw'}}>
							<p>旗下平台</p>
							<h3>雍和甄品</h3>
							<p>
                                This is a simple hero unit, a simple jumbotron-style component for calling
                                extra attention to featured content or information.
							</p>
							<br/>
							<br/>
							<MoreButton  path="/"/>
						</Jumbotron>
					</Col>
				</Row>
			</Card>
		</section>
	);
};

export default Platform;
