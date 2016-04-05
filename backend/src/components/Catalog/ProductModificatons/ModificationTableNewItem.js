import React from "react";
import {Input, ButtonGroup, Button} from "react-bootstrap/lib";

import ModificationTableNewValue from "./ModificationTableNewValue";
import propertyHelpers from "./../../../utils/productModificationHelper";

export default class ModificationTableNewItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			item: {
				id: 'new',
				parentId: props.parentId,
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
		console.log(newItem);
		this.state.values = this.newItemValues();
		this.setState(this.state);
	}
	
	render(){
		const newValuesTd = this.state.values.map(
			(column, i) => <ModificationTableNewValue
				key={i}
				index={i}
				handleChange={this.handleChangeNewValue.bind(this)}/>
		);
		return(
			<tr>
				<td className="col-sm-1">
					<Input
						type="text"
						groupClassName="mb0"
						bsSize="small"
						value={this.state.order}
						onChange={this.onChange('order').bind(this)}/>
				</td>
				<td>
					<Input
						type="text"
						groupClassName="mb0"
						bsSize="small"
						className="text-center"
						value={this.state.sku}
						onChange={this.onChange('sku').bind(this)}/>
				</td>
				{newValuesTd}
				<td>
					<ButtonGroup bsSize="small">
						<Button bsStyle="primary" onClick={this.addNewModification.bind(this)}>Добавить</Button>
					</ButtonGroup>
				</td>
			</tr>
		)
	}
}