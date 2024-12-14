import { FastifyRequest, FastifyInstance, FastifyReply, FastifyPluginOptions } from "fastify";

import { CreateStockController } from "../../controllers/stock/CreateStockController";
import { AllStocksController } from "../../controllers/stock/AllStocksController";
import { UpdateStrockController } from "../../controllers/stock/UpdateStockController";
import { SpecificStockController } from "../../controllers/stock/SpecificStockController";

export default function Routes(fastify: FastifyInstance, plugin: FastifyPluginOptions) {
    
    fastify.post("/auth/stock/create-stock/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateStockController().Handle(request, reply);
    });

    fastify.get("/auth/stock/get-all/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new AllStocksController().Handle(request, reply);
    });

    fastify.put("/auth/stock/update-stock/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateStrockController().Handle(request, reply);
    });

    fastify.get("/auth/stock/delete-stock/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new SpecificStockController().Handle(request, reply);
    });
};