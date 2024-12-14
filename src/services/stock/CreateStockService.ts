import { Prisma } from "../../prisma/prisma";
import { StockBody } from "../../utils/StockInterface";



export class CreateStockService {
    async Execute({ name, type }: StockBody) {

        const existingStock = await Prisma.stock.findUnique({
            where: {
                name,
                type
            }
        });

        if(existingStock) {
            throw Error("Nome ou tipo já existente, tente outra forma.");
        }

        const newStock = await Prisma.stock.create({
            data: {
                name,
                type
            }
        });

        return newStock;
    };
};

