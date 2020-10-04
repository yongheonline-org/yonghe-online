import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import TwoColumns from '../../common/two-columns/two-columns';
import Img from 'gatsby-image';

const AboutUSTop = () => {
	const data = useStaticQuery(graphql`
    {
      imageSharp(fluid: {originalName: {eq: "example1.jpg"}}, resize: {}) {
        fluid(fit: FILL) {
          base64
          tracedSVG
          srcWebp
          srcSetWebp
          originalImg
          originalName
          aspectRatio
          presentationHeight
          presentationWidth
          sizes
        }
      }
      testAboutUsTopJson {
        content
        title
      }
    }
  `);
	const leftCol = <div className='about-us-top-text' style={{ width: '70%',  maxHeight: '70%', height: 'fit-content', display: 'flex', flexDirection: 'column' }}>
		<div className='about-us-top-text-title' style={{ fontSize: '24px', fontWeight: 'bold', paddingBottom: '12px'}}>
			{data.testAboutUsTopJson.title}
		</div>
		<div className='about-us-top-text-content' style={{ fontSize: '14px', overflow: 'hidden'}}>
			{data.testAboutUsTopJson.content}
		</div>
	</div>;
	const leftImage = <Img fluid={data.imageSharp.fluid} style={{ height: '100%', width: '50%'}}></Img>;
	const rightImage = <Img fluid={data.imageSharp.fluid} style={{ height: '100%', width: '50%'}}></Img>;
	const rightCol = <TwoColumns className='about-us-top-images' style={{ height: '70%'}}
		leftColChildren={leftImage}
		rightColChildren={rightImage}
		aspectRatio={{ width: 2, height: 1 }}
	/>;
	return <TwoColumns className='about-us-top'
		leftColChildren={leftCol}
		rightColChildren={rightCol}
		aspectRatio={{ width: 2, height: 1 }}
	/>;
};

export default AboutUSTop;