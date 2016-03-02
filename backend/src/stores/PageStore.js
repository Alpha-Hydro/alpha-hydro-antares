import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

const pageData = dataPage.getData();

class PageStore extends EventEmitter {
	constructor(){
		super();
		this.pageData = pageData;
	}

	getData(){
		return this.pageData;
	}

	handleActions(action) {

	}
}

const pageStore = new PageStore();
dispatcher.register(pageStore.handleActions.bind(pageStore));

export default pageStore;