
import React from 'react';
import logo from './logo.png';
import { FaAlignRight } from 'react-icons/fa';
import './navbar.scss';
import { Link } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navbar extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			isOpen:false
		};
	}
	handleToggle(){
		this.setState({isOpen:!this.state.isOpen});
	}
	render() {
		console.log(this.state.isOpen);
		return <nav className="navbar">
			<div className="nav-center">
				<div className="nav-header">
					<Link to="/">
						<img src={logo} alt="logo"/>
					</Link>
					<button type="button" className="toggle-btn" onClick={this.handleToggle.bind(this)}>
						<FaAlignRight ></FaAlignRight>
					</button>
				</div>				
				<ul className="page-links nav-links">
					<li className={typeof window !== 'undefined' && window.location.pathname === '/' ? 'active' : ''}>
						<Link to='/'>首页</Link>
					</li>
					<li className={typeof window !== 'undefined' && window.location.pathname === '/about-us' ? 'active' : ''}>
						<Link to='/about-us'>关于我们</Link>
					</li>
					<li className={typeof window !== 'undefined' && window.location.pathname === '/news' ? 'active' : ''}>
						<Link to='/news'>新闻中心</Link>
					</li>
					<li className={typeof window !== 'undefined' && window.location.pathname === '/fields-info' ? 'active' : ''}>
						<Link to='/fields-info'>行业资讯</Link>
					</li>
					<li className={typeof window !== 'undefined' && window.location.pathname === '/1' ? 'active' : ''}>  
						<div className="nav-item dropdown">
							<a className="dropdown-toggle" href="#" role="button" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        旗下平台
							</a>
							<div className="dropdown-menu" style={{border:'0',outline:'0'}} aria-labelledby="navbarDropdown">
								<Link className="dropdown-item" to="/1">雍和珍品</Link>
								<Link className="dropdown-item" to="/2">雍和真品</Link>
								<Link className="dropdown-item" to="/3">雍和在线</Link>
							</div>
						</div>
					</li>
					<li className={typeof window !== 'undefined' && window.location.pathname === '/1' ? 'active' : ''}>
						<button to='/contact-us' className='nav-links buttonContactUs'>联系我们 </button>
					</li>
				</ul>
			</div>
		</nav>;
	}
}

export default Navbar;
