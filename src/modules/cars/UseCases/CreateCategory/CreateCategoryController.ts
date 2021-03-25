import { Request,Response } from 'express'
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

class CreateCategotyController {

    constructor( private createCategoryUseCase: CreateCategoryUseCase ){

    }

    headle(request:Request,response:Response): Response{
        const {name, description} = request.body;
        
        const category = {
            name, 
            description
        }
    
        this.createCategoryUseCase.execute(category);
    
        return response.status(201).send();

    }

}

export {CreateCategotyController}