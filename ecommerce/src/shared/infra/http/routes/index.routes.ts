import { Router } from "express";
import clientsRoutes from "../../../../modules/clients/infra/http/routes/clients.routes";
import productsRoutes from "../../../../modules/products/infra/http/routes/products.routes";
import categoriesRoutes from "../../../../modules/categories/infra/http/routes/categories.routes";
import ordersRoutes from "../../../../modules/orders/infra/http/routes/orders.routes";

const routes = Router();

routes.use("/clientes", clientsRoutes);
routes.use("/produtos", productsRoutes);
routes.use("/categorias", categoriesRoutes);
routes.use("/pedidos", ordersRoutes);

export default routes;
