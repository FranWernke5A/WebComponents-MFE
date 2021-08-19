import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

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
      <App/>,
      this.root
    );
  }
}

customElements.define('my-lateral', Lateral);
