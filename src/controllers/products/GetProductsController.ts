import { FastifyRequest, FastifyReply } from "fastify";
import { GetProductsService } from "../../services/product/GetProductsService";



export class GetProductsControllers {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        try {
            const Product = new GetProductsService();
            const ProductUpdated = await Product.Execute();

            reply.send(ProductUpdated);
            
        } catch (err) {

            console.log(err);
            return reply.status(500).send({ err: "Erro interno no servidor." });

        };
    };
};
