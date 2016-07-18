import React from "react";
import ReactDOM from "react-dom";

import IssueModalForm from "./components/IssueModalForm";

const issueModal = document.getElementById('issueModal');
issueModal && ReactDOM.render(<IssueModalForm/>, issueModal);