import React from 'react';
import Container from 'react-bootstrap/Container';
import FieldsInfoBlock from '../../common/fieldsInfoBlock/fieldsInfoBlock';
import TwoColumns from '../../common/two-columns/two-columns';
import {useStaticQuery, graphql} from 'gatsby';

const FieldsInfoBody = () => {
	const data = useStaticQuery(graphql`
    {
      testFieldsInfoJson {
        fiedls_info_date
        fields_info_content
        fields_info_title
        header_content
        header_title
      }
      imageSharp(fluid: {originalName: {eq: "gatsby-icon.png"}}) {
        fluid(trim: 2.5) {
          base64
		  tracedSVG
		  src
          srcWebp
          srcSetWebp
          originalImg
          originalName
        }
      }
    }
  `);
	const { fields_info_title: title, fiedls_info_date: date, fields_info_content: content} = data.testFieldsInfoJson;
	const { src: imageSrc } = data.imageSharp.fluid;
	return <Container className='fields-info-body'>
		<TwoColumns
			leftColChildren={
				<Container style={{
					display: 'flex',
					flexDirection: 'column'
				}}>
					<FieldsInfoBlock
						text={{ title: title, date: date, content: content}}
						imageSrc={imageSrc}
						imagePosition='left-bottom'
					/>
					<FieldsInfoBlock
						text={{ title: title, date: date, content: content}}
						imageSrc={imageSrc}
						imagePosition='top-middle'
					/>
				</Container>
			}
			rightColChildren={
				<Container>
					<FieldsInfoBlock
						text={{ title: title, date: date, content: content}}
						imageSrc={imageSrc}
						imagePosition='top-middle'
					/>
					<FieldsInfoBlock
						text={{ title: title, date: date, content: content}}
						imageSrc={imageSrc}
						imagePosition='left-bottom'
					/>
				</Container>
			}
		/>
		{/* <Row>
			<Col>
				<FieldsInfoBlock
					text={{ title: title, date: date, content: content}}
					imageSrc={imageSrc}
				/>
			</Col>
		</Row> */}
	</Container>;
};

export default FieldsInfoBody;