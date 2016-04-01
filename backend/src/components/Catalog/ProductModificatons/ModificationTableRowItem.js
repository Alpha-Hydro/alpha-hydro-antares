import React from "react";
import Input from "react-bootstrap/lib/Input";

export default class ModificationTableRowItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			sku: props.item.sku,
			order: props.item.order
		}
	}

	handleChange(key){
		return (e) => {
			var data = {};
			data[key]	= e.target.value;
			this.setState(data);
		};
	}

	render(){
		return(
			<tr>
				<td className="col-sm-1">
					<Input
						type="text"
						groupClassName="mb0"
						bsSize="small"
						value={this.state.order}
						onChange={this.handleChange('order').bind(this)}/>
				</td>
				<td>
					<Input
						type="text"
						groupClassName="mb0"
						className="text-center"
						value={this.state.sku}
						onChange={this.handleChange('sku').bind(this)}/>
				</td>
			</tr>
		)
	}
}