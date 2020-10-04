import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TwoColumns = (props) => {
	const {className, leftColChildren, rightColChildren, style, aspectRatio} = props;
	const colAspectRatioWrapperClass = aspectRatio ? `bx--aspect-ratio bx--aspect-ratio--${aspectRatio.width}x${aspectRatio.height}` : '';
	const colAspectRatioObjectClass = aspectRatio ? 'bx--aspect-ratio--object' : '';
	const gridStyle = Object.assign({ height: '100%', padding: 0 }, style);
	return <Container fluid className={'two-columns-container ' + className} style={gridStyle}>
		<Row noGutters={true} className={'two-columns-row'} style={{ height: '100%' }}>
			<Col className={'two-columns-left-col'}>
				<Container className={colAspectRatioWrapperClass} style={{ padding: 0, height: '100%' }}>
					<Container className={colAspectRatioObjectClass} style={{ padding: 0, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						{leftColChildren}
					</Container>
				</Container>
			</Col>
			<Col className={'two-columns-right-col'}>
				<Container className={colAspectRatioWrapperClass} style={{ padding: 0, height: '100%' }}>
					<Container className={colAspectRatioObjectClass} style={{ padding: 0, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						{rightColChildren}
					</Container>
				</Container>
			</Col>
		</Row>
	</Container>;
};

TwoColumns.propTypes = {
	style: PropTypes.object,
	className: PropTypes.string,
	leftColChildren: PropTypes.node,
	rightColChildren: PropTypes.node,
	// aspect ratio is one of 2:1, 16:9, 4:3, 1:1 3:4 9:16 1:2
	aspectRatio: PropTypes.shape({
		width: PropTypes.number,
		height: PropTypes.number
	})
};

export default TwoColumns;