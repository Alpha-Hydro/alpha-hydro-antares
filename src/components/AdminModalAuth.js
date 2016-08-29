import React from "react";
import Modal from "react-bootstrap/lib/Modal";
import Button from "react-bootstrap/lib/Button";
import Form from "react-bootstrap/lib/Form";
import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";
import ControlLabel from "react-bootstrap/lib/ControlLabel";
import Col from "react-bootstrap/lib/Col";

import authAdmin from "../utils/authAdmin";

export default class AdminModalAuth extends React.Component{
    constructor(props){
			super(props);
			this.state = {
				showModal: false,
				username: '',
				password: ''
			}
    }

    componentWillMount(){
			document.getElementById('menu-authLogin').addEventListener('click', (ev) => {
				ev.preventDefault();
				this.showModal();
			})
		}

		handleChange(key){
			return (e) => {
				var data = {};
				data[key]	= e.target.value;
				this.setState(data);
			};
		}

		componentDidMount(){
			document.onkeydown = (e)=>{
				if(e.altKey && e.keyCode == 120){
					this.setState({
						showModal: true
					});
				}
			}
		}

    showModal() {
        this.setState({showModal: true});
    }

    hideModal() {
        this.setState({showModal: false});
    }

    sendForm(){
    	var data = {
				"username": this.state.username,
				"password": this.state.password
			};
    	authAdmin.login(data);
		}

    render(){
        return(
						<Modal show={this.state.showModal} onHide={this.hideModal.bind(this)}>
								<Modal.Header closeButton>
										<Modal.Title>Авторизация пользователя</Modal.Title>
								</Modal.Header>
								<Modal.Body>
									<Form horizontal>
										<FormGroup controlId="formHorizontalEmail">
											<Col componentClass={ControlLabel} sm={2}>
												Email
											</Col>
											<Col sm={9}>
												<FormControl
													type="email"
													placeholder="Email"
													name="username"
													onChange={this.handleChange('username').bind(this)}
												/>
											</Col>
										</FormGroup>
										<FormGroup controlId="formHorizontalPassword">
											<Col componentClass={ControlLabel} sm={2}>
												Password
											</Col>
											<Col sm={9}>
												<FormControl
													type="password"
													placeholder="Password"
													name="password"
													onChange={this.handleChange('password').bind(this)}
												/>
											</Col>
										</FormGroup>
									</Form>
								</Modal.Body>
								<Modal.Footer>
										<Button onClick={this.sendForm.bind(this)}>Вход</Button>
										<Button onClick={this.hideModal.bind(this)}>Close</Button>
								</Modal.Footer>
						</Modal>
        );
    }
}