import React from "react";

export default class PageData extends React.Component {
	constructor(){
		super();
		this.state = {
			data: {}
		};
		this.props = {
			data: {}
		};
	}

	componentDidMount() {
		this.loadDataPage();
	}

	loadDataPage() {
		$.ajax({
			url: window.location.href,
			data: {json:""},
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(window.location.href, status, err.toString());
			}.bind(this)
		});
	}

	render(){
		return (
			<script />
		);
	}
}