import { FastifyInstance } from "fastify";

export const IngredientRoutes = async (fastify: FastifyInstance) => {
  fastify.get("/", () => {
    return { ok: "ok" };
  });
};
