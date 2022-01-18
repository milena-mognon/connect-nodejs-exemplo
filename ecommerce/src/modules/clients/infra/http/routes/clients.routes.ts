import { Router } from "express";
import ClientsController from "../controllers/ClientsController";

const routes = Router();

/**
 * Define todas as rotas de clientes
 */

routes.post("/", ClientsController.create);

routes.get("/", ClientsController.list);

routes.get("/:id", ClientsController.findById);

routes.put("/:id", ClientsController.update);

export default routes;
