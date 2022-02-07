import { Router } from "express";
import ClientsController from "../controllers/ClientsController";
import FindAllClientOrdersController from "../controllers/FindAllClientOrdersController";
import CreateClientValidation from "../middlewares/CreateClientValidation";

const routes = Router();

/**
 * Define todas as rotas de clientes
 */

routes.post("/", CreateClientValidation, ClientsController.create);

routes.get("/", ClientsController.list);

routes.get("/:id", ClientsController.findById);

routes.put("/:id", ClientsController.update);

routes.delete("/:id", ClientsController.delete);

// routes.get("/:id/pedidos", FindAllClientOrdersController.list);

export default routes;
