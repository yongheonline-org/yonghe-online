import Button from 'react-bootstrap/Button';
import {MdKeyboardArrowRight}from 'react-icons/md';
import React from 'react';
import { Link } from 'gatsby';


const MoreButton = ({className, path}) => {
	return<Button variant="primary" className={className} style={{backgroundColor:'#902413',border: 'none', fontSize:'calc(10px + 0.3vw)', borderRadius:'calc(1px + 1.8vw)', padding:'calc(1px + 0.5vw) calc(1px + 3.3vw) calc(1px + 0.6vw) calc(1px + 2.2vw)', fontWeight:'500'}}>
		<Link to={path} style={{textDecoration: 'none',color:'white', fontWeight:'600'}}>了解更多<MdKeyboardArrowRight style={{ height: 'calc(16px + 0.4vw)', width: 'calc(16px + 0.4vw)', position:'absolute'}}/>
		</Link></Button>;
};
export default MoreButton;