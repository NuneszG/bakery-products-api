import { Prisma } from "../../prisma/prisma";



export class GetProductsService {
    async Execute() {

        const Products = await Prisma.products.findMany();

        return Products 
    };
};

