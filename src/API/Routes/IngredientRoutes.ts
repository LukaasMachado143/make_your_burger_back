import { FastifyInstance } from "fastify";
import { IngredientController } from "../Controllers/IngredientControlle";

export const IngredientRoutes = async (fastify: FastifyInstance) => {
  const controller = new IngredientController();
  fastify.get("/", controller.getAll);
  fastify.post("/", controller.create);
  fastify.put("/:id/:name", controller.update);
  fastify.delete("/:id", controller.delete);
};
