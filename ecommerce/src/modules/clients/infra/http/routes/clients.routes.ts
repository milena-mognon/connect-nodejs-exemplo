import { Router } from "express";
import ClientsController from "../controllers/ClientsController";

const routes = Router();

/**
 * Define todas as rotas de clientes
 */

routes.post("/", ClientsController.create);

export default routes;
