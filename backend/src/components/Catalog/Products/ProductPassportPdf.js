import React from "react";

import Button from "react-bootstrap/lib/Button";

export default class ProductPassportPdf extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return(
			<button className="btn btn-link alpha-icon-print">Паспорт</button>
		)
	}
}