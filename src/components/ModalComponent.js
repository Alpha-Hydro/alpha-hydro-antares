import React from "react";

import ModalFormsEdit from "./ModalForms/ModalFormsEdit";
import ModalFormSeo from "./ModalForms/ModalFormSeo";
import ModalFormsAdd from "./ModalForms/ModalFormsAdd";
import ModalFormDelete from "./ModalForms/ModalFormDelete";
import ModalFormRecover from "./ModalForms/ModalFormRecover";
import ModalFormDisabled from "./ModalForms/ModalFormDisabled";
import ModalFormEnable from "./ModalForms/ModalFormEnable";
import ModalFormIssue from "./ModalForms/ModalFormIssue";

import gitHubHelper from "../utils/gitHubHelper";

export default class ModalComponent extends React.Component{

	render() {
		const modalForm = () => {
			switch (this.props.action) {
				case "edit":
					return <ModalFormsEdit {...this.props}/>;
					break;
				case "seo":
					return <ModalFormSeo {...this.props}/>;
					break;
				case "add":
					return <ModalFormsAdd {...this.props}/>;
					break;
				case "delete":
					return <ModalFormDelete {...this.props}/>;
					break;
				case "recover":
					return <ModalFormRecover {...this.props}/>;
					break;
				case "disabled":
					return <ModalFormDisabled {...this.props}/>;
					break;
				case "enabled":
					return <ModalFormEnable {...this.props}/>;
					break;
				case "issue":
					return <ModalFormIssue {...this.props}/>;
					break;
				default: return false;
			}
		};

		return modalForm();

	}
};

