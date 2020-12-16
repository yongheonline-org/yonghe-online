import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './fields-info-top.scss';

const leftSide = (props) => {
	const { brannerLeftSrc } = props;
	return <div className='banner-image-container' >
		<img src={brannerLeftSrc}></img>
	</div>;
	// brannerLeftSrc
};
const rightSide = (props) => {
	const { pageTitle, pageSubtitle, pageTitleEnglish } = props;
	return <div className='banner-text-container'>
		<div className='banner-text-left'>	
			<div className='banner-title' >
				{pageTitle}
			</div>	
			<div className='banner-subtitle'>
				{pageSubtitle}
			</div>
		</div>
		<div className='banner-title-english'>
			{pageTitleEnglish}
		</div>
	</div>;
};
const FieldsInfoTop = () => {
	const data = useStaticQuery(graphql`
    {
      prismicFieldinfopage {
        data {
          banner_left {
            localFile {
				childImageSharp {
				  fluid {
					...GatsbyImageSharpFluid
				  }
				}
			}
          }
          page_title
          page_subtitle
          page_title_english
        }
      }
	}`);

	const pageData = data.prismicFieldinfopage.data;
	const brannerLeftSrc = pageData.banner_left.localFile.childImageSharp.fluid.src;
	const pageTitle = pageData.page_title;
	const pageSubtitle = pageData.page_subtitle;
	const pageTitleEnglish = pageData.page_title_english;
	return <div className='fields-info-top'>
		<div className='left-container'>
			{leftSide({ brannerLeftSrc })}
		</div>
		<div className='right-container'>
			{rightSide({
				pageTitle,
				pageSubtitle,
				pageTitleEnglish
			})}
		</div>
	</div>;
};

export default FieldsInfoTop;