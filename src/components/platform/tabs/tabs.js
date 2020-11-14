import React from 'react';
import {Row,Col,Image} from 'react-bootstrap';
import arrow from './tab1/go-to-right.png';
import arrowWhite from './tab1/go-to-right-white.png';
import Underline from './tab1/underline.png';
import UnderlineGrey from './tab1/underline-grey.png';
import { Link } from 'gatsby';
import './tab.scss';
import { graphql, useStaticQuery } from 'gatsby';


const query = graphql`
{
    prismicPlatformhomepage {
		data {
		  banner {
			url
		  }
		  calligraphysample {
			url
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
			url
		  }
		  tabjadebg {
			url
		  }
		  tabporcelainbg {
			url
		  }
		  tea0 {
			url
		  }
		  tea1 {
			url
		  }
		  tea2 {
			url
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
		<div className="tabImage" style={{backgroundImage:`url(${pageData.tabporcelainbg.url})`}}>
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
							<Image className="underlineImage" src={UnderlineGrey}/>
							<p style={{fontSize: 'calc(12px + 0.2vw)'}}>清朝雍正年间</p>
							<p style={{fontSize: 'calc(12px + 0.2vw)'}}>斗彩水丞</p>
						</Col>
					</Row>
				</Col>
				<Col  xs={10} sm={7} md={7} lg={7} xl={7}>
					<Row  className="topTeasStyle">
						<Col xs={3} sm={3} md={3} lg={3} xl={3} style={{marginRight:'16%'}}>
							<Image src={pageData.tea2.url} className="tea2"/>
						</Col>
						<Col xs={3} sm={3} md={3} lg={3} xl={3} style={{paddingRight:'3%'}}>
							{/* //  style={{paddingLeft:'10%'}}> */}
							<Image src={pageData.tea1.url} className="tea1 "/>
						</Col>
					</Row>
					<Row className="lowTeaStyle">
						<Image src={pageData.tea0.url} className="tea0"/>
					</Row>
				</Col>
			</Row>
		</div>
		<div className="tabImage" style={{backgroundImage:`url(${pageData.tabcalligraphy.url})`}} >
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
					<Image src={pageData.calligraphysample.url} className="calliRightImageStyle" />
				</Col>
			</Row>
		</div>
		<div className="tabImage" style={{backgroundImage:`url(${pageData.tabjadebg.url})`}}>
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
				<Col xs={4} sm={4} md={3} lg={3} xl={3}>
					<Image className="underlineImage" src={Underline}/>
					<h5 style={{paddingTop:'5%',color:'white',fontSize:'calc(12px + 0.5vw)'}}>玉石名称</h5>
					<h5 style={{color:'white',fontSize:'calc(12px + 0.5vw)'}}>菩萨</h5>
				</Col>
			</Row>
		</div>
	</>;
}
