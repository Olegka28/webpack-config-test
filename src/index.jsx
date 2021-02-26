import React from "react";
import { render } from "react-dom";

import Post from "@models/Post";
import json from "@/assets/json";
import xml from "@/assets/data.xml";
import csv from "@/assets/data.csv";
import "./babel.js";
import WebpackLogo from "@/assets/webpack-logo";

import "@/styles/styles";
import "@/styles/less.less";
import "@/styles/scss.scss";

const post = new Post("Webpack Hello", WebpackLogo);

const App = () => {
  return (
    <div className="container">
      <h1>Webpack Hello</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ipsa
        assumenda nesciunt et voluptate nostrum quam consequatur, animi veniam
        quis odit repellat in ducimus quaerat, temporibus quibusdam suscipit.
        Impedit, velit?
      </p>

      <hr />

      <div className="logo" />

      <hr />

      <div className="box">
        <h2>Less</h2>
      </div>

      <div className="card">
        <h2>Sass</h2>
      </div>
    </div>
  );
};

render(<App />, document.getElementById("app"));

// console.log(post.toString());

// console.log("JSON:", json);
// console.log("XML:", xml);
// console.log("CSV:", csv);
