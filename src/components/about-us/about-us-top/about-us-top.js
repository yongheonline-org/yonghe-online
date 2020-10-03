import React from 'react';
import { Grid, Row, Column } from 'carbon-components-react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const AboutUSTop = () => {
	const data = useStaticQuery(graphql`
    {
      imageSharp(fluid: {originalName: {eq: "example1.jpg"}}) {
        id
        fluid {
          base64
          tracedSVG
          srcWebp
          srcSetWebp
          originalImg
          originalName
        }
      }
      testDataJson(id: {eq: "about-us-middle-text"}) {
        content
        title
      }
    }
  `);
	return <Grid condensed>
		<Row>
			<Column >
				<div className=''>
					<div className=''>
						{data.testDataJson.title}
					</div>
					<div className=''>
					</div>
					<div className=''>
						{data.testDataJson.content}
					</div>
				</div>
			</Column>
			<Column style={{ display: 'flex'}}>
				<Img fluid={data.imageSharp.fluid} style={{ height: '100%', width: '50%'}}></Img>
				<Img fluid={data.imageSharp.fluid} style={{ height: '100%', width: '50%'}}></Img>
			</Column>
		</Row>
	</Grid>;
};

export default AboutUSTop;