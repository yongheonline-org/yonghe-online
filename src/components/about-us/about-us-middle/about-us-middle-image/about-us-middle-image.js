import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const AboutUSMiddleImage = () => {
	const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "example.jpg"}) {
        id
        childImageSharp {
          fluid {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
            originalImg
            originalName
          }
        }
      }
    }
  `);
	return <Img fluid={data.file.childImageSharp.fluid} style={{ height: '100%' }}/>;
};

export default AboutUSMiddleImage;
