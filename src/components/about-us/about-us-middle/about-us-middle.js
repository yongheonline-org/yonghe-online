import React from 'react';
import TwoColumns from '../../common/two-columns/two-columns';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

import './about-us-middle.scss';

const AboutUsMiddleText = (props) => {
	const {data} = props;
	return <div className='about-us-middle-text' style={{ color: 'white', width: '70%', maxHeight: '70%', height: 'fit-content', display: 'flex', flexDirection: 'column' }}>
		<div className='about-us-middle-text-title' style={{ fontSize: '32px', fontWeight: 'bold', paddingBottom: '12px'}}>
			{data.title}
		</div>
		<div className='about-us-middle-text-content' style={{ fontSize: '14px', overflow: 'hidden'}}>
			{data.content}
		</div>
	</div>;
};
const AboutUsMiddleImage = (props) => {
	const { data } = props;
	return <Img fluid={data.image} style={{ height: '100%', width: '100%' }}/>;
};
const AboutUSMiddle = () => {
	const data = useStaticQuery(graphql`
    {
      imageSharp(fluid: {originalName: {eq: "example1.jpg"}}) {
        fluid {
          base64
          tracedSVG
          srcWebp
          srcSetWebp
          originalImg
          originalName
        }
      }
      testAboutUsMiddleJson {
        title
        image
        content
      }
    }
  `);
	const leftChildrenData = {
		title: data.testAboutUsMiddleJson.title,
		content: data.testAboutUsMiddleJson.content
	};
	const rightChildrenData = {
		image: data.imageSharp.fluid
	};
	return <TwoColumns className={'about-us-middle'}
		aspectRatio={{width: 16, height: 9}}
		leftColChildren={AboutUsMiddleText({ data: leftChildrenData })}
		rightColChildren={AboutUsMiddleImage({ data: rightChildrenData })}
	/>;
};

export default AboutUSMiddle;