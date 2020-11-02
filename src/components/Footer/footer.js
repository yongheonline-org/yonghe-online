import React from 'react';
import './footer.scss';
// import { Link } from 'gatsby';
import QRCode from './qrcode.png';
import {Container,Row,Col,Image} from 'react-bootstrap';

import ContactUs from './contactUs';
const Footer = () => {

	return (
		<div className="main-footer">
			<div className="footer-middle">
				<Container>
					<Row className="justify-content-md-center">
						{/* column 1 */}
						{/* <div className="col-md-2 col sm-6">
							<ul className="list-unstyled ">
								<p style={{marginTop:'0rem'}}>相关链接</p>
								<li><Link to='/'>雍和臻品</Link></li>
								<li><Link to='/'>雍和文化艺术中心</Link></li>
								<li><Link to='/'>雍和新闻</Link></li>
								<li><Link to='/'>关于我们</Link></li>
								<li><Link to='/'>合作单位</Link></li>
								<li><Link to='/'>行业资讯</Link></li>
							</ul>
						</div> */}

						{/* column 2 */}
						<Col  xs={5} sm={6} md={3} lg={3} style={{marginLeft:'9%',marginRight:'0'}}>
							<ul className="list-unstyled">
								<h5>企业微信</h5>
								<li style={{paddingBottom:'0.8rem'}}><h2>企业微信</h2></li>
								<li> </li>
								<li> </li>
								<li></li>
								<div className="row"/>
								<li>地址：北京市东城区雍和文化艺术中心</li>
								<li>邮编：100010</li>
								<li>电话：010-5368-4565</li>
								<br/>
							</ul>
						</Col>
						{/* column 3 */}
						<Col xs={3} sm={3} md={3}  lg={3} style={{marginRight:'auto'}}>
							<Image src={QRCode} style={{width:'130px',height:'145px'}} alt="logo"/>
							<br/>
							<br/>
						</Col>
						{/* column 4 */}
						<Col xs={8} sm={10} md={4} lg={4} style={{paddingBottom:'2rem', marginLeft:'auto',marginRight:'auto'}}>
							<ContactUs/>
						</Col>
					</Row>
				</Container>
			</div>
			<div className="card-footer text-muted" style={{ backgroundColor: 'rgb(47,50,59)'}}>
				<p className="text-xs-center" style={{fontSize: '0.78rem', textAlign:'center'}}>
                        Copyright&copy;{new Date().getFullYear()} 北京雍和在线有限公司  版权所有 京 ICP备02689411号-2
				</p>			</div>
		</div>
	);
};

export default Footer;
