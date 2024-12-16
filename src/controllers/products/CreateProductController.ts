import { FastifyRequest, FastifyReply } from "fastify";
import { CreateProductService } from "../../services/product/CreateProductService";
import { ProductBody } from "../../utils/ProductInterface";



export class CreateProductController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {

        try {
            const { name, price, restant, type, data, stockType } = request.body as ProductBody;

            if(!name || !price || !restant || !type || !data || !stockType) {
                return reply.status(400).send("Por favor, preencha todos os dados.");
            };

            const NewProduct = new CreateProductService();
            const Product = await NewProduct.Execute({ name, price, restant, type, data, stockType });

            return Product

        } catch(err) {
            
            console.log(err);
            return reply.status(500).send({ err: "Erro interno no servidor." });
        };
    };
};

