import React from 'react';
import HomePageTitle from '../HomePageTitle/homePageTitle';
import {Row,Col,Image,Jumbotron} from 'react-bootstrap';
import './aboutus.scss';
import MoreButton from '../MoreButton/MoreButton';
import CommonCol from './commonCard';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
{
	prismicAboutushomepage {
	  data {
		leftsideimage {
		  url
		}
		title {
		  text
		}
		description1 {
		  text
		}
		description2 {
			text
		}
		advantages {
		  id
		  description {
			text
		  }
		  image {
			url
		  }
		  title {
			text
		  }
		}
	  }
	}
  }  
`;
const AboutUS = () => {
	const data = useStaticQuery(query);
	const {
		prismicAboutushomepage: { data: aboutUs },
	} = data;
	return (
		<section className="homePageAboutUsSection" >
			<HomePageTitle sectionTitle="关于我们" sectionSubTitle="About US" link="/about-us" display="none"/>
			<Row className="no-gutters rowClass" >
				<Col md={6} style={{paddingBottom:'3vw', justifyContent:'center'}}>
					<Image src={aboutUs.leftsideimage.url} style={{maxWidth:'90%',objectFit: 'contain',paddingTop:'0',paddingBottom:'0', display:'block', margin:'auto'}}/>
				</Col>
				<Col md={6} style={{paddingBottom:'2vw', maxWidth: '100%!important'}}>
					<Row style={{paddingLeft:'12px'}}>
						{aboutUs.advantages.map((advantage)=>{
							return 	(<CommonCol key={advantage.id} picSrc={advantage.image.url} title={advantage.title.text} desc={advantage.description.text}/>);
						})
						}
					</Row>
					<Row style={{paddingLeft:'15px'}}>
						<Jumbotron style={{backgroundColor:'white',paddingBottom:'1vw',paddingTop:'2vw'}}>
							<h5 style={{fontSize:'calc(5px + 1vw)'}}>{aboutUs.title.text}</h5>
							<p style={{fontSize:'calc(5px + 0.6vw)'}}>
								{aboutUs.description1.text}
							</p>
							<br className="brDisplay1"/>
							<p style={{fontSize:'calc(5px + 0.6vw)'}}>
								{aboutUs.description2.text}
							</p>
							<br className="brDisplay2"/>
							<br className="brDisplay3"/>
							<MoreButton className="float-right" path="/about-us"/>	
						</Jumbotron>
					</Row>
				</Col>
			</Row>
		</section>
	);
};

export default AboutUS;
