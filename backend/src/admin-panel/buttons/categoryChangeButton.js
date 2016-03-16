import React from "react";
import {Button, Glyphicon, Modal, ListGroup, ListGroupItem, Row, Col, Badge} from "react-bootstrap/lib";
import CategoryList from "./CategoryList";
import categoryHelpers from "../../helpers/categoryHelper"

export default class CategoryChangeButton extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			showModal: false,
			curCategory: {},
			categories: [],
			currentId: '',
			parentId:''
		};
	}

	close() {
		this.setState({ showModal: false });
	}

	cancel() {
		this.selectCategory(this.state.parentId);
		this.close();
	}


	open() {
		this.setState({
			showModal: true,
			categories: this.props.categoryList,
			curCategory: this.props.currentCategory,
			currentId: this.props.currentCategory.id,
			parentId: (this.props.currentCategory.parentId != 0)?this.props.currentCategory.parentId:''
		});
	}

	changeCategoryList(id){
		this.setState({ showModal: false });

		categoryHelpers.getCategoryInfo(id)
			.then(function(categoryInfo){
				this.setState({
					curCategory: categoryInfo,
					currentId: categoryInfo.id,
					parentId: categoryInfo.parentId
				});
			}.bind(this));

		categoryHelpers.getGategoryList(id)
			.then(function(categoryList){
				this.setState({
					categories: categoryList
				});
			}.bind(this));

		setTimeout(function() {
			this.setState({ showModal: true });
		}.bind(this), 500);
	}

	returnParentCategory(){
		this.changeCategoryList(this.state.parentId);
	}

	selectCategory(id){
		this.props.selectCategory(id);
	}

	render(){
		const categories = this.state.categories;
		const categoriesList = categories.map((category,i) =>
			<CategoryList
				key={i}
				category={category}
				currentId={this.state.currentId}
				eventClick={this.changeCategoryList.bind(this)}
				handlerSelect={this.selectCategory.bind(this)}
			/>);

		const parentCategory = (() => {
			if(this.state.parentId)
			 return (
					<ListGroupItem	onClick={this.returnParentCategory.bind(this)}>
						<Row>
							<Col xs={1}>
									<Glyphicon glyph="level-up"/>
							</Col>
							<Col xs={11}>
								...
							</Col>
						</Row>
					</ListGroupItem>
			 )
		})();

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
							{parentCategory}
							{categoriesList}
						</ListGroup>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.close.bind(this)}>Отмена</Button>
						<Button onClick={this.close.bind(this)} bsStyle="primary">Сохранить</Button>
					</Modal.Footer>
				</Modal>
			</div>
		)
	}
}
