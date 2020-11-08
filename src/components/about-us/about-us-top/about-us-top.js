import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import './about-us-top.scss';

const leftSection = (props) => {
	const { page_top_title, page_top_text } = props;
	return <div className='left-section-container'>
		<div className='text-container'>
			<div className='text-title'>{page_top_title}</div>
			<div className='text-content'>{page_top_text}</div>
		</div>
	</div>;
};

const rightSection = (props) => {
	const { page_top_caption_left, page_top_caption_right, page_top_icon_left, page_top_icon_right } = props;
	return <div className='right-section-container'>
		<div className='content-container'>
			<div className='left-icon-container'>
				<div className='left-icon-image'>
					<img src={page_top_icon_left.url} />
				</div>
				<div className='left-icon-caption'>{page_top_caption_left}</div>
			</div>
			<div className='right-icon-container'>
				<div className='right-icon-image'>
					<img src={page_top_icon_right.url} />
				</div>
				<div className='right-icon-caption'>{page_top_caption_right}</div>
			</div>
		</div>
	</div>;
};

const AboutUSTop = () => {
	const data = useStaticQuery(graphql`
    {
      allPrismicAboutuspage {
        edges {
          node {
            data {
              page_top_caption_left
              page_top_caption_right
              page_top_icon_left {
                url
              }
              page_top_icon_right {
                url
              }
              page_top_text
              page_top_title
            }
          }
        }
      }
	}`);
	const innerData = data.allPrismicAboutuspage.edges[0].node.data;
	return <div className='about-us-top-container'>
		{leftSection(innerData)}
		{rightSection(innerData)}
	</div>;
};

export default AboutUSTop;