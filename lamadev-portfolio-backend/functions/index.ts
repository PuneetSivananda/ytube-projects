import express from "express";
import Middlewares from "./config/middlewares/base/MiddlewaresBase";

var app = express();
var port = parseInt(process.env.PORT, 10) || 1900;
app.set("port", port);
app.use(Middlewares.configuration);

app.listen(port, () => {
    console.log("Node app is running at localhost:" + port);
});
