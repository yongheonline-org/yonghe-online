import React from 'react';
import AboutUsMiddleText from './about-us-middle-text/about-us-middle-text';

class AboutUSMiddle extends React.Component {
	render(){
		return <div className='bx--grid bx--no-gutter'>
			<div className='bx--row'>
				<div className='bx--col  bx--no-gutter' style={{ 'background-color': 'rgb(133,35,20'}}>
					<div className="outside bx--aspect-ratio bx--aspect-ratio--2x1">
						<div className="inside">
							<AboutUsMiddleText></AboutUsMiddleText>
						</div>
					</div>
				</div>
				<div className='bx--col  bx--no-gutter' style={{ 'background-color': 'gray'}}>
					<div className="outside bx--aspect-ratio bx--aspect-ratio--2x1">
						<div className="inside"></div>
					</div>
				</div>
			</div>
		</div>;
	}
}

export default AboutUSMiddle;