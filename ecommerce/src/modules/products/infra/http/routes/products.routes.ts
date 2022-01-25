import { Router } from "express";
import ProductController from "../controllers/ProductController";

const routes = Router();

routes.post("/", ProductController.create);
routes.get("/:id", ProductController.findById);

export default routes;
