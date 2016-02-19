import React from "react";
import Edit from "./Edit";
import Title from "./Title";

export default class TitleEdit extends React.Component {

	constructor(){
		super();
		this.state = {
			title: '',
			showEdit: false,
			showTitle: true
		}
	}

	changeTitle(title){
		this.setState({title})
	}

	toggleShowEdit(){
		this.setState({
			showEdit: true,
			showTitle: false
		})
	}

	toggleShowTitle(){
		this.setState({
			showTitle: true,
			showEdit: false
		})
	}

	render() {
		return (
			<div>
				<Title show = {this.state.showTitle} title = {this.props.title} toggleShowEdit = {this.toggleShowEdit.bind(this)}/>
				<Edit show = {this.state.showEdit} title = {this.props.title} toggleShowTitle = {this.toggleShowTitle.bind(this)} changeTitle = {this.changeTitle.bind(this)}/>
			</div>
		)
	}
}