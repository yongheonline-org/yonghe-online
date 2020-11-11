import React from 'react';
import {Row,Col,Image} from 'react-bootstrap';
import TabPorcelain from './tab1/Porcelain.png';
import Tea0 from './tab1/tea.png';
import Tea1 from './tab1/tea02.png';
import Tea2 from './tab1/tea03.png';
import arrow from './tab1/go-to-right.png';
import arrowWhite from './tab1/go-to-right-white.png';

import Underline from './tab1/underline.png';
import UnderlineGrey from './tab1/underline-grey.png';

import { Link } from 'gatsby';
import TabCalligraphy from './tab1/Calligraphy.png';
import CalliRight from './tab1/CalliRight.png';

import TabJade from './tab1/Jade.png';
import './tab.scss';
export default function Banner() {
	
	return <>
		<Row className="btnContainerStyle" style={{columnGap: '4rem',rowGap:'1rem'}}>
			<Link to='/platform/product-list-0' className="linkToProductListButton">
						全部瓷器
			</Link>
			<Link to='/platform/product-list-1' className="linkToProductListButton">
						全部字画
			</Link>
			<Link to='/platform/product-list-2' className="linkToProductListButton">
						全部玉石
			</Link>
		</Row>
		<div className="tabImage" style={{backgroundImage:`url(${TabPorcelain})`}}>
			<Row>
				<Col xs={5} sm={5} md={5} lg={5} xl={5}>
					<Row style={{paddingTop:'18%'}}>
						<Col xs={3} sm={3} md={3} lg={3} xl={3}>
						</Col>
						<Col>
							<h3 style={{fontSize:'calc(16px + 0.8vw)',fontWeight:'450'}}>瓷器</h3>
							<p style={{fontSize:'12px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

							<div className="tabArrow" >
								<Link to="/platform/product-list-0" className="tabMoreButton">查看更多
									<img className="tabHalfArrowImg" src={arrow} />
								</Link>
							</div>
						</Col>
					</Row>
					<Row style={{paddingTop:'2%'}}>
						<Col xs={3} sm={3} md={3} lg={3} xl={3}>
							<br/>
						</Col>
						<Col>
							<Image className="underlineImage" src={UnderlineGrey}/>
							<p style={{fontSize: 'calc(12px + 0.2vw)'}}>清朝雍正年间</p>
							<p style={{fontSize: 'calc(12px + 0.2vw)'}}>斗彩水丞</p>
							<p style={{fontSize: 'calc(10px + 0.2vw)'}}>雍和在线商城所有</p>
						</Col>
					</Row>
				</Col>
				<Col xs={7} sm={7} md={7} lg={7} xl={7}>
					<Row  style={{paddingTop:'18%'}}>
						<Col xs={3} sm={3} md={3} lg={3} xl={3}>
							<Image src={Tea2} className="tea2"/>
						</Col>
						<Col xs={1} sm={1} md={1} lg={1} xl={1}></Col>
						<Col xs={3} sm={3} md={3} lg={3} xl={3} style={{paddingLeft:'10%'}}>
							<Image src={Tea1} className="tea1"/>
						</Col>
					</Row>
					<Image src={Tea0} className="tea0"/>
				</Col>
			</Row>
		</div>
		<div className="tabImage" style={{backgroundImage:`url(${TabCalligraphy})`}} >
			<Row>
				<Col xs={5} sm={5} md={5} lg={5} xl={5}>
					<Row style={{paddingTop:'18%'}}>
						<Col xs={3} sm={3} md={3} lg={3} xl={3}>
						</Col>
						<Col>
							<h3 style={{fontSize:'calc(16px + 0.8vw)',fontWeight:'450'}}>字画</h3>
							<p style={{fontSize:'12px'}}>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
							<div className="tabArrow" >
								<Link to="/platform/product-list-1" className="tabMoreButton">查看更多
									<img className="tabHalfArrowImg" src={arrow} />
								</Link>
							</div>
						</Col>
					</Row>
				</Col>
				<Col xs={6} sm={6} md={6} lg={6} xl={6}>
					<Image src={CalliRight} className="calliRightImageStyle" />
				</Col>
			</Row>
		</div>
		<div className="tabImage" style={{backgroundImage:`url(${TabJade})`}}>
			<Row>
				<Col xs={5} sm={5} md={5} lg={5} xl={5}>
					<Row style={{paddingTop:'20%'}}>
						<Col xs={3} sm={3} md={3} lg={3} xl={3}>
						</Col>
						<Col>
							<h3 style={{color:'white', fontSize:'calc(16px + 0.8vw)',fontWeight:'450'}}>玉石</h3>
							<p style={{fontSize:'12px',color:'white'}}>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
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
					<h5 style={{paddingTop:'3%',color:'white',fontSize:'calc(12px + 0.5vw)'}}>玉石名称</h5>
					<h5 style={{color:'white',fontSize:'calc(12px + 0.5vw)'}}>菩萨</h5>
					<p style={{fontSize: 'calc(10px + 0.2vw)', color:'rgb(139,93,94)'}}>雍和在线商城所有</p>
				</Col>
			</Row>
		</div>
	</>;
}
