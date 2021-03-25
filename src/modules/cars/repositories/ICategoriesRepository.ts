import { Category } from "../model/Category";


interface ICreateCategoryDTO {
    name:String;
    description:String;
}

interface ICategoriesRepository{
    findByName(name:string):Category;
    list():Category[];
    create({name:description}:ICreateCategoryDTO):void;    

}

export {ICategoriesRepository,ICreateCategoryDTO}

