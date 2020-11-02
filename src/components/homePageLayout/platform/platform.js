import React from 'react';
import HomePageTitle from '../HomePageTitle/homePageTitle';
import {Card,Row,Col,Jumbotron,Image,Carousel} from 'react-bootstrap';
import './platform.scss';
import { graphql, useStaticQuery } from 'gatsby';
import MoreButton from '../MoreButton/MoreButton';


const query = graphql`
{
	prismicPlatform {
	  data {
		backgroundimage {
		  url
		}
		images {
		  id
		  image {
			url
		  }
		  name {
			text
		  }
		}
		platformdescription {
		  text
		}
		platformname {
		  text
		}
		title {
		  text
		}
	  }
	}
  }
`;

const Platform = () => {
	const data = useStaticQuery(query);
	const {
		prismicPlatform: { data: platform },
	} = data;
	return (
		<section className="platformSection" >
			<HomePageTitle sectionTitle="旗下平台" sectionSubTitle="Platform" link="/platform" display="none"/>
			<Card className="mb-3" style={{borderRadius:'0px', paddingLeft: '10%', paddingRight:'6%',border:'none',backgroundImage: `url(${platform.backgroundimage.url})`}}>
				<Row className="no-gutters">
					<Col md={6} lg={6} sm={12} style={{paddingBottom:'3vw', paddingTop:'8vw', justifyContent:'center'}}>
						<Carousel>
							{platform.images.map((image)=>{
								return(<Carousel.Item key={image.id}>
									<Image src={image.image.url} style={{width:'100%', paddingTop:'0',paddingBottom:'0'}}/>
									<Carousel.Caption>
										<p style={{fontSize:'0.7rem'}}>{image.name.text}</p>
									</Carousel.Caption>
								</Carousel.Item>);
							})}
						</Carousel>
					</Col>
					<Col md={1} lg={1}></Col>
					<Col md={5} xs={12} lg={4} sm={12} style={{paddingTop:'8vw',paddingBottom:'3vw'}}>
						<Jumbotron style={{backgroundColor:'white',paddingBottom:'2vw',paddingTop:'3.5vw',margin:'auto'}}>
							<p style={{fontSize:'calc(9px + 0.3vw)',color:'rbg(114,114,114)',paddingBottom:'3px'}}>{platform.title.text}</p>
							<h3 style={{fontSize:'calc(15px + 0.6vw)', color:'rbg(114,114,114)',paddingBottom:'15px',fontWeight:'600'}}>{platform.platformname.text}</h3>
							<p style={{fontSize:'calc(9px + 0.3vw)', color:'rbg(114,114,114)'}}>
								{platform.platformdescription.text}
							</p>
							<br/>
							<br/>
							<MoreButton path="/"/>
						</Jumbotron>
					</Col>
				</Row>
			</Card>
		</section>
	);
};

export default Platform;
