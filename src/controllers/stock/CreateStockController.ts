import { FastifyRequest, FastifyReply } from "fastify";
import { StockBody } from "../../utils/StockInterface";
import { CreateStockService } from "../../services/stock/CreateStockService";



export class CreateStockController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        try {

            const { name, type } = request.body as StockBody;

            if(!name || !type) {
                return reply.status(401).send("Requisição inválida. Preencha todos os campos e reenvie novamente.");
            }

            const Stock = new CreateStockService();
            const NewStock = await Stock.Execute({ name, type });
        
            return reply.status(201).send(`${NewStock.name} do tipo ${type }, foi criado com sucesso.`);

        } catch(err) {

            console.log(err)
            return reply.send(500).send({ err: "Erro interno no servidor."});
            
        };
   
    };
};

