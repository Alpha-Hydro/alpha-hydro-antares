import React from "react";
import {Button, Glyphicon, Modal, ListGroup, ListGroupItem} from "react-bootstrap/lib";
import CategoryList from "./CategoryList";
import categoryHelpers from "../../helpers/categoryHelper"

export default class CategoryChangeButton extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			showModal: false,
			categories: [],
			currentId: '',
			parentId: props.currentCategory.parentId
		}
	}

	close() {
		this.setState({ showModal: false });
	}

	open() {
		this.setState({
			showModal: true,
			categories: this.props.categoryList,
			currentId: this.props.currentCategory.id
		});
	}

	changeCategoryList(id){
		var parentId = this.state.currentId;
		categoryHelpers.getGategoryList(id)
			.then(function(categoryList){
				this.setState({
					categories: categoryList,
					currentId: id,
					parentId: parentId
				});
			}.bind(this));
	}

	handleClick(e){
		console.log(this.state.parentId);
	}

	render(){
		const categories = this.state.categories;
		const categoriesList = categories.map((category, i) =>
			<CategoryList
				key={i}
				category={category}
				currentId={this.state.currentId}
				eventClick={this.changeCategoryList.bind(this)}/>);

		return(
			<div>
				<Button  bsStyle="primary" onClick={this.open.bind(this)}>
					<Glyphicon glyph="refresh" />
				</Button>
				<Modal show={this.state.showModal} onHide={this.close.bind(this)}>
					<Modal.Header closeButton>
						<Modal.Title>Parent category {this.state.parentId}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<ListGroup>
							<ListGroupItem onClick={this.handleClick.bind(this)}>Parent category {this.state.parentId}</ListGroupItem>
							{categoriesList}
						</ListGroup>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.close.bind(this)}>Close</Button>
						<Button onClick={this.close.bind(this)} bsStyle="primary">Save changes</Button>
					</Modal.Footer>
				</Modal>
			</div>
		)
	}
}
