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


function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then((
      { getCLS, getFID, getFCP, getLCP, getTTFB }
    ) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  };
};


export default reportWebVitals;
