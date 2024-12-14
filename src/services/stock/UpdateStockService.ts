import { Prisma } from "../../prisma/prisma";
import { StockInteger } from "../../utils/StockInterface";



export class UpdateStockService {
    async Execute({ id, name, type }: StockInteger) {
        
        const Stock = await Prisma.stock.findUnique({
            where: {
                id: id
            }
        });

        const StockUpdated = await Prisma.stock.update({
            where: {
                id: Stock?.id
            },
            data: {
                name,
                type
            }
        });

        if(!StockUpdated) {
            throw Error("Não foi informado os dados que serão atualizados, tente novamente.");
        };

        return StockUpdated;

    };
};

