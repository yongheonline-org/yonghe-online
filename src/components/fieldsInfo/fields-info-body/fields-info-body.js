import React from 'react';
import Container from 'react-bootstrap/Container';
import {useStaticQuery, graphql} from 'gatsby';

import './fields-info-body.scss';

const FieldInfoCard = (infoBlockData, style, imgURL) => {
	const styleName = 'style-' + style;
	const card = <div className='info-card'>
		<div className='info-title'>{infoBlockData.info_title}</div>
		<div className='info-date'>{infoBlockData.info_date}</div>
		<div className='info-content'>{infoBlockData.info_content}</div>
	</div>;
	const image = <div className='info-card-decoration'>
		<img src={imgURL}/>
	</div>;
	let cardContent;
	if(style === 0){
		cardContent = <React.Fragment>
			{card}
			{image}
		</React.Fragment>;
	}else if(style === 1){
		cardContent = <React.Fragment>
			{image}
			{card}
		</React.Fragment>;
	}
	return <div className={`field-info-card ${styleName}`}>
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
      allPrismicFieldinfoblock {
        edges {
          node {
            prismicId
            data {
              info_content
              info_date
              info_title
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

	const infoCards = neededInfoBlockIDs.map((id, index) => {
		const infoBlockData = allInfoBlocks.filter((block) => {
			return block.node.prismicId === id;
		})[0].node.data;
		const style = index % 2;
		const decorationImg = style === 0 ? background_02.url : background_01.url;
		return FieldInfoCard(infoBlockData, style, decorationImg);
	});

	return <Container className='field-info-body-container'>
		<div className='field-info-columns'>
			{infoCards}
		</div>
	</Container>;
};

export default FieldInfoBody;