import React from 'react';
import ReactDOM from 'react-dom';
import MyLateral from './MyLateral';

export default class Lateral extends HTMLElement {

  constructor() {
    super();
    this.root = this.attachShadow({mode: 'open'});
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this);
  }

  render() {
    ReactDOM.render(
      <MyLateral/>,
      this.root
    );
  }
}

if (!customElements.get('my-lateral')) {
  customElements.define('my-lateral', Lateral);
}
