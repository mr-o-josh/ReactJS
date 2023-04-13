/**
*!/usr/bin/env node
* -*- coding: utf-8 -*-
* ReactJS Boilerplate
*/


/**
* author: OTechCup
* copyright: Copyright 2023 - new Date().getFullYear(), Exfac Inc.
* credits: ["Mr. O"]
* version: process.env.REACTJS_BOILERPLATE_VERSION
* maintainer: OTechCup
* email: support@exfac.info
* status: process.env.REACTJS_BOILERPLATE_ENVIRONMENT_STATUS
*/


// import modules
import React from "react";
import ReactDOM from "react-dom/client";

import InitRoutes from "./InitRoutes.jsx";
import reportWebVitals from "./reportWebVitals.js";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <InitRoutes />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
