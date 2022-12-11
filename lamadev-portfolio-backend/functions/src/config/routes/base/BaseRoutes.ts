import { QuestionRoutes } from '../QuestionRoutes';
import express from "express"

export class BaseRoutes {
    public static configureBaseRoutes(app: express.Express): void {
        app.use("/", QuestionRoutes.configureRoutes());
    }
}
