import React from "react";
import {Button, Glyphicon, Modal, ListGroup, ListGroupItem, Row, Col, Badge} from "react-bootstrap/lib";

import categoryHelpers from "../../utils/getDataHelper"
import CatalogParentCategoryReplaceItemList from "./CatalogParentCategoryReplaceItemList"
import CategoryRaplaceList from "./CategoryRaplaceList";

export default class CategoryReplaceComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			showModal: false,
			currentCategory: '',
			currentId: '',
			parentId: '',
			categoryList: [],
			selectedCategory: ''
		};

		this.selectCategory = this.selectCategory.bind(this);
	}

	close() {
		this.setState({ showModal: false });
	}

	open() {
		var id = this.props.currentCategory.parentId;
		categoryHelpers.getGategoryList(id)
			.then(function(categoryList){
				this.setState({
					categoryList: categoryList,
					showModal: true,
					currentCategory: this.props.currentCategory,
					currentId: this.props.currentCategory.id,
					parentId: this.props.currentCategory.parentId
				});
			}.bind(this));
	}

	changeCategoryList(id){
		this.setState({ showModal: false });

		categoryHelpers.getCategoryInfo(id)
			.then(function(categoryInfo){
				this.setState({
					currentCategory: categoryInfo,
					currentId: categoryInfo.id,
					parentId: categoryInfo.parentId
				});
			}.bind(this));

		categoryHelpers.getGategoryList(id)
			.then(function(categoryList){
				this.setState({
					categoryList: categoryList
				});
			}.bind(this));

		setTimeout(function() {
			this.setState({ showModal: true });
		}.bind(this), 500);
	}

	returnParentCategory(){
		console.log(this.state.parentId);
		this.changeCategoryList(this.state.parentId);
	}

	selectCategory(id){
		this.setState({selectedCategory: id});
	}

	selectRootCategory(e){
		this.setState({selectedCategory: e.target.id});
	}

	handlerSave(){
		this.state.selectedCategory && this.props.selectCategory(this.state.selectedCategory);
		this.close();
	}

	render(){
		const categoryList = this.state.categoryList;
		const categoryListComponent = categoryList.map((category,i) =>
			<CategoryRaplaceList
				key={i}
				category={category}
				currentId={this.state.currentId}
				eventClick={this.changeCategoryList.bind(this)}
				handlerSelect={this.selectCategory.bind(this)}
			/>
		);

		return(
			<div>
				<Button  bsStyle="primary" onClick={this.open.bind(this)}>
					<Glyphicon glyph="refresh" />
				</Button>
				<Modal
					{...this.props}
					show={this.state.showModal}
					onHide={this.close.bind(this)}>
					<Modal.Header closeButton>
						<Modal.Title>Выбор категории</Modal.Title>
					</Modal.Header>
					<Modal.Body>
                        <p>{this.state.currentCategory.name} - CurrentId - {this.state.currentId}</p>
                        <p>ParentId - {this.state.parentId}</p>
						<ListGroup>
							<CatalogParentCategoryReplaceItemList
									returnParentCategory = {this.returnParentCategory.bind(this)}
									selectRootCategory = {this.selectRootCategory.bind(this)}
									currentId = {this.state.currentId} />
							{categoryListComponent}
						</ListGroup>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.close.bind(this)}>Отмена</Button>
						<Button onClick={this.handlerSave.bind(this)} bsStyle="primary">Выбрать</Button>
					</Modal.Footer>
				</Modal>
			</div>
		)
	}
}
