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
import {BrowserRouter} from "react-router-dom";

import App from "./App.jsx";


function InitRoutes() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};


export default InitRoutes;
