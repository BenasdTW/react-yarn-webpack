import * as React from 'react';
import * as ReactDOM from 'react-dom';

// const scss1 = require("../css/style.scss");
import { Test } from "./paragraph";
import { Hello } from "./hello";
import "../css/style.scss";

ReactDOM.render(<div><Test /><Hello compiler="webpack" framework="React" /></div>, document.getElementById('root'));