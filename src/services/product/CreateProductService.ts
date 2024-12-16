import { Prisma } from "../../prisma/prisma";
import { ProductBody } from "../../utils/ProductInterface";



export class CreateProductService {
    async Execute({ name, price, restant, type, data, stockType }: ProductBody) {

        const Product = await Prisma.products.create({
            data: {
                name, 
                type,
                restant,
                price, 
                data,
                stockType
            }
        });

        return Product;
    };
};

