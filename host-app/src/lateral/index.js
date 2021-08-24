import React from 'react';
import ReactDOM from 'react-dom';
import MyLateral from './MyLateral';

export default class Lateral extends HTMLElement {
  connectedCallback() {
    this.root = this.attachShadow({mode: 'open'});
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

customElements.define('my-lateral', Lateral);
