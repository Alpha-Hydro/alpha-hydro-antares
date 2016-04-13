import React from "react";
import {Modal, Button, Glyphicon, Table} from "react-bootstrap/lib";

import ModificationTableColumn from "./ModificationTableColumn";
import ModificationProperty from "./ModificationProperty";
import ModificationNewProperty from "./ModificationNewProperty";

export default class ModificationHeadTable extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			showModal: false
		}
	}

	columnName() {
		return this.props.columns.map(function (column, i) {
			return <ModificationTableColumn
				key={i}
				column={column} />
		});
	}

	modificationProperties() {
		const self = this;
		return this.props.columns.map(function (property, i) {
			return <ModificationProperty
				key={i}
				index={i}
				property={property}
				{...self.props}	/>
		});
	}

	close() {
		this.setState({ showModal: false });
	}

	open() {
		this.setState({ showModal: true });
	}

	render() {
		return (
			<tr>
				<th>№№/пп</th>
				<th>Наименование</th>
				{this.columnName()}
				<th>
					<Button bsStyle="success" onClick={this.open.bind(this)}>
						<Glyphicon glyph="pencil"/>
					</Button>
					<Modal
						show={this.state.showModal}
						onHide={this.close.bind(this)}>
						<Modal.Header closeButton>
							<Modal.Title>Свойства товарных модификаций</Modal.Title>
						</Modal.Header>

						<Modal.Body>
							<Table className="mb0">
								<thead>
									<tr>
										<th className="col-sm-2">№№/пп</th>
										<th>Наименование</th>
										<th className="col-sm-2">Действие</th>
									</tr>
								</thead>
								<tbody>
									{this.modificationProperties()}
								</tbody>
								<tfoot>
									<ModificationNewProperty
										productId={this.props.productId}
										handleAdd={this.props.handleAdd}
									/>
								</tfoot>
							</Table>
						</Modal.Body>

						<Modal.Footer>
							<Button onClick={this.close.bind(this)}>Отмена</Button>
							<Button bsStyle="success" onClick={this.close.bind(this)}>Сохранить изменения</Button>
						</Modal.Footer>
					</Modal>
				</th>
			</tr>
		);
	}
}
