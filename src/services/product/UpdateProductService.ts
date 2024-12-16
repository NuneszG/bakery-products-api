import { Prisma } from "../../prisma/prisma";
import { ProductUpdated } from "../../utils/ProductInterface";



export class UpdateProductService {
    async Execute({ id, name, price, data, restant }: ProductUpdated) {

        const Product = await Prisma.products.findFirst({
            where: {
                id: id
            }
        });

        const ProductUpdated = await Prisma.products.update({
            where: {
                id: Product?.id
            },
            data: {
                name,
                price,
                data,
                restant
            }
        });

        return ProductUpdated;
    };
};

