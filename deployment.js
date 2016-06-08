#!/usr/local/bin/node
var SimpleDeployment = require("codedeploy-scripts").SimpleDeployment;
var deployment = new SimpleDeployment({
    appName: "nodeappexample",
    nodePort: "5000",
    serverScript: "index.js",
    domains: "",
    buildFolder: "build",
    staticFolder: "static"
});
deployment.run();
