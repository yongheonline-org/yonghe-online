import Button from 'react-bootstrap/Button';
import {MdKeyboardArrowRight}from 'react-icons/md';
import React from 'react';
import { Link } from 'gatsby';


const MoreButton = ({className, path}) => {
	return<Button variant="primary" className={className} style={{backgroundColor:'#902413',border: 'none', fontSize:'17px', borderRadius:'25px', padding:'0.4rem 2.6rem 0.4rem 2rem',  fontWeight:'500'}}>
		<Link to={path} style={{textDecoration: 'none',color:'white'}}>了解更多<MdKeyboardArrowRight size={25} style={{ height: 25, width: 25, margin : 'auto',position:'absolute'}}/>
		</Link></Button>;
};
export default MoreButton;