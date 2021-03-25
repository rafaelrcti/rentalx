import { Specification } from "../../model/Specification";
import { ISpecificationRepository,ICreateSpecificationDTO } from "./../ISpecificationRepository";



class SpecificationRepository implements ISpecificationRepository {
    
    private Specifications:Specification[];

    constructor(){
        this.Specifications = [];
    }
    
    findByName(name: string):Specification {

        const specification = this.Specifications.find(Specification => Specification.name === name);

        return specification;
        
    }
    list(): Specification[] {
        return this.Specifications;
    }
    
    create({name, description}: ICreateSpecificationDTO): void {
        const specification = new Specification()

        Object.assign(specification,{
            name,
            description,
            created_at: new Date()
        });

        this.Specifications.push(specification);

    }

}

export {SpecificationRepository}