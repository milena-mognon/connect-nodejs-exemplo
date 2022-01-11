import { Router } from "express";
import clientsRoutes from "../../../../modules/clients/infra/http/routes/clients.routes";

const routes = Router();

routes.use("/clientes", clientsRoutes);

export default routes;
