import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

const IMAGE_POSITION = {
	LEFT_BOTTOM: 'left-bottom',
	TOP_MIDDLE: 'top-middle'
};

const FieldInfoTextBlock = (props) => {
	const [selected, setSelected] = useState(false);
	const textBlockClassPrefix = 'field-info-text';
	const baseStyle = {
		width: '80%',
		background: 'white',
		padding: 0,
		margin: 0,
		zIndex: 1
	};
	const offsets = props.imagePosition === IMAGE_POSITION.LEFT_BOTTOM ? {
		transform: 'translate(25%, 0%)'
	} : {
		transform: 'translate(12.5%, -50%)'
	};
	const containerStyle = Object.assign(baseStyle, offsets);
	const containerID = Math.ceil(Math.random() * 1000000);
	return <Container
		id={containerID}
		className={textBlockClassPrefix}
		style={containerStyle}
		onClick={(event) => {
			if(parseInt(event.currentTarget.id) === containerID){
				setSelected(!selected);
			}else{
				setSelected(false);
			}
		}}
	>
		<Card.Header style={{
			zIndex: 1,
			backgroundColor: selected ? '#852314' : ''
		}}></Card.Header>
		<Card.Body style={{
			zIndex: 1,
			backgroundColor: selected ? 'white' : '#dee2e6'
		}}>
			<Card.Title
				className={`${textBlockClassPrefix}-title`}
				style={{ fontSize: '24px', fontWeight: 'bold', paddingBottom: '12px' }}
			>
				{props.text.title}
			</Card.Title>
			<Card.Subtitle className={`${textBlockClassPrefix}-data`}>{props.text.date}</Card.Subtitle>
			<Card.Text
				className={`${textBlockClassPrefix}-content`}
				style={{ fontSize: '14px', overflow: 'hidden' }}
			>
				{props.text.content}
			</Card.Text>
		</Card.Body>
	</Container>;
};

const FieldInfoImage = (props) => {
	const baseStyle = { width: '60%' };
	const offsets = props.imagePosition === IMAGE_POSITION.LEFT_BOTTOM ? {
		transform: 'translate(10%, -80%)'
	} : {
		transform: 'translate(33%, 20%)'
	};
	const variant = props.imagePosition === IMAGE_POSITION.LEFT_BOTTOM ? 'bottom' : 'top';
	const style = Object.assign(baseStyle, offsets);
	return <Card.Img
		variant={variant}
		src={props.imageSrc}
		style={ style }
	/>;
};

const InnerBlock = (props) => {
	let result;
	const { imagePosition } = props;
	if(imagePosition === IMAGE_POSITION.LEFT_BOTTOM){
		result = <React.Fragment>
			{FieldInfoTextBlock(props)}
			{FieldInfoImage(props)}
		</React.Fragment>;
	}else if(imagePosition === IMAGE_POSITION.TOP_MIDDLE){
		result = <React.Fragment>
			{FieldInfoImage(props)}
			{FieldInfoTextBlock(props)}
		</React.Fragment>;
	}
	return result;
};
const FieldInfoBlock = (props) => {

	return (
		<Card
			className="field-info-container"
			border='light'
		>
			{InnerBlock(props)}
		</Card>
	);
};

FieldInfoBlock.propTypes = {
	text: PropTypes.shape({
		title: PropTypes.string,
		date: PropTypes.string,
		content: PropTypes.string,
	}),
	imageSrc: PropTypes.any,
	imagePosition: PropTypes.oneOf([...Object.values(IMAGE_POSITION)])
};
export default FieldInfoBlock;
