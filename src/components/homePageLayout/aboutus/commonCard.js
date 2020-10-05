import React from 'react';
import {Col,Card} from 'react-bootstrap';


const CommonCol = ({picSrc, title, desc}) => {
	return(<Col>
		<Card style={{ width: '11vw', textAlign:'center'}}>
			<Card.Img src={picSrc} style={{width:'50%',margin:'auto'}}/>
			<Card.Body style={{paddingBottom:'15px'}}>
				<Card.Title>{title}</Card.Title>
				<Card.Text style={{fontSize:'11px'}}>
					{desc}				
				</Card.Text>
			</Card.Body>
		</Card>
	</Col>);
};
export default CommonCol;