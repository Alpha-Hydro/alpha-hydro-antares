/*
 * Created by Alpha-Hydro.
 *  @link http://www.alpha-hydro.com
 *  @author Vladimir Mikhaylov <admin@alpha-hydro.com>
 *  @copyright Copyright (c) 2016, Alpha-Hydro
 */

import React from "react";
import ModalFormIssue from "./ModalForms/ModalFormIssue";

export default class IssueModalComponent extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			showModal: false
		}
	}

	componentDidMount(){
		document.onkeydown = (e)=>{
			if(e.altKey && e.keyCode == 113){
				this.setState({
					showModal: true
				});
			}
		};
	}

	showModal() {
		this.setState({showModal: true});
	}

	hideModal() {
		this.setState({showModal: false});
	}

	render(){
		return(
			<ModalFormIssue
				{...this.props}
				show={this.state.showModal}
				hide={this.hideModal.bind(this)}
			/>
		);
	}
}
