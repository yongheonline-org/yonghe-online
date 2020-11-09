import React from 'react';
import BannerImage from './banner.png';
import {Jumbotron,Image} from 'react-bootstrap';

export default function Banner() {
	return (
		<Jumbotron style={{padding:'0'}}>
			<Image style={{width:'100%',height:'auto'}} src = {BannerImage}></Image>
		</Jumbotron>
	);
}