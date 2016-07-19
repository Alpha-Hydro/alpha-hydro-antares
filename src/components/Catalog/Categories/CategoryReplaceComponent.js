import React from "react";

import Button from "react-bootstrap/lib/Button";
import Glyphicon from "react-bootstrap/lib/Glyphicon";
import Modal from "react-bootstrap/lib/Modal";
import ListGroup from "react-bootstrap/lib/ListGroup";

import categoryHelpers from "../../../utils/getDataHelper"
import CatalogParentCategoryReplaceItemList from "./CatalogParentCategoryReplaceItemList"
import CategoryRaplaceList from "./CategoryRaplaceList";

export default class CategoryReplaceComponent extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			showModal: false,
			currentCategory: '',
			parentId: '',
			categoryList: [],
			selectedCategory: ''
		};

		this.selectCategory = this.selectCategory.bind(this);
	}

	/*componentWillMount(){
		var parentId = (this.props.currentCategory.parentId)?this.props.currentCategory.parentId:'0';
		this.setState({
			currentCategory: this.props.currentCategory,
			parentId: parentId
		});
	}*/

	close() {
		this.setState({ showModal: false });
	}

	open() {
		var id = this.props.currentCategory.id;
		var parentId = this.props.currentCategory.parentId;

		categoryHelpers.getCurrentGategoryList(id)
			.then(function(categoryList){
				this.setState({
					categoryList: categoryList,
					parentId: parentId,
					showModal: true
				});
			}.bind(this));
	}

	subCategoriesList(id){
		this.setState({ showModal: false });

		categoryHelpers.getCategoryInfo(id)
			.then(function(categoryInfo){
				this.setState({
					currentCategory: categoryInfo,
					parentId: id
				});
			}.bind(this));

		categoryHelpers.getSubGategoryList(id)
			.then(function(categoryList){
				this.setState({
					categoryList: categoryList
				});
			}.bind(this));

		setTimeout(function() {
			this.setState({ showModal: true });
		}.bind(this), 500);
	}

	currentCategoriesList(id){
		this.setState({ showModal: false });

		categoryHelpers.getCategoryInfo(id)
			.then(function(categoryInfo){
				this.setState({
					currentCategory: categoryInfo,
					parentId: categoryInfo.parentId
				});
			}.bind(this));

		categoryHelpers.getCurrentGategoryList(id)
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
		this.currentCategoriesList(this.state.parentId);
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
				eventClick={this.subCategoriesList.bind(this)}
				handlerSelect={this.selectCategory.bind(this)}
				currentId={this.props.currentCategory.id}
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
						<ListGroup>
							<CatalogParentCategoryReplaceItemList
									returnParentCategory = {this.returnParentCategory.bind(this)}
									selectRootCategory = {this.selectRootCategory.bind(this)}
									parentId = {this.state.parentId}
							/>
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
