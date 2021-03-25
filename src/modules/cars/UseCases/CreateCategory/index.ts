import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { CreateCategotyController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const cateoriesRepository      = CategoryRepository.getInstance();
const createCategoryUseCase    = new CreateCategoryUseCase(cateoriesRepository);
const createCategoryController = new CreateCategotyController(createCategoryUseCase);

export {createCategoryController}


