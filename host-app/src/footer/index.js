import React from "react";
import ReactDOM from 'react-dom';
import MyFooter from "./MyFooter";


export default class Footer extends HTMLElement {

	connectedCallback() {
		this.root = this.attachShadow({ mode: 'open' });
		this.render();
	}

	disconnectedCallback() {
		ReactDOM.unmountComponentAtNode(this);
	}

	render() {
		ReactDOM.render(
			<MyFooter/>,
			this.root
		);
	}
}

customElements.define('my-footer', Footer);