import React from 'react';
import {Col,Card} from 'react-bootstrap';


const CommonCol = ({picSrc, title, desc}) => {
	return(<Col md={4} sm={4} xs={4} style={{margin:'auto'}}>
		<Card style={{  textAlign:'center',border:'none'}} sm={4} >
			<Card.Img src={picSrc} style={{width:'calc(25px + 3vw)',margin:'auto'}}/>
			<Card.Body style={{padding:'0.5vw 0.5vw'}}>
				<Card.Title style={{fontSize:'calc(5px + 1vw)'}}>{title}</Card.Title>
				<Card.Text style={{fontSize:'calc(5px + 0.5vw)'}}>
					{desc}				
				</Card.Text>
			</Card.Body>
		</Card>
	</Col>);
};
export default CommonCol;