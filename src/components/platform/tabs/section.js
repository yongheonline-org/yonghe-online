/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';

// export default function Section({ title, subtitle, dark, id }) {
// 	return (
// 		<div className={'section' + (dark ? ' section-dark' : '')}>
// 			<div className="section-content" id={id}>
// 				<h1>{title}</h1>
// 				<p>{subtitle}</p>
// 			</div>
// 		</div>
// 	);
// }


const Section1 = React.forwardRef((props, ref)=>{
	return (
	  <section ref={ref} className='section'>
			<p>Section 1</p>
	  </section>
	);
});
Section1.displayName = 'Section1';

export default Section1;