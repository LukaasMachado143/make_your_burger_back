import { FastifyInstance } from "fastify";
import { IngredientController } from "../Controllers/IngredientController";

export const IngredientRoutes = async (fastify: FastifyInstance) => {
  const controller = new IngredientController();
  fastify.get("/", controller.getAll);
  fastify.get("/formatedList", controller.getFormatedList);
  fastify.post("/", controller.create);
  fastify.put("/:id/:name", controller.update);
  fastify.delete("/:id", controller.delete);
};
