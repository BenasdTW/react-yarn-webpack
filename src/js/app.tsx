import * as React from 'react';
import * as ReactDOM from 'react-dom';

// const scss1 = require("../css/style.scss");
import { Timer } from "./timer";
import { Hello } from "./hello";
import "../css/style.scss";

ReactDOM.render(<div><Hello compiler="webpack" framework="React" /><Timer /></div>, document.getElementById('root'));