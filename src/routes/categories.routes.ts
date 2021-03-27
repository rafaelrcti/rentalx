import { Router} from 'express';
import multer from 'multer';
import {importCategoryController} from '../modules/cars/UseCases/ImportCategory';
import {createCategoryController} from './../modules/cars/UseCases/CreateCategory'
import {listCategoriesController} from './../modules/cars/UseCases/ListCategories'



const categoriesRoutes = Router();
const upload = multer({
    dest:'./tmp'
})

categoriesRoutes.post("/", (request,response) => {
    return createCategoryController.headle(request,response); 

});

categoriesRoutes.get("/",(request,response)=>{
   return listCategoriesController.headle(request,response);
})

categoriesRoutes.post("/import", upload.single("file"), (request, response)=> {
    return importCategoryController.headle(request,response);
})

export {categoriesRoutes};
