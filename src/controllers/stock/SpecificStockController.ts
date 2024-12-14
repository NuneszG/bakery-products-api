import { FastifyRequest, FastifyReply } from "fastify";
import { StockId } from "../../utils/StockInterface";
import { SpecificStockService } from "../../services/stock/SpecificStockService";



export class SpecificStockController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        try {
            const { id } = request.query as StockId;

            if(!id) {
                return reply.status(400).send("Não foi possivel identificar o id do estoque, tente novamente.");
            };

            const Stock = new SpecificStockService();
            const NewStock = await Stock.Execute({ id });

            reply.send(NewStock);

        } catch (err) {

            console.error("Não foi informado o id do estoque:", err);
            return reply.send(500).send({ err: "Erro interno no servidor. " });
            
        };
    };
};

