import { Prisma } from "../../prisma/prisma";


export class GetAllStocksService {
    async Execute() {

        try {
            const Stocks = await Prisma.stock.findMany();

            if(!Stocks || Stocks.length == 0) {
                throw Error("Nenhum estoque foi encontrado nessa busca.");
            };

            return Stocks;

        } catch (err) {
            
            console.error("Erro ao tentar buscar todos os estoques", err);
            throw Error("Não foi possivel tentar buscar todos os estoques. Por favor, tente novamente.");
        };

    };
};

