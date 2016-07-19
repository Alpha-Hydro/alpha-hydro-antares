import React from "react";

import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";
import Button from "react-bootstrap/lib/Button";

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
					<FormGroup className="mb0" bsSize="small">
						<FormControl
							type="text"
							value={this.state.item.order}
							onChange={this.onChange('order').bind(this)}
						/>
					</FormGroup>
				</td>
				<td>
					<FormGroup className="mb0" bsSize="small">
						<FormControl
							type="text"
							className="text-center"
							value={this.state.item.sku}
							onChange={this.onChange('sku').bind(this)}
						/>
					</FormGroup>
				</td>
				{newValuesTd}
				<td>
					<Button bsSize="small" bsStyle="primary" onClick={this.addNewModification.bind(this)}>Добавить</Button>
				</td>
			</tr>
		)
	}
}