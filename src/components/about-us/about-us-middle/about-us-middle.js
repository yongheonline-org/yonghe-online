import React from 'react';
import AboutUsMiddleText from './about-us-middle-text/about-us-middle-text';
import { Grid, Row, Column } from 'carbon-components-react';

class AboutUSMiddle extends React.Component {
	render(){
		return <Grid condensed>
			<Row>
				<Column style={{ 'backgroundColor': 'rgb(133,35,20'}}>
					<div className="outside bx--aspect-ratio bx--aspect-ratio--2x1">
						<div className="inside">
							<AboutUsMiddleText></AboutUsMiddleText>
						</div>
					</div>
				</Column>
				<Column style={{ 'backgroundColor': 'gray'}}>
					<div className="outside bx--aspect-ratio bx--aspect-ratio--2x1">
						<div className="inside"></div>
					</div>
				</Column>
			</Row>
		</Grid>;
	}
}

export default AboutUSMiddle;