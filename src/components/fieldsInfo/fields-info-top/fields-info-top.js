import React from 'react';
import TwoColumns from '../../common/two-columns/two-columns';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import './fields-info-top.scss';

const leftSide = (props) => {
	const { fluid } = props;
	return <Img fluid={fluid} style={{ height: '100%', width: '100%'}}/>;
};
const rightSide = (props) => {
	const { header_title: title, header_content: content} = props;
	return <div className='' style={{ color: 'white', width: '70%', maxHeight: '70%', height: 'fit-content', display: 'flex', flexDirection: 'column' }}>
		<div className='' style={{ fontSize: '32px', fontWeight: 'bold', paddingBottom: '12px'}}>
			{title}
		</div>
		<div className='' style={{ fontSize: '14px', overflow: 'hidden'}}>
			{content}
		</div>
	</div>;
};
const FieldsInfoTop = () => {
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
      testFieldsInfoJson {
        header_title
        header_content
      }
    }
  `);
	return <TwoColumns className='fields-info-top'
		leftColChildren={leftSide({ fluid: data.imageSharp.fluid })}
		rightColChildren={rightSide(data.testFieldsInfoJson)}
		aspectRatio={{ width: 2, height: 1 }}
	/>;
};

export default FieldsInfoTop;