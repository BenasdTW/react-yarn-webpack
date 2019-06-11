import * as React from 'react';
import * as ReactDOM from 'react-dom';

// const scss1 = require("../css/style.scss");
import { Test } from "./paragraph";
import "../css/style.scss";

let element = <h1>Hello everyone!</h1>

ReactDOM.render(<Test />, document.getElementById('root'));