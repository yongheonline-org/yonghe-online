import React from 'react';
import AboutUsMiddleText from './about-us-middle-text/about-us-middle-text';
import { Grid, Row, Column } from 'carbon-components-react';
import AboutUSMiddleImage from './about-us-middle-image/about-us-middle-image';

class AboutUSMiddle extends React.Component {
	render() {
		return <Grid condensed>
			<Row>
				<Column style={{ 'backgroundColor': 'rgb(133,35,20' }}>
					<AboutUsMiddleText></AboutUsMiddleText>
				</Column>
				<Column >
					<AboutUSMiddleImage></AboutUSMiddleImage>
				</Column>
			</Row>
		</Grid>;
	}
}

export default AboutUSMiddle;