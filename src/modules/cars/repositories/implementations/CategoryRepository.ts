import {Category} from '../../model/Category';
import { ICategoriesRepository, ICreateCategoryDTO } from '../ICategoriesRepository';


class CategoryRepository implements ICategoriesRepository {

    private categories:Category[];

    private static INSTANCE: CategoryRepository;

    private constructor(){
        this.categories = [];
    }

    public static getInstance():CategoryRepository{
        if(!CategoryRepository.INSTANCE){
            CategoryRepository.INSTANCE = new CategoryRepository();
        }

        return CategoryRepository.INSTANCE
    }

    create({name, description} : ICreateCategoryDTO) : void{

        const category = new Category();

        Object.assign(category,{
            name,
            description,
            created_at: new Date()
        });

        this.categories.push(category);

    }

    list():Category[] {
        return this.categories;
    }

    findByName(name:String):Category {
        const Category = this.categories.find(category => category.name == name);
        return Category;
    }

}

export {CategoryRepository};