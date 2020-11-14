import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import './about-us-middle.scss';

const leftSection = (props) => {
	const { page_middle_text, page_middle_title } = props;
	return <div className='about-us-middle-left-container'>
		<div className='text-container'>
			<div className='text-title'>
				{page_middle_title}
			</div>
			<div className='text-content'>
				<ReactMarkdown source={page_middle_text}escapeHtml={false}></ReactMarkdown>
			</div>
		</div>
	</div>;
};
const rightSection = (props) => {
	const {page_middle_banner_right} = props;
	return <div className='about-us-middle-right-container'>
		<img src={page_middle_banner_right.url}></img>
	</div>;
};
const AboutUSMiddle = () => {
	const data = useStaticQuery(graphql`
    {
      allPrismicAboutuspage {
        edges {
          node {
            data {
              page_middle_text
              page_middle_title
              page_middle_banner_right {
                url
              }
            }
          }
        }
      }
    }`);
	const innerData = data.allPrismicAboutuspage.edges[0].node.data;
	return <div className='about-us-middle-container'>
		{leftSection(innerData)}
		{rightSection(innerData)}
	</div>;
};

export default AboutUSMiddle;