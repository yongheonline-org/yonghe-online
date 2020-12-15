import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import headerRight from './header-right.png';
const NewsHeader = () => {
	
	return (
		<div className="card mb-3" style={{backgroundColor:'rgb(144,36,19)',borderRadius:'0px',border:'none'}}>
			<div className="row no-gutters" >
				<div className="col-md-3 justify-content-center align-self-center" style={{color:'white'}}>
					<div className="card-body" style={{paddingRight:'0'}}>
						<p className="card-title" style={{fontWeight:600, fontSize:'7vw', fontStyle:'italic', transform: 'scale(1, 1.2)'}}>NEWS</p>
					</div>
				</div>
				<div className="col-md-3 justify-content-center align-self-center" style={{color:'white'}}>
					<div className="card-body" >
						<h5 className="card-title" >新闻中心</h5>
						<p className="card-text">审时·度势</p>
						<p className="card-text">见微知著，闻世而后动，此乃雍和之道。</p>
					</div>
				</div>
				<div className="col-md-6">
					<img src={headerRight} className="card-img" style={{width: '100%',height: '100%', borderRadius: '0'}} alt="..."/>
				</div>
			</div>
		</div>
	);
};

export default NewsHeader;
