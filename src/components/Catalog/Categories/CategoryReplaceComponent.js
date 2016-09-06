import React from "react";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";

import ListGroup from "react-bootstrap/lib/ListGroup";
import Glyphicon from "react-bootstrap/lib/Glyphicon";

import categoryHelpers from "./../../../utils/getDataHelper";
import CategoryReplaceListItem from "./CategoryReplaceListItem";

export default class CategoryReplaceComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			showReplace: false,
			selectId: props.selectId,
			parentId: '',
			parentCategoryInfo: '',
			categoryList: []
		}
	}


	showModal(){
		this.setState({
			showReplace: true
		})
	}

	hideModal(){
		this.setState({
			showReplace: false
		})
	}

	cancelReplace(){
		this.hideModal();
		categoryHelpers.getCategoryInfo(this.props.selectId)
			.then(function(categoryInfo){
				this.setState({
					parentCategoryInfo: categoryInfo,
					parentId: this.props.selectId,
				});
			}.bind(this));

		categoryHelpers.getCurrentGategoryList(this.props.selectId)
			.then(function(categoryList){
				this.setState({
					categoryList: categoryList,
					selectId: this.props.selectId
				});
			}.bind(this));
	}

	componentWillMount(){
		console.log('LIST CATEGORY',this.props.selectId);

		categoryHelpers.getCategoryInfo(this.props.selectId)
			.then(function(categoryInfo){
				this.setState({
					parentCategoryInfo: categoryInfo,
					parentId: this.props.selectId,
				});
			}.bind(this));

		categoryHelpers.getCurrentGategoryList(this.props.selectId)
			.then(function(categoryList){
				this.setState({
					categoryList: categoryList
				});
			}.bind(this));
	}

	levelUpCategory(id){
		this.hideModal();

		categoryHelpers.getCategoryInfo(id)
			.then(function(categoryInfo){
				this.setState({
					parentCategoryInfo: categoryInfo,
					parentId: categoryInfo.parentId
				});
			}.bind(this));

		categoryHelpers.getCurrentGategoryList(id)
			.then(function(categoryList){
				this.setState({
					categoryList: categoryList
				});
			}.bind(this));

		setTimeout(() =>{
			this.showModal();
		}, 800);
	}

	replaceCategory(id){
		this.hideModal();

		categoryHelpers.getCategoryInfo(id)
			.then(function(categoryInfo){
				this.setState({
					parentCategoryInfo: categoryInfo,
					parentId: id
				});
			}.bind(this));

		categoryHelpers.getSubGategoryList(id)
			.then(function(categoryList){
				this.setState({
					categoryList: categoryList
				});
			}.bind(this));

		setTimeout(() =>{
			this.showModal();
		}, 800);
	}

	selectCategory(id){
		this.setState({
			selectId: id
		})
	}

	saveSelect(){
		this.props.selectCategory(this.state.selectId);
		this.hideModal();
	}

	render(){
		const headerListGroup = () => {
			switch (false) {
				case this.state.parentId != 0 && this.state.parentCategoryInfo.id != 0:
					return 'Каталог';
					break;
				default: return '... '; // + this.state.parentCategoryInfo.breadcrumbs;
			}
		};

		const listgroupInstance = this.state.categoryList.map((category) =>
			<CategoryReplaceListItem
				key={category.id}
				id={category.id}
				select={this.selectCategory.bind(this)}
				replace={this.replaceCategory.bind(this)}
				active={category.id == this.props.selectId}
				badge={category.countSubCategories}
			>
				{category.name}
			</CategoryReplaceListItem>
		);

		return(
			<div>
				<Button  bsStyle="primary" onClick={this.showModal.bind(this)}>
					<Glyphicon glyph="refresh" />
				</Button>
				<Modal
					show={this.state.showReplace}
					onHide={this.cancelReplace.bind(this)}>
					<Modal.Header closeButton>
						<Modal.Title>Выбор категории</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<ListGroup componentClass="ul">
							<CategoryReplaceListItem
								select={this.selectCategory.bind(this)}
								replace={this.replaceCategory.bind(this)}
								levelUp={this.state.parentId != 0 && this.state.parentCategoryInfo.id != 0}
								badge={this.state.parentId != 0 && this.state.parentCategoryInfo.id != 0}
								active={this.state.parentId == 0 && this.props.selectId == 0}
								id={(this.state.parentCategoryInfo.parentId)?this.state.parentCategoryInfo.parentId:0}>
								<em>{headerListGroup()}</em>
							</CategoryReplaceListItem>
							{listgroupInstance}
						</ListGroup>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.cancelReplace.bind(this)}>Отмена</Button>
						<Button bsStyle="primary" onClick={this.saveSelect.bind(this)}>Выбрать</Button>
					</Modal.Footer>
				</Modal>
			</div>

		);
	}
}