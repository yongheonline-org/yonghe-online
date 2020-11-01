import React from 'react';
import './footer.scss';
// import { Link } from 'gatsby';
import QRCode from './qrcode.png';
import ContactUs from './contactUs';
const Footer = () => {

	return (
		<div className="main-footer">
			<div className="footer-middle">
				<div className="container">
					<div className="row">
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
						<div className="col-md-3 col sm-6">
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
							</ul>
						</div>

						{/* column 3 */}
						<div className="col-md-3 col sm-6">
							<img src={QRCode} style={{width:'130px',height:'145px'}} alt="logo"/>
						</div>
						{/* column 4 */}
						<div className="col-md-5 col sm-6" style={{paddingBottom:'2rem'}}>
							<ContactUs/>
						</div>
					</div>
				</div>
			</div>
			<div className="card-footer text-muted" style={{ backgroundColor: 'rgb(47,50,59)'}}>
				<p className="text-xs-center" style={{fontSize: '0.78rem', textAlign:'center'}}>
                        Copyright&copy;{new Date().getFullYear()} 北京雍和在线有限公司  版权所有 京 ICP备02689411号-2
				</p>			</div>
		</div>
	);
};

export default Footer;
