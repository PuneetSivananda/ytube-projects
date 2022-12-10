import 'reflect-metadata';
import serverless from 'serverless-http';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Container } from 'inversify';
import { makeLoggerMiddleware } from 'inversify-logger-middleware';
import * as bodyParser from 'body-parser';
import helmet from 'helmet';

import TYPES from './constant/types';
// import { UserService } from './service/user';
// import { MongoDBClient } from './utils/mongodb/client';
// import './controller/home';
// import './controller/user';


// load everything needed to the Container
let container = new Container();

if (process.env.NODE_ENV === 'development') {
  let logger = makeLoggerMiddleware();
  container.applyMiddleware(logger);
}

// container.bind<MongoDBClient>(TYPES.MongoDBClient).to(MongoDBClient);
// container.bind<UserService>(TYPES.UserService).to(UserService);

// start the server
let server = new InversifyExpressServer(container);
server.setConfig((app) => {
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(helmet());
});

let app = server.build();


const handler = serverless(app)
export { handler }
