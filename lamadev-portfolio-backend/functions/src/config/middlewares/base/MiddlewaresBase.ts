import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import { BaseRoutes } from "../../routes/base/BaseRoutes";

class MiddlewaresBase {
    static get configuration() {
        var app = express();
        app.use(bodyParser.json());
        app.use(logger('dev'));
        app.use(BaseRoutes.configureBaseRoutes);
        return app;
    }
}
Object.seal(MiddlewaresBase);
export default MiddlewaresBase;