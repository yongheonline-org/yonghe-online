import React from 'react';
import {Row,Col,Image} from 'react-bootstrap';
import arrow from './tab1/go-to-right.png';
import arrowWhite from './tab1/go-to-right-white.png';
import Underline from './tab1/underline.png';
import UnderlineGrey from './tab1/underline-grey.png';
import { Link } from 'gatsby';
import './tab.scss';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';


const query = graphql`
{
    prismicPlatformhomepage {
		data {
		  banner {
			localFile {
				childImageSharp {
				  fluid {
					...GatsbyImageSharpFluid
				  }
				}
			  }
		  }
		  calligraphysample {
			localFile {
				childImageSharp {
				  fluid {
					...GatsbyImageSharpFluid
				  }
				}
			  }
		  }
		  calligraphytitle {
			text
		  }
		  jadetitle {
			text
		  }
		  porcelaindescription {
			text
		  }
		  tabcalligraphy {
			localFile {
				childImageSharp {
				  fluid {
					...GatsbyImageSharpFluid
				  }
				}
			  }
		  }
		  tabjadebg {
			fluid {
				...GatsbyPrismicImageFluid
			}
			localFile {
				childImageSharp {
				  fluid {
					...GatsbyImageSharpFluid
				  }
				}
			  }
		  }
		  tabporcelainbg {
			localFile {
				childImageSharp {
				  fluid {
					...GatsbyImageSharpFluid
				  }
				}
			  }
		  }
		  tea0 {
			localFile {
				childImageSharp {
				  fluid {
					...GatsbyImageSharpFluid
				  }
				}
			  }
		  }
		  tea1 {
			localFile {
				childImageSharp {
				  fluid {
					...GatsbyImageSharpFluid
				  }
				}
			  }
		  }
		  tea2 {
			localFile {
				childImageSharp {
				  fluid {
					...GatsbyImageSharpFluid
				  }
				}
			  }
		  }
		}
	  }
	}
`;



export default function Tabs() {
	const data = useStaticQuery(query);
	const {
		prismicPlatformhomepage: { data: pageData },
	} = data;
	return <>
		<Row className="btnContainerStyle" >
			<Link to='/platform/product-list-0' className="linkToProductListButton">
						瓷器
			</Link>
			<Link to='/platform/product-list-1' className="linkToProductListButton">
						字画
			</Link>
			<Link to='/platform/product-list-2' className="linkToProductListButton">
						玉石
			</Link>
		</Row>
		<BackgroundImage className="tabImage" fluid={pageData.tabporcelainbg.localFile.childImageSharp.fluid}>
			<Row >
				<Col xs={10} sm={5} md={5} lg={5} xl={5}>
					<Row style={{paddingTop:'18%'}}>
						<Col xs={2} sm={3} md={1} lg={3} xl={3}>
						</Col>
						<Col >
							<h3 style={{fontSize:'calc(16px + 0.8vw)',fontWeight:'450'}}>瓷器</h3>
							<p style={{fontSize:'12px'}}>{pageData.porcelaindescription.text}</p>

							<div className="tabArrow" >
								<Link to="/platform/product-list-0" className="tabMoreButton">查看更多
									<img className="tabHalfArrowImg" src={arrow} />
								</Link>
							</div>
						</Col>
					</Row>
					<Row style={{paddingTop:'10%'}}>
						<Col xs={3} sm={3} md={3} lg={3} xl={3}>
							<br/>
						</Col>
						<Col>
							<img className="underlineImage" src={UnderlineGrey}/>
							<p style={{fontSize: 'calc(12px + 0.2vw)'}}>清朝雍正年间</p>
							<p style={{fontSize: 'calc(12px + 0.2vw)'}}>斗彩水丞</p>
						</Col>
					</Row>
				</Col>
				<Col  xs={10} sm={7} md={7} lg={7} xl={7}>
					<Row className="topTeasStyle">
						<Col xs={3} sm={3} md={3} lg={3} xl={3} style={{marginRight:'16%'}}>
							<Img className="tea2" fluid={pageData.tea2.localFile.childImageSharp.fluid} />
						</Col>
						<Col xs={3} sm={3} md={3} lg={3} xl={3} style={{paddingRight:'3%'}}>
							<Img className="tea1" fluid={pageData.tea1.localFile.childImageSharp.fluid} />
						</Col>
					</Row>
					<Row className="lowTeaStyle">
						<Img className="tea0" fluid={pageData.tea0.localFile.childImageSharp.fluid} />
					</Row>
				</Col>
			</Row>
		</BackgroundImage>
		<BackgroundImage className="tabImage" fluid={pageData.tabcalligraphy.localFile.childImageSharp.fluid}>
			<Row>
				<Col xs={10} sm={5} md={5} lg={5} xl={5}>
					<Row style={{paddingTop:'15%'}}>
						<Col xs={2} sm={3} md={3} lg={3} xl={3}>
						</Col>
						<Col>
							<h3 style={{fontSize:'calc(16px + 0.8vw)',fontWeight:'450'}}>字画</h3>
							<p style={{fontSize:'12px'}}>{pageData.porcelaindescription.text}</p>
							<div className="tabArrow" >
								<Link to="/platform/product-list-1" className="tabMoreButton">查看更多
									<img className="tabHalfArrowImg" src={arrow} />
								</Link>
							</div>
						</Col>
					</Row>
				</Col>
				<Col xs={10} sm={6} md={6} lg={6} xl={6} style={{justifyContent:'center', left:'8%'}}>
					<Img fluid={pageData.calligraphysample.localFile.childImageSharp.fluid} className="calliRightImageStyle" />
				</Col>
			</Row>
		</BackgroundImage>
		<BackgroundImage className="tabImage" fluid={pageData.tabjadebg.localFile.childImageSharp.fluid} style={{backgroundPosition:'inherit !important'}} >
			<Row>
				<Col xs={10} sm={5} md={5} lg={5} xl={5}>
					<Row style={{paddingTop:'20%'}}>
						<Col xs={2} sm={3} md={3} lg={3} xl={3}>
						</Col>
						<Col xs={8}>
							<h3 style={{color:'white', fontSize:'calc(16px + 0.8vw)',fontWeight:'450'}}>玉石</h3>
							<p style={{fontSize:'12px',color:'white'}}>{pageData.jadetitle.text}</p>
							<div className="tabArrow" >
								<Link to="/platform/product-list-2" className="tabMoreButton" style={{color:'white'}}>查看更多
									<img className="tabHalfArrowImg" src={arrowWhite} />
								</Link>
							</div>
						</Col>
					</Row>
				
				</Col>
			</Row>
			<Row className="calliRowStyle">
				<Col xs={3} sm={3} md={3} lg={3} xl={3}>
				</Col>
				<Col xs={4} sm={4} md={3} lg={4} xl={4} className="calliSampleArrowStyle">
					<Image className="underlineImage" src={Underline}/>
					<h5 style={{paddingTop:'5%',color:'white',fontSize:'calc(12px + 0.5vw)'}}>玉石名称</h5>
					<h5 style={{color:'white',fontSize:'calc(12px + 0.5vw)'}}>菩萨</h5>
				</Col>
			</Row>
		</BackgroundImage>
	</>;
}
