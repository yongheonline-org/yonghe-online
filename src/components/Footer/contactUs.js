/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
// import axios from 'axios';
import emailjs from 'emailjs-com';


class ContactForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '', 
			phone: '', 
			note: '',
			disabled: false,
			emailSent: null,
		};
	}

	onChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState({
			[name]: value
		});
	}

    onClick = (event) => {
    	event.preventDefault();
		
    	this.setState({
    		disabled: true
    	});

    	emailjs.sendForm('service_65pzryk', 'template_g2aillj', event.target, 'user_zC9lKTe2c8PYo63yQ2wDe')
    		.then(() => {
    			this.setState({
    				name:'',
    				phone:'',
    				note:'',
    				disabled:false,
    				emailSent:true
    			});
    		}, () => {
    			this.setState({
    				disabled:false,
    				emailSent:false
    			});
    		});
    }

    render() {
    	return (
    		<div className="card" style={{backgroundColor:'rgb(47,50,59)', border:'1px solid grey'}}>
    			<form className="formStyle" onSubmit={this.onClick}>
    				<div className="form-group row justify-content-center" style={{paddingTop:'0.5rem'}}>
    					<label htmlFor="name" className="col-3 col-sm-3" style={{backgroundColor:'rgb(47,50,59)', fontSize:'0.75rem', paddingLeft:'0px'}} >姓名</label>
    					<input onChange={this.onChange} value={this.state.name} className="col-7 col-sm-6 form-control text-white" style={{backgroundColor:'rgb(47,50,59)', fontSize:'0.75rem', height:'1rem', border:'none',  borderBottom: '1px solid grey', borderRadius:'0'}} id="name" name="name" placeholder="请输入姓名" required/>
    				</div>
    				<div className="form-group row justify-content-center">
    					<label className="col-3 col-sm-3" htmlFor="phone" style={{backgroundColor:'rgb(47,50,59)', fontSize:'0.75rem', paddingLeft:'0px'}} >电话</label>
    					<input onChange={this.onChange} value={this.state.phone} className="col-7 col-sm-6 form-control text-white" style={{backgroundColor:'rgb(47,50,59)', fontSize:'0.75rem', height:'1rem', border:'none', borderBottom:'1px solid grey',borderRadius:'0'}} id="phone" name="phone" placeholder="请输入电话" required/>
    				</div>
    				<div className="form-group row justify-content-center ">
    					<label className="col-3 col-sm-3" htmlFor="note" style={{backgroundColor:'rgb(47,50,59)', fontSize:'0.75rem', paddingLeft:'0px'}} >留言</label>
    					<input onChange={this.onChange} value={this.state.note} className="col-7 col-sm-6 form-control text-white" id="note" name="note" style={{backgroundColor:'rgb(47,50,59)', fontSize:'0.75rem', height:'1rem', border:'none', borderRadius:'0',borderBottom:'1px solid grey'}} rows="1" placeholder="请输入您的留言" required></input>
    				</div>
    				<div className="form-group row justify-content-center">
    					<button type="submit" disabled={this.state.disabled}  className="btn btn-primary mb-2 text-dark bg-light" style={{borderRadius:'20px', fontSize:'0.75rem', marginBottom:'0rem',padding: '0.1rem 1.25rem' }} >发送</button>
    					{this.state.emailSent === true && <p className="d-inline success-msg">发送成功</p>}
    					{this.state.emailSent === false && <p className="d-inline err-msg">发送失败</p>}
    				</div>
    			</form>
    		</div>
    	);
    }
}

export default ContactForm;