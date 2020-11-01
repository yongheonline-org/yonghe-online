import React from 'react';
import FieldsInfoBody from './fields-info-body/fields-info-body';
import FieldsInfoTop from './fields-info-top/fields-info-top';

const FieldsInfoLayout = () => {
	return <React.Fragment>
		<FieldsInfoTop/>
		<FieldsInfoBody/>
	</React.Fragment>;
};
export default FieldsInfoLayout;