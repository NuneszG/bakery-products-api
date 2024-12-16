import { Prisma } from "../../prisma/prisma";
import { ProductId } from "../../utils/ProductInterface";



export class DeleteProductService {
    async Execute({ id }: ProductId) {

        const Product = await Prisma.products.findUnique({
            where: {
                id: id
            }
        });

        const ProductDeleted = await Prisma.products.delete({
            where: {
                id: Product?.id
            }
        });

        return `${Product?.name} foi deletado do sistema.`;
    };
};

