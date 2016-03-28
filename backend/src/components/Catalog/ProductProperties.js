import React from "react";
import {Table, Input, ButtonInput, Button, Glyphicon} from "react-bootstrap/lib";
import ProductPropertyComponent from "./ProductProperties/ProductPropertyComponent";
import NewProductproperty from "./ProductProperties/NewProductProperty";

export default class  ProductProperties extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			properties: props.properties,
			newPropertyInputs: 'hidden',
		};
		this.dump = this.dump.bind(this);
	}

	dump (obj) {
		return <pre>{JSON.stringify(obj, null, ' ')}</pre>
	}

	newPropertyInputs(){
		this.setState({newPropertyInputs: ''})
	}

	newProperty(data){
		console.log(data);
		var properties = this.state.properties.concat(data);
		this.setState({
			properties: properties,
			newPropertyInputs: 'hidden'
		});
	}

	render(){
		const properties = this.state.properties;
		const propertiesList = properties.map(
			(property, i) => <ProductPropertyComponent key={i} property={property}/>
		);
		return (
			<div>
				<Table>
					<tbody>
						{propertiesList}
						<NewProductproperty show={this.state.newPropertyInputs} newProperty={this.newProperty.bind(this)} productId={this.props.productId}/>
					</tbody>
				</Table>
				<Button onClick={this.newPropertyInputs.bind(this)} bsStyle="primary" bsSize="large">
					Добавить свойство
				</Button>
				{this.dump(this.state.properties)}
			</div>

		)
	}

}