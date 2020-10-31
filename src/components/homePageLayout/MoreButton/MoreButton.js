import Button from 'react-bootstrap/Button';
import {MdKeyboardArrowRight}from 'react-icons/md';
import React from 'react';
import { Link } from 'gatsby';


const MoreButton = ({className, path}) => {
	return<Button variant="primary" className={className} style={{backgroundColor:'#902413',border: 'none', fontSize:'1.2vw', borderRadius:'1.7vw', padding:'0.6vw 2.8vw 0.6vw 2.2vw',  fontWeight:'500'}}>
		<Link to={path} style={{textDecoration: 'none',color:'white'}}>了解更多<MdKeyboardArrowRight style={{ height: '1.7vw', width: '1.7vw', margin : 'auto',position:'absolute'}}/>
		</Link></Button>;
};
export default MoreButton;