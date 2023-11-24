import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Greeting } from './components/greeting';
import reactToWebComponent from "react-to-webcomponent";
import AutoCompleteInput from './components/autocomplete';


const WebGreeting = reactToWebComponent(Greeting, React, ReactDOM, {
  props: {
    name: "string",
    description: "string",
    colorMode: "string",
    buttonVariant: "string",
  }
})

customElements.define("web-greeting", WebGreeting)

const autocompleteInput = reactToWebComponent(
  AutoCompleteInput,
  React,
  ReactDOM,
  {     
    props: {},
  }
);
customElements.define("r2wc-autocomplete", autocompleteInput);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
