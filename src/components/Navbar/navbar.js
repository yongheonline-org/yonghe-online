import React from 'react';
import logo from './logo.png';
import './navbar.scss';
import { Link } from 'gatsby';
import {Navbar,Nav,Form,Button} from 'react-bootstrap';

class NavigationBar extends React.Component{
	render() {
		return <Navbar bg="white"sticky="top" expand="lg" style={{paddingTop:0, paddingBottom:0}}>
			<Navbar.Brand as={Link} to="/" className="nav-brand">
				<img
					src={logo}
					className="d-inline-block align-top"
					style={{marginTop: 'calc(5px + 0.6vw)',marginLeft:'calc(5px + 0.6vw)'}}
					alt="logo"
				/>
			</Navbar.Brand>			
			<Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle-btn" />
			<Navbar.Collapse id="basic-navbar-nav" style={{justifyContent: 'flex-end'}}>
				<Nav className="nav-links">
					<Nav.Link className={typeof window !== 'undefined' && window.location.pathname === '/' ? 'active' : ''} as={Link} to="/" >首页</Nav.Link>
					<Nav.Link className={typeof window !== 'undefined' && (window.location.pathname === '/about-us' || window.location.pathname === '/about-us/') ? 'active' : ''} as={Link} to="/about-us">关于我们</Nav.Link>
					<Nav.Link className={typeof window !== 'undefined' && (window.location.pathname === '/platform' || window.location.pathname === '/platform/')?'active' : ''} as={Link} to="/platform">甄品商城</Nav.Link>
					<Nav.Link className={typeof window !== 'undefined' && (window.location.pathname === '/news' || window.location.pathname === '/news/') ? 'active' : '' } as={Link} to="/news">新闻中心</Nav.Link>
					<Nav.Link className={typeof window !== 'undefined' && (window.location.pathname === '/fields-info' || window.location.pathname === '/fields-info/')?'active' : ''} as={Link} to="/fields-info">行业资讯</Nav.Link>
				</Nav>
				<Form inline>
					<Button to='/contact-us' className='buttonContactUs'>联系我们</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>;
		
	}
}

export default NavigationBar;