import React from "react";
import {Table, Input, ButtonInput, Button, Glyphicon} from "react-bootstrap/lib";
import ProductPropertyComponent from "./ProductProperties/ProductPropertyComponent";
import NewProductproperty from "./ProductProperties/NewProductProperty";

export default class  ProductProperties extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			properties: props.properties
		};
		this.dump = this.dump.bind(this);
	}

	dump (obj) {
		return <pre>{JSON.stringify(obj, null, ' ')}</pre>
	}

	onSave(data, index){
		console.log('onSave: ', data);
		var property = this.state.properties[index] = data;
		this.setState(property);
	}

	onDelete(index){
		console.log('onDelete: ', this.state.properties[index]);
		this.state.properties.splice(index, 1);
		this.setState({
			properties: this.state.properties
		});
	}

	onAdd(data){
		console.log('NEW PROPERTY', data);
		var properties = this.state.properties.concat(data);
		this.setState({
			properties: properties
		});
	}

	render(){
		const properties = this.state.properties;
		const propertiesList = properties.map(
			(property, i) => <ProductPropertyComponent
				key={i}
				index={i}
				property={property}
				onSave={this.onSave.bind(this)}
				onDelete={this.onDelete.bind(this)}/>
		);
		return (
				<Table>
					<thead>
						<tr>
							<th>№№/пп</th>
							<th>Наименование</th>
							<th>Значение</th>
							<th>Действия</th>
						</tr>
					</thead>
					<tbody>
						{propertiesList}
						<NewProductproperty newProperty={this.onAdd.bind(this)} productId={this.props.productId}/>
					</tbody>
				</Table>
		)
	}

}