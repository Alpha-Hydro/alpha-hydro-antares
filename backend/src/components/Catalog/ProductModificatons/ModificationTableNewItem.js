import React from "react";
import {Input, Button} from "react-bootstrap/lib";

import ModificationTableNewValue from "./ModificationTableNewValue";

export default class ModificationTableNewItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			item: {
				id: 'new',
				parentId: props.productId,
				sku: '',
				order: ''
			},
			values: ''
		};
		this.newItemValues = this.newItemValues.bind(this);
	}

	componentWillMount(){
		var newItemValues = this.newItemValues();
		this.setState({values: newItemValues});
	}

	newItemValues(){
		var params = this.props.columns;
		return params.map(function (param, i) {
			return {
				subprodictId: '',
				paramId: param.id,
				value: ''
			}
		});
	}

	handleChangeNewValue(value, index){
		this.state.values[index].value = value;
		this.setState(this.state);
	}

	onChange(key){
		return (e) => {
			this.state.item[key]	= e.target.value;
			this.setState(this.state);
		};
	}

	addNewModification(e){
		var newItem = this.state;
		if(newItem.item.sku && newItem.item.order){
			this.setState({
				item: {
					id: 'new',
					parentId: this.props.parentId,
					sku: '',
					order: ''
				},
				values: this.newItemValues()
			}, () => {this.props.handleAdd(newItem)});
		}
	}
	
	render(){
		const newValuesTd = this.state.values.map(
			(column, i) => <ModificationTableNewValue
				key={i}
				index={i}
				value={column.value}
				handleChange={this.handleChangeNewValue.bind(this)}/>
		);
		return(
			<tr className="active">
				<td className="col-sm-1">
					<Input
						type="text"
						groupClassName="mb0"
						bsSize="small"
						value={this.state.item.order}
						onChange={this.onChange('order').bind(this)}/>
				</td>
				<td>
					<Input
						type="text"
						groupClassName="mb0"
						bsSize="small"
						className="text-center"
						value={this.state.item.sku}
						onChange={this.onChange('sku').bind(this)}/>
				</td>
				{newValuesTd}
				<td>
					<Button bsSize="small" bsStyle="primary" onClick={this.addNewModification.bind(this)}>Добавить</Button>
				</td>
			</tr>
		)
	}
}