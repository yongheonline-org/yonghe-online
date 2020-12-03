import React from 'react';
import Container from 'react-bootstrap/Container';
import {useStaticQuery, graphql} from 'gatsby';
import ReactMarkdown from 'react-markdown/with-html';

import './fields-info-body.scss';

const STYLES = {
	DEFAULT: 0,
	ALTERNATE: 1,
	SPAN: 2
};

const FieldInfoCard = (infoBlockData, style, imgURL, index) => {
	const styleName = 'style-' + style;
	const card = <div className='info-card'>
		<div className='info-title'>{infoBlockData.info_title}</div>
		<div className='info-date'>{infoBlockData.info_date}</div>
		<div className='info-content'>
			<ReactMarkdown source={infoBlockData.info_content} escapeHtml={false}></ReactMarkdown>
			<a target="_blank" rel="noreferrer" className="info-link" href={infoBlockData.info_link[0].text}>全文参见</a>
		</div>
	</div>;
	const image = <div className='info-card-decoration'>
		<img src={imgURL}/>
	</div>;
	let cardContent;
	if(style === STYLES.DEFAULT){
		cardContent = <React.Fragment>
			{card}
			{image}
		</React.Fragment>;
	}else if(style === STYLES.ALTERNATE){
		cardContent = <React.Fragment>
			{image}
			{card}
		</React.Fragment>;
	}else if(style === STYLES.SPAN){
		cardContent = <React.Fragment>
			{image}
			<div className='info-card' >
				<div className='card-title-section'>
					<div>
						<div className='info-title'>{infoBlockData.info_title}</div>
						<div className='info-date'>{infoBlockData.info_date}</div>
					</div>
					<div className='left-quote'>“</div>
				</div>
				<div className='info-content'><ReactMarkdown source={infoBlockData.info_content} escapeHtml={false}></ReactMarkdown></div>
			</div>
		</React.Fragment>;
	}
	return <div className={`field-info-card ${styleName}`} key={index}>
		<div className='card-inner-container'>
			{cardContent}
		</div>
	</div>;
};
const FieldInfoBody = () => {
	const data = useStaticQuery(graphql`
    {
      prismicFieldinfopage {
        data {
          field_info_group {
            field_info_block {
              id
            }
          }
          background_01 {
            url
          }
          background_02 {
            url
          }
        }
      }
      allPrismicFieldinfoblock(sort: {order: DESC, fields: data___info_date}) {
        edges {
          node {
            prismicId
            data {
              info_content
              info_date
			  info_title
			  info_link {
				text
			  }
            }
          }
        }
      }
    }`);
	const allInfoBlocks = data.allPrismicFieldinfoblock.edges;
	const prismicFieldinfopage = data.prismicFieldinfopage;
	const background_01 = prismicFieldinfopage.data.background_01;
	const background_02 = prismicFieldinfopage.data.background_02;
	const neededInfoBlockIDs = prismicFieldinfopage.data.field_info_group.map((item) => { return item.field_info_block.id; });

	const infoBlocks = neededInfoBlockIDs.map((id) => {
		return allInfoBlocks.filter((block) => {
			return block.node.prismicId === id;
		})[0].node.data;
	});
	let lastInfoCard = null;
	if (infoBlocks.length % 2 === 1){
		const lastInfoBlock = infoBlocks.pop();
		lastInfoCard = FieldInfoCard(lastInfoBlock, STYLES.SPAN, background_01.url);
	}

	const styleMap = [STYLES.DEFAULT, STYLES.ALTERNATE, STYLES.ALTERNATE, STYLES.DEFAULT];
	const infoCards = infoBlocks.map((infoBlock, index) => {
		const style = styleMap[index % styleMap.length];
		const decorationImg = style === 0 ? background_02.url : background_01.url;
		return FieldInfoCard(infoBlock, style, decorationImg, index);
	});

	return <Container className='field-info-body-container'>
		<div className='field-info-columns'>
			{infoCards}
			{lastInfoCard}
		</div>
	</Container>;
};

export default FieldInfoBody;