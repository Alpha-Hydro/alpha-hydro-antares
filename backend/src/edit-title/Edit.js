import React from "react";

export default class Edit extends React.Component {
    constructor(){
        super();
        this.state = {
            btnClass: "btn btn-success disabled"
        }
    }

	handleShow(){
		this.props.toggleShowTitle()
	}

	handleChange(e){
		const title = e.target.value;
		this.props.changeTitle(title);
		if(title.length !== 0){
				this.setState({btnClass: "btn btn-success"});
		}
		else{
				this.setState({btnClass: "btn btn-success disabled"});
		}
	}

	rowClass(){
		return !this.props.show ? "hidden" : "row edit-row";
	}

	render(){
		return(
			<div className={this.rowClass()}>
				<div className="col-md-7">
					<input type="text" className="form-control" onChange={this.handleChange.bind(this)} value={this.props.title}/>
				</div>
				<div className="col-md-1">
					<button type="button" className={this.state.btnClass} onClick={this.handleShow.bind(this)}>
						<span className="glyphicon glyphicon-floppy-disk" aria-hidden="true"/>
					</button>
				</div>
			</div>
		)
	}
}