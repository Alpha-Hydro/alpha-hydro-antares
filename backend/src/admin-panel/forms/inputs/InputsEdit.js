import React from "react";
import {Input} from "react-bootstrap/lib";

export default class InputsEdit extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			metaTitle : props.data.metaTitle,
			metaDescription: props.data.metaDescription,
			metaKeywords: props.data.metaKeywords
		}
	}

	handleChange(key){
		return (e) => {
			var data = {};
			data[key]	= e.target.value;
			this.setState(data);
		};
	}

	render(){
		return (
			<div>
				<Input type="text" label="meta Title" placeholder="Enter meta Title"
							 name="metaTitle"
							 value={this.state.metaTitle}
							 onChange={this.handleChange('metaTitle').bind(this)}
				/>
				<Input type="textarea" label="meta Description" placeholder="Enter meta Description"
							 name="metaDescription"
							 value={this.state.metaDescription}
							 onChange={this.handleChange('metaDescription').bind(this)}

				/>
				<Input type="text" label="meta Keywords" placeholder="Enter meta Keywords"
							 name="metaKeywords"
							 value={this.state.metaKeywords}
							 onChange={this.handleChange('metaKeywords').bind(this)}
				/>
			</div>
		);
	}

}