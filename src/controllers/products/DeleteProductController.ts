import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteProductService } from "../../services/product/DeleteProductService";
import { ProductId } from "../../utils/ProductInterface";



export class DeleteProductController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        try {
            const { id } = request.query as ProductId;

            if(!id) {
                return reply.status(400).send("Por favor, informe o id do produto corretamente e tente novamente.");
            };

            const Product = new DeleteProductService();
            const ProductDeleted = await Product.Execute({ id });

            return ProductDeleted;

        } catch (err) {

            console.log(err);
            return reply.status(500).send({ err: "Erro interno no servidor." });

        };
    };
};

