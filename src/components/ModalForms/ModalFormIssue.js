/*
 * Created by Alpha-Hydro.
 *  @link http://www.alpha-hydro.com
 *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
 *  @copyright Copyright (c) 2016, Alpha-Hydro
 */

import React from "react";
import gitHubHelper from "../../utils/gitHubHelper";

import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";
import ControlLabel from "react-bootstrap/lib/ControlLabel";

export default class IssueModalForm extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title: '',
			body: '',
			responseMessage: ''
		}
	}

	componentWillMount(){
		this.setState({
			title: document.location.href
		});
	}

	componentDidMount(){
		document.onkeydown = (e)=>{
			if(e.altKey && e.keyCode == 113){
				this.setState({
					showModal: true
				});
			}
		}
	}

	handleChange(key){
		return (e) => {
			var data = {};
			data[key]	= e.target.value;
			this.setState(data);
		};
	}

	onSubmit(e){
		e.preventDefault();
		var data = {"title": this.state.title, "body": this.state.body, "labels": ["bug"]};
		this.props.handleSubmit(data);
	}

	render(){
		return(
			<form id="formModal" onSubmit={this.onSubmit.bind(this)}>
				<FormGroup>
					<ControlLabel>Заголовок (url страницы)</ControlLabel>
					<FormControl
						type="text"
						placeholder="Название ошибки"
						name="title"
						value={this.state.title}
						onChange={this.handleChange('title').bind(this)}
					/>
				</FormGroup>
				<FormGroup>
					<ControlLabel>Описание ошибки</ControlLabel>
					<FormControl
						componentClass="textarea"
						placeholder="Описание ошибки"
						name="body"
						value={this.state.body}
						onChange={this.handleChange('body').bind(this)}
						rows="8"
					/>
				</FormGroup>
			</form>
		);
	}
}