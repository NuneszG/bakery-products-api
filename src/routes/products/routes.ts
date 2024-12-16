import { FastifyRequest, FastifyInstance, FastifyReply, FastifyPluginOptions } from "fastify";

import { CreateProductController } from "../../controllers/products/CreateProductController";
import { UpdateProductController } from "../../controllers/products/UpdateProductController";
import { DeleteProductController } from "../../controllers/products/DeleteProductController";
import { GetProductsControllers } from "../../controllers/products/GetProductsController";

export default function ProductRoutes(fastify: FastifyInstance, plugin: FastifyPluginOptions) {

    fastify.post("/auth/products/create-product/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateProductController().Handle(request, reply);
    });

    fastify.put("/auth/products/update-product/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateProductController().Handle(request, reply);
    });

    fastify.delete("/auth/products/delete-product/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteProductController().Handle(request, reply);
    });

    fastify.get("/auth/products/get-products/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetProductsControllers().Handle(request, reply);
    });

};

