import { Router} from 'express';
import {createCategoryController} from './../modules/cars/UseCases/CreateCategory'
import { listCategoriesController} from './../modules/cars/UseCases/ListCategories'

const categoriesRoutes = Router();


categoriesRoutes.post("/", (request,response) => {
    return createCategoryController.headle(request,response); 

});

categoriesRoutes.get("/",(request,response)=>{
   return listCategoriesController.headle(request,response);
})

export {categoriesRoutes};
