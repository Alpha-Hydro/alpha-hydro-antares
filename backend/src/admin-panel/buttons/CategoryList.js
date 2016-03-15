import React from "react";
import {ListGroupItem, Input} from "react-bootstrap/lib";

export default class CategoryList extends React.Component {
	constructor(props){
		super(props);
	}

	handleClick(e){
		this.props.eventClick(this.props.category.id);
	}

	render(){
		const category = this.props.category;
		const label = (category.countSubCategories != 0)
			? React.DOM.a( {
					null,
					onClick: this.handleClick.bind(this)
				}, category.name + ' (' + category.countSubCategories + ')' )
			: category.name;

		return(

				<ListGroupItem>
					<Input
						groupClassName="mtb0"
						wrapperClassName="mtb0"
						type="radio"
						name="catalogCategory"
						label={label}
						defaultChecked={(category.id != this.props.currentId)?"":"checked"}
						id={category.id}
					/>
				</ListGroupItem>

		)
	}
}