import { FastifyRequest, FastifyReply } from "fastify";
import { StockInteger } from "../../utils/StockInterface";
import { UpdateStockService } from "../../services/stock/UpdateStockService";



export class UpdateStrockController {
   async Handle(request: FastifyRequest, reply:FastifyReply) {

        try {
            const { id } = request.query as StockInteger;
            const { name, type } = request.body as StockInteger;

            if(!id || !name || !type) {
                return reply.status(400).send("É necessario que os dados sejam passados para ocorrer a atualização.");
            };

            const Stock = new UpdateStockService();
            const StockUpdated = await Stock.Execute({ id, name, type });

            reply.send(StockUpdated);

        } catch (err) {

            console.log(err);
            return reply.status(500).send({ err: "Erro interno no servidor."});

        };
   };
};

