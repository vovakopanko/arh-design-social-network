import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import './index.css';

import ArhDesignApp from "./App";

ReactDOM.render(
          <ArhDesignApp />, document.getElementById('root'));
serviceWorker.unregister();
