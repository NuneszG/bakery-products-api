import { FastifyRequest, FastifyReply } from "fastify";
import { GetAllStocksService } from "../../services/stock/AllStocksService";



export class AllStocksController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        try {

            const Stock = new GetAllStocksService();
            const AllStocks = await Stock.Execute();

            reply.send(AllStocks);

        } catch (err) {

            console.log("Nenhum estoque foi encontrado", err);
            return reply.status(404).send("Não foi possivel encontrar nenhum estoque.");
        };

    };
};