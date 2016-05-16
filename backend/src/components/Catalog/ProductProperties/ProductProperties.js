import React from "react";
import Table from "react-bootstrap/lib/Table";

import ProductPropertyComponent from "./ProductPropertyComponent";
import NewProductProperty from "./NewProductProperty";

export default class  ProductProperties extends React.Component{
	constructor(props){
		super(props);
	}

	propertiesList(){
		const self = this;
		return this.props.properties.map(function (property, i) {
			return <ProductPropertyComponent
				key={i}
				index={i}
				property={property}
				{...self.props}
			/>
		});
	}

	render(){
		return (
				<Table className="mb0">
					<thead>
						<tr>
							<th>№№/пп</th>
							<th>Наименование</th>
							<th>Значение</th>
							<th>Действия</th>
						</tr>
					</thead>
					<tbody>
						{this.propertiesList()}
					</tbody>
					<tfoot>
						<NewProductProperty	{...this.props} />
					</tfoot>
				</Table>
		)
	}

}