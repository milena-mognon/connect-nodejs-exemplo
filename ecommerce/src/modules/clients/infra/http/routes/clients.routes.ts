import { Router } from "express";
import ClientsController from "../controllers/ClientsController";

const routes = Router();

routes.post("/", ClientsController.create);

export default routes;
