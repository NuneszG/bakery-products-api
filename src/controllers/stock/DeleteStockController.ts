import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteStockService } from "../../services/stock/DeleteStockService";
import { StockId } from "../../utils/StockInterface";



export class DeleteStockController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        try {
            const { id } = request.query as StockId;

            if(!id) {
                return reply.status(400).send("Por favor, insira o id do estoque corretamente para ocorrer a remoção.");
            };

            const Stock = new DeleteStockService();
            const DeletedStock = await Stock.Execute({ id });

            reply.send(DeletedStock);

        } catch (err) {

            console.log(err);
            return reply.status(500).send({ err: "Erro interno no servidor." });

        };
    };
};

