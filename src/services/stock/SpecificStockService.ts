import { Prisma } from "../../prisma/prisma";
import { StockId } from "../../utils/StockInterface";



export class SpecificStockService {
    async Execute({ id }: StockId) {

        const SpecificStock = await Prisma.stock.findUnique({
            where: {
                id: id
            },
            include: {
                products: true
            }
        });

        if(!id) {
            throw Error("Por favor, reenvie o id do estoque novamente.");
        };

        return SpecificStock;
    };
};

