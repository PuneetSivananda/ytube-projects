import * as express from 'express';
import { QuestionController } from '../../controllers/QuestionController';


export class QuestionRoutes {
    public static configureRoutes() {
        const controller = new QuestionController;
        var router = express.Router();
        router.post("/questions", controller.findById);
        return router;
    }
}
