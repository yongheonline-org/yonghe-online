import React from 'react';
import FieldsInfoBody from './fields-info-body/fields-info-body';
import FieldsInfoTop from './fields-info-top/fields-info-top';
import Footer from '../Footer/footer';

const FieldsInfoLayout = () => {
	return <React.Fragment>
		<FieldsInfoTop/>
		<FieldsInfoBody/>
		<Footer/>
	</React.Fragment>;
};
export default FieldsInfoLayout;