import React from 'react';
import HomePageTitle from '../HomePageTitle/homePageTitle';
import {Card,Row,Col,Image,Jumbotron} from 'react-bootstrap';
import LeftImage from './about-left.png';
import './aboutus.scss';
import MoreButton from '../MoreButton/MoreButton';
import left from './about-icon-team.png';
import middle from './about-icon-service.png';
import right from './about-icon-industry.png';
import CommonCol from './commonCard';

const AboutUS = () => {
	return (
		<section className="homePageAboutUsSection" >
			<HomePageTitle sectionTitle="关于我们" sectionSubTitle="About US" link="/about-us" display="none"/>
			<Card  style={{borderRadius:'0px', paddingLeft: '5%',border:'none'}}>
				<Row className="no-gutters justify-content-enter" style={{paddingRight:'3%'}}>
					<Col md={6} style={{paddingBottom:'3vw', justifyContent:'center'}}>
						<Image src={LeftImage} style={{width:'95%',paddingLeft:'0', objectFit: 'contain',paddingTop:'0',paddingBottom:'0', display:'block', margin:'auto'}}/>
					</Col>
					<Col md={6} style={{paddingBottom:'2vw', flex: '1 1 100% !important', maxWidth: '100%!important'}}>
						<Row style={{paddingLeft:'12px'}}>
							<CommonCol picSrc={left} title="专业团队" desc="行业精英打造专业团队为您提供专项服务"/>
							<CommonCol picSrc={middle} title="精准服务" desc="根据客户需求提供定位精准的专项服务"/>
							<CommonCol picSrc={right} title="行业翘楚" desc="创新、完善、安全、便捷的全生态服务"/>
						</Row>
						<Row style={{paddingLeft:'15px'}}>
							<Jumbotron style={{backgroundColor:'white',paddingBottom:'1vw',paddingTop:'2vw'}}>
								<h5 style={{fontSize:'calc(5px + 1vw)'}}>雍和在线</h5>
								<p style={{fontSize:'calc(5px + 0.6vw)'}}>
                                雍和在线，隶属于雍和集团，致力于打造艺术品服务平台的多元化集团，总部设于北京。主要业务涉及：艺术品征信、艺术品交易、艺术品存管、艺术品金融化服务等主营业务,雍和集团拥有完整专业的艺术品商业生态系统，包括信用体系、保管体系、交易体系和交换体系四大板块，是目前在中国大陆唯一从事艺术品生态环境建设的专业机构。
								</p>
								<br/>
								<p style={{fontSize:'calc(5px + 0.6vw)'}}>
								同时集团为包括信托、保险、银行、租赁、基金等金融机构提供专业化服务，为藏家提供艺术品资产流转渠道，为从事艺术品投资的机构和个人提供风险可控、收益稳健的产品和服务。
								</p>
								<br/>
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
