import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AuthorQuiz from "./AuthorQuiz";
import * as serviceWorker from "./serviceWorker";

let model = {
  clicks: 0
};
function render() {
  ReactDOM.render(<AuthorQuiz />, document.getElementById("root"));
}
render();
serviceWorker.register();
