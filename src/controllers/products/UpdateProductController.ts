import { FastifyRequest, FastifyReply } from "fastify";
import { ProductUpdated } from "../../utils/ProductInterface";
import { UpdateProductService } from "../../services/product/UpdateProductService";



export class UpdateProductController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        try {
            const { id } = request.query as ProductUpdated;
            const { name, price, data, restant } = request.body as ProductUpdated;

            if(!name || !price || !data || !restant || !id) {
                return reply.status(400).send("É necessário passar os dados corretamente para ocorrer a atualização.");
            };

            const Product = new UpdateProductService();
            const ProductUpdated = await Product.Execute({ id, name, price, data, restant });

            reply.send(ProductUpdated);
            
        } catch (err) {

            console.log(err);
            return reply.status(500).send({ err: "Erro interno no servidor." });

        };
    };
};

