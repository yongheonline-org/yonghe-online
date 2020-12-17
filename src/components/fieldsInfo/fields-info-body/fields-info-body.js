import React from 'react';
import Container from 'react-bootstrap/Container';
import {useStaticQuery, graphql} from 'gatsby';
import ReactMarkdown from 'react-markdown/with-html';
import { Link } from 'gatsby';

import './fields-info-body.scss';

const STYLES = {
	DEFAULT: 0,
	ALTERNATE: 1,
	SPAN: 2
};

const FieldInfoCard = (infoBlockData, style, imgSrc, index) => {
	const styleName = 'style-' + style;
	const card = <Link target="_blank" rel="noreferrer" to={infoBlockData.info_link.text}><div className='info-card'>
		<div className='info-title'>{infoBlockData.info_title}</div>
		<div className='info-date'>{infoBlockData.info_date}</div>
		<div className='info-content'>
			<ReactMarkdown source={infoBlockData.info_content} escapeHtml={false}></ReactMarkdown>
			<p className="info-link" >全文参见</p>
		</div>
	</div></Link>;
	const image = <div className='info-card-decoration'>
		<img src={imgSrc}/>
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
				<div className='info-content' style={{flexDirection:'column',alignItems: 'flex-start',marginTop:'auto',marginBottom:'auto'}}>
					<ReactMarkdown source={infoBlockData.info_content} escapeHtml={false}></ReactMarkdown>
					<a target="_blank" rel="noreferrer" className="info-link" href={infoBlockData.info_link.text}>全文参见</a>
				</div>
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
            localFile {
				childImageSharp {
				  fluid {
					...GatsbyImageSharpFluid
				  }
				}
			}
          }
          background_02 {
            localFile {
				childImageSharp {
				  fluid {
					...GatsbyImageSharpFluid
				  }
				}
			}
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
	const background_01 = prismicFieldinfopage.data.background_01.localFile.childImageSharp.fluid.src;
	const background_02 = prismicFieldinfopage.data.background_02.localFile.childImageSharp.fluid.src;
	const neededInfoBlockIDs = allInfoBlocks.map((item) => { return item.node.prismicId; });

	const infoBlocks = neededInfoBlockIDs.map((id) => {
		return allInfoBlocks.filter((block) => {
			return block.node.prismicId === id;
		})[0].node.data;
	});
	let lastInfoCard = null;
	if (infoBlocks.length % 2 === 1){
		const lastInfoBlock = infoBlocks.pop();
		lastInfoCard = FieldInfoCard(lastInfoBlock, STYLES.SPAN, background_01);
	}

	const styleMap = [STYLES.DEFAULT, STYLES.ALTERNATE, STYLES.ALTERNATE, STYLES.DEFAULT];
	const infoCards = infoBlocks.map((infoBlock, index) => {
		const style = styleMap[index % styleMap.length];
		const decorationImg = style === 0 ? background_02 : background_01;
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
