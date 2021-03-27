import fs from "fs";
import csvParse from "csv-parse";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IImportCategories {
    name:string;
    description:string;
}

class ImportCategoryUseCase {

    constructor( private  categoriesRepository: ICategoriesRepository ){
    }


    loadCategories(file:Express.Multer.File):Promise<IImportCategories[]>{
        return new Promise((resolve,reject)=>{
            const categories:IImportCategories[] = [];
            const stream = fs.createReadStream(file.path);
            
            const parseFile = csvParse({
                delimiter:";"
            });

            stream.pipe(parseFile);

            parseFile.on("data", async  (line)=>{
                const [name,description] = line;
                categories.push({
                    name,
                    description,
                })
            }).on("end",()=>{
                fs.promises.unlink(file.path);
                resolve(categories)
            });
        });
    }

    async execute(file: Express.Multer.File):Promise<void>{
        const categories = await this.loadCategories(file);        

        categories.map( async (category) =>{
            const {name, description} = category

            const categoryAlreadyExists = this.categoriesRepository.findByName(name);

            if(!categoryAlreadyExists){
                this.categoriesRepository.create({name,description})
            }

        })
    }

}

export {ImportCategoryUseCase}