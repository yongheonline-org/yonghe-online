import React from 'react';
import './footer.scss';
import QRCode from './qrcode.png';
import {Row,Col,Image} from 'react-bootstrap';

import ContactUs from './contactUs';
const Footer = () => {

	return (
		<div className="main-footer">
			<div className="footer-middle" style={{paddingLeft:'11%', paddingRight:'11%'}}>
				<Row className="justify-content-center">
					<Col  xs={10} sm={6} md={4} lg={3} style={{marginLeft:'auto',marginRight:'auto'}}>
						<ul className="list-unstyled">
							<br/>
							<h4>联系我们</h4>
							<h4 style={{paddingBottom:'0.8rem'}}>010-5368-4565</h4>
							<li>地址：北京市东城区雍和文化艺术中心</li>
							<li>邮编：100010</li>
							<br/>
						</ul>
					</Col>
					<Col xs={4} sm={3} md={2} lg={2} style={{marginLeft:'auto',marginRight:'auto'}} >
						<p style={{fontSize:'0.75rem'}}>企业微信</p>
						<Image src={QRCode} style={{width:'115px',height:'auto'}} alt="logo"/>
						<br/>
						<br/>
					</Col>

					<Col xs={4} sm={3} md={2}  lg={2} style={{marginLeft:'auto',marginRight:'auto'}}>
						<p style={{fontSize:'0.75rem'}}>客户端下载</p>
						<Image src={QRCode} style={{width:'115px',height:'auto'}} alt="logo"/>
						<br/>
						<br/>
					</Col>
					<Col xs={10} sm={10} md={8} lg={4} style={{paddingBottom:'2rem', marginLeft:'auto',marginRight:'auto'}}>
						<p style={{fontSize:'0.75rem'}}>请在此处留下您的宝贵意见</p>
						<ContactUs/>
					</Col>
				</Row>
			</div>
			<div className="card-footer text-muted" style={{ backgroundColor: 'rgb(47,50,59)'}}>
				<p className="text-xs-center" style={{fontSize: '0.78rem', textAlign:'center'}}>
                        Copyright&copy;{new Date().getFullYear()} 北京雍和在线有限公司  版权所有 京 ICP备02689411号-2
				</p>			</div>
		</div>
	);
};

export default Footer;
