import {Card,Row,Col,Jumbotron,Image} from 'react-bootstrap';
import React from 'react';
import MoreButton from '../MoreButton/MoreButton';
import './platform.scss';

const Platform = ({backgroundImg, platformImage, platformName, platformDescription, path}) => {
	return<Card className="mb-3" style={{borderRadius:'0px', paddingLeft: '12%', paddingRight:'6%',border:'none',backgroundImage: `url(${backgroundImg})`}}>
		<Row className="no-gutters">
			<Col md={6} style={{paddingBottom:'3vw', paddingTop:'8vw', justifyContent:'center'}}>
				<Image src={platformImage} style={{width:'100%', paddingTop:'0',paddingBottom:'0'}}/>
			</Col>
			<Col md={1} ></Col>
			<Col md={4} style={{paddingTop:'8vw',paddingBottom:'3vw'}}>
				<Jumbotron style={{backgroundColor:'white',paddingBottom:'2.8vw',paddingTop:'3.5vw'}}>
					<p style={{color:'black'}}>旗下平台</p>
					<h3 style={{fontSize:'calc(10px + 0.6vw)', color:'black'}}>{platformName}</h3>
					<p style={{fontSize:'calc(10px + 0.2vw)', color:'black'}}>
						{platformDescription}
					</p>
					<br/>
					<MoreButton path={path}/>
				</Jumbotron>
			</Col>
		</Row>
	</Card>;
};
export default Platform;