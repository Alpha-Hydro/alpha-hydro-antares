import React from "react";
import Edit from "./Edit";
import Title from "./Title";

export default class TitleEdit extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			title: props.title,
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
				<Title show = {this.state.showTitle} title = {this.state.title} toggleShowEdit = {this.toggleShowEdit.bind(this)}/>
				<Edit show = {this.state.showEdit} title = {this.state.title} toggleShowTitle = {this.toggleShowTitle.bind(this)} changeTitle = {this.changeTitle.bind(this)}/>
			</div>
		)
	}
}