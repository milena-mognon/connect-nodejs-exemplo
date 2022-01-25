import { Request, Response } from "express";
import FindAllCategoriesService from "../../../services/FindAllCategoriesService";
import FindCategoryByIdService from "../../../services/FindCategoryByIdService";
import Category from "../../typeorm/entities/Category";

class CategoriesController {
  async findById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findCategoryById = new FindCategoryByIdService();

    const category = await findCategoryById.execute(Number(id));

    return response.json(category);
  }

  async findAll(request: Request, response: Response): Promise<Response> {
    const findAllCategories = new FindAllCategoriesService();

    const categories = await findAllCategories.execute();

    return response.json(categories);
  }
}

export default new CategoriesController();
