import React from "react";
import Input from "react-bootstrap/lib/Input";

export default class ModificationTableColumn extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			id: props.column.id,
			name: props.column.name,
			order: props.column.order,
			productId: props.column.productId
		}
	}

	onChange(e){
		this.setState({
			name: e.target.value
		});
	}

	onBlur(){
		this.props.handleChange(this.state, this.props.index);
	}
	
	render(){
		return(
			<th>
				<Input
					type="text"
					groupClassName="mb0"
					className="text-center"
					value={this.state.name}
					onChange={this.onChange.bind(this)}
					onBlur={this.onBlur.bind(this)}
				/>
			</th>
		)
	}
}