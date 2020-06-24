import "reflect-metadata";
import {useContainer, useExpressServer} from "routing-controllers";
import {Container} from "typedi";
import {HomeController} from "./controllers/home.controller";
import express, {Express} from "express";

useContainer(Container);

const app: Express = express();
useExpressServer(app, {
    controllers: [
        HomeController
    ]
});

export default app;