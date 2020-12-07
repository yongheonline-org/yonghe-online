import React from 'react';
import HomePageTitle from '../HomePageTitle/homePageTitle';
import {Row,Col,Image} from 'react-bootstrap';
import './aboutus.scss';
import MoreButton from '../MoreButton/MoreButton';
import CommonCol from './commonCard';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
{
	prismicAboutushomepage {
	  data {
		leftsideimage {
			localFile {
				childImageSharp {
				  fluid {
					...GatsbyImageSharpFluid
				  }
				}
			}
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
			localFile {
				childImageSharp {
				  fluid {
					...GatsbyImageSharpFluid
				  }
				}
			}
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
		<div className="homePageAboutUsSection" >
			<HomePageTitle sectionTitle="关于我们" sectionSubTitle="About US" link="/about-us" display="none"/>
			<Row className="no-gutters rowClass" >
				<Col md={6} style={{paddingBottom:'1vw', justifyContent:'center', marginTop:'auto',marginBottom:'auto'}}>
					<Image src={aboutUs.leftsideimage.localFile.childImageSharp.fluid.src} style={{maxWidth:'90%',objectFit: 'contain',paddingTop:'0',paddingBottom:'0', display:'block', margin:'auto'}}/>
				</Col>
				<Col md={6} style={{paddingBottom:'1vw', maxWidth: '100%!important'}}>
					<Row style={{paddingLeft:'12px'}}>
						{aboutUs.advantages.map((advantage)=>{
							return 	(<CommonCol key={advantage.id} picSrc={advantage.image.localFile.childImageSharp.fluid.src} title={advantage.title.text} desc={advantage.description.text}/>);
						})
						}
					</Row>
					<Row style={{paddingLeft:'7%',backgroundColor:'white',paddingBottom:'1vw',paddingTop:'1.5vw'}}>	
						<h5 style={{fontSize:'calc(9px + 0.8vw)'}}>{aboutUs.title.text}</h5>
						<p style={{fontSize:'calc(10px + 0.2vw)', color:'rgb(90,90,90)'}}>
							{aboutUs.description1.text}
						</p>
						<br className="brDisplay1"/>
						<p style={{fontSize:'calc(10px + 0.2vw)', color:'rgb(90,90,90)'}}>
							{aboutUs.description2.text}
						</p>
						<br className="brDisplay2" style={{paddingBottom:'2px'}}/>
						<MoreButton className="stickToRight" path="/about-us"/>	
						
					</Row>
				</Col>
			</Row>
		</div>
	);
};

export default AboutUS;
