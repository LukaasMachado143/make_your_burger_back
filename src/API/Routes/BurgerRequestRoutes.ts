import { FastifyInstance } from "fastify";
import { BurgerRequestController } from "../Controllers/BurgerRequestController";

export const BurgerRequestRoutes = async (fastify: FastifyInstance) => {
  const controller = new BurgerRequestController();
  fastify.get("/", controller.getAll);
  fastify.get("/table", controller.getTable);
  fastify.post("/", controller.create);
  fastify.delete("/:id", controller.delete);
  fastify.patch("/:id/:status", controller.updateStatus);
};
