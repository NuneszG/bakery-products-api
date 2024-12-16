import { Prisma } from "../../prisma/prisma";
import { StockId } from "../../utils/StockInterface";



export class DeleteStockService {
    async Execute({ id }: StockId) {

        const Stock = await Prisma.stock.findUnique({
            where: {
                id: id
            }
        });

        const StockDeleted = await Prisma.stock.delete({
            where: {
                id: Stock?.id
            }
        });

        return `O estoque '${Stock?.name}' e seus produtos foram deletados.`;
    };
};

