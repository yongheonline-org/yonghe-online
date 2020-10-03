import React from 'react';
import './footer.scss';
import { Link } from 'gatsby';
import QRCode from './qrcode.png';

const Footer = () => {
	return (
		<div className="main-footer">
			<div className="footer-middle">
				<div className="container">
					<div className="row">
						{/* column 1 */}
						<div className="col-md-2 col sm-6">
							<ul className="list-unstyled ">
								<p style={{marginTop:'0rem'}}>相关链接</p>
								<li><Link to='/'>雍和臻品</Link></li>
								<li><Link to='/'>雍和文化艺术中心</Link></li>
								<li><Link to='/'>雍和新闻</Link></li>
								<li><Link to='/'>关于我们</Link></li>
								<li><Link to='/'>合作单位</Link></li>
								<li><Link to='/'>行业资讯</Link></li>
							</ul>
						</div>

						{/* column 2 */}
						<div className="col-md-3 col sm-6">
							<ul className="list-unstyled">
								<h5>全国咨询电话</h5>
								<li style={{paddingBottom:'0.8rem'}}><h2>400-820-8820</h2></li>
								<li> </li>
								<li> </li>
								<li></li>
								<div className="row"/>
								<li>地址：北京市朝阳区丰联广场</li>
								<li>邮编：100020</li>
								<li>电话：400-820-8820</li>
							</ul>
						</div>

						{/* column 3 */}
						<div className="col-md-3 col sm-6">
							<img src={QRCode} style={{width:'130px',height:'145px'}} alt="logo"/>
						</div>
						{/* column 4 */}
						<div className="col-md-4 col sm-6" style={{paddingBottom:'2rem'}}>
							<div className="card" style={{backgroundColor:'rgb(47,50,59)', border:'1px solid grey'}}>
								<form className="formStyle">
									<div className="form-group row justify-content-center" style={{paddingTop:'0.5rem'}}>
										<label htmlFor="name" className="col-sm-2" style={{backgroundColor:'rgb(47,50,59)', fontSize:'0.75rem'}} >姓名</label>
										<input className="col-sm-6 form-control text-white" style={{backgroundColor:'rgb(47,50,59)', fontSize:'0.75rem', height:'1rem', border:'none',  borderBottom: '1px solid grey', borderRadius:'0'}} id="name" placeholder="请输入姓名"/>
									</div>
									<div className="form-group row justify-content-center">
										<label className="col-sm-2" htmlFor="phone" style={{backgroundColor:'rgb(47,50,59)', fontSize:'0.75rem'}} >电话</label>
										<input className="col-sm-6 form-control text-white" style={{backgroundColor:'rgb(47,50,59)', fontSize:'0.75rem', height:'1rem', border:'none', borderBottom:'1px solid grey',borderRadius:'0'}} id="phone" placeholder="请输入电话"/>
									</div>
									<div className="form-group row justify-content-center ">
										<label className="col-sm-2" htmlFor="note" style={{backgroundColor:'rgb(47,50,59)', fontSize:'0.75rem'}} >留言</label>
										<input className="col-sm-6 form-control text-white" id="note" style={{backgroundColor:'rgb(47,50,59)', fontSize:'0.75rem', height:'1rem',border:'none', borderRadius:'0',borderBottom:'1px solid grey'}} rows="1" placeholder="请输入您的留言"></input>
									</div>
									<div className="form-group row justify-content-center">
										<button type="submit" className="btn btn-primary mb-2 text-dark bg-light" style={{borderRadius:'20px', fontSize:'0.75rem', marginBottom:'0rem',padding: '0.1rem 1.25rem' }}>发送</button>
									</div>
								</form>
							</div>
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
