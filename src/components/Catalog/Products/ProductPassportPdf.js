import React from "react";

import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";
import Checkbox from "react-bootstrap/lib/Checkbox";
import Table from "react-bootstrap/lib/Table";

import ModificationTableColumn from "../ProductModificatons/ModificationTableColumn";

import dataHelpers from "../../../utils/getDataHelper";

export default class ProductPassportPdf extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			show: false,
			checked: false,
			columns: [],
			rows:[]
		}
	}

	componentDidMount(){
		dataHelpers.getCategoryProductModification(this.props.dataItem.id)
			.then(function (data) {
				this.setState({
					columns: data.columns,
					rows: data.rows
				})
			}.bind(this));
	}

	open(){
		this.setState({ show: true });
	}

	close() {
		this.setState({ show: false });
	}

	checkAll(e){

		var checkboxes = [].slice.call(document.querySelectorAll("input[type='checkbox']"));
		checkboxes.map(function(c) {
			c.checked = e.target.checked;
		});
	}

	headTable(){
		return(
			<tr>
				<th><input type="checkbox" onClick={this.checkAll.bind(this)}/></th>
				<th>Наименование</th>
				{this.state.columns.map(function (column, i) {
					return <ModificationTableColumn
						key={i}
						column={column} />
				})}
			</tr>
		);
	}
	
	bodyTable(){
		return this.state.rows.map(function (row, i) {
			return <tr key={i}>
				<td><Checkbox name="modifications[]" value={row.item.id}/></td>
				<th>{row.item.sku}</th>
				{row.values.map(function(value, i){
					return <td key={i}>{value.value}</td>
				})}
			</tr>
		});
	}
	
	render(){
		return(
			<span>
				<a href="#"
					 className="alpha-icon-print"
					 onClick={this.open.bind(this)} >Паспорт</a>
				<Modal
					dialogClassName="w90"
					show={this.state.show}
					onHide={this.close.bind(this)}
				>
				<Modal.Header closeButton>
					<Modal.Title className="mtb1 h3">{this.props.dataItem.name+', '+this.props.dataItem.sku}</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<form id="print-passport" name="modification" method="post" encType="multipart/form-data" action={'/admin/products/passport/'+this.props.dataItem.id} target="_blank" rel="noopener">
						<Table striped bordered hover className="text-size-small text-center">
							<thead>
								{this.headTable()}
							</thead>
							<tbody>
								{this.bodyTable()}
							</tbody>
						</Table>
					</form>
				</Modal.Body>

				<Modal.Footer>
					<Button onClick={this.close.bind(this)}>Отмена</Button>
					<Button bsStyle="success" type="submit" form="print-passport">Создать паспорт</Button>
				</Modal.Footer>
			</Modal>
			</span>
		)
	}
}