import Button from 'react-bootstrap/Button';
import {MdKeyboardArrowRight}from 'react-icons/md';
import React from 'react';
import { Link } from 'gatsby';


const MoreButton = ({className, path}) => {
	return<Button variant="primary" className={className} style={{backgroundColor:'#902413',border: 'none', fontSize:'calc(10px + 0.3vw)', borderRadius:'1.8vw', padding:'0.45vw 3.2vw 0.5vw 2.2vw', fontWeight:'500'}}>
		<Link to={path} style={{textDecoration: 'none',color:'white', fontWeight:'600'}}>了解更多<MdKeyboardArrowRight style={{ height: 'calc(17px + 0.4vw)', width: 'calc(17px + 0.4vw)', margin : 'auto',position:'absolute'}}/>
		</Link></Button>;
};
export default MoreButton;