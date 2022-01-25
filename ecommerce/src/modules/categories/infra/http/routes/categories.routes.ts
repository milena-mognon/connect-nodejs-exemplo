import { Router } from "express";
import CategoriesController from "../controllers/CategoriesController";

const routes = Router();

routes.get("/:id", CategoriesController.findById);
routes.get("/", CategoriesController.findAll);

export default routes;
