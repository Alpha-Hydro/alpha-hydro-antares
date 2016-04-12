import React from "react";
import Input from "react-bootstrap/lib/Input";

export default class ModificationBodyTableRowTd extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			showInput: false
		}
	}
	
	onBlur(){
		this.setState({showInput: false})
	}

	onFocus(){
		this.setState({showInput:true}, function() {
			this.refs.input.focus();
		});
	}

	render(){
		return(
			<td className={this.props.classTd}>
				<div className="form-group form-group-sm mb0">
					{this.state.showInput ?
						<input
							ref="input"
							className="form-control"
							type="text"
							value={this.props.value}
							onChange={this.props.onChange.bind(this)}
							onBlur={this.onBlur.bind(this)}
						/> :
						<span onClick={this.onFocus.bind(this)}>{this.props.value}</span>
					}
				</div>
			</td>
		);
	}
}