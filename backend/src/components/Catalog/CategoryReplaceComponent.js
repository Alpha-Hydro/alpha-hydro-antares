import React from "react";
import {Button, Glyphicon, Modal, ListGroup, ListGroupItem, Row, Col, Badge} from "react-bootstrap/lib";

import categoryHelpers from "../../utils/getDataHelper"

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
					parentId: this.props.currentCategory.parentId,
					selectedCategory: ''
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

	parentCategory() {
		return (
			(this.state.parentId != 0)
				?<ListGroupItem onClick={this.returnParentCategory.bind(this)}>
						<Row>
							<Col xs={1}>
								<Glyphicon glyph="level-up"/>
							</Col>
							<Col xs={11}>
								...
							</Col>
						</Row>
					</ListGroupItem>
				:<ListGroupItem >
					<Row>
						<Col xs={1}>
							<input
								type="radio"
								name="catalogCategory"
								defaultChecked=""
								id="0"
								onClick={this.selectRootCategory.bind(this)}
							/>
						</Col>
						<Col xs={11}>
							Нет категории (В корне каталога)
						</Col>
					</Row>
				</ListGroupItem>
		);
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
						<ListGroup>
							{this.parentCategory()}
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
