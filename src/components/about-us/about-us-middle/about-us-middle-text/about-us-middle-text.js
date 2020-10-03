import React from 'react';
import './about-us-middle-text.scss';
import { useStaticQuery, graphql } from 'gatsby';

const AboutUsMiddleText = () => {
	const data = useStaticQuery(graphql`
    {
      testDataJson(id: {eq: "about-us-middle-text"}) {
        content
        title
      }
    }
  `);
	return <div className='about-us-middle-text'>
		<div className='about-us-middle-text-title bx--type-semibold'>
			{data.testDataJson.title}
		</div>
		<div className='about-us-middle-text-space'>
		</div>
		<div className='about-us-middle-text-content'>
			{data.testDataJson.content}
		</div>
	</div>;
};
export default AboutUsMiddleText;