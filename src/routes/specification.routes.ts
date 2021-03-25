import {Router} from "express";
import { createSpecificationController } from "../modules/cars/UseCases/CreateSpecification";

const specificationRoutes = Router();


specificationRoutes.post('/',(request,response) => {
    return createSpecificationController.headle(request,response);
});

specificationRoutes.get('/',(request,response) => {
        
      //const listaspecification =  specificationRepository.list();  

      //return response.json(listaspecification)
});

export {specificationRoutes};