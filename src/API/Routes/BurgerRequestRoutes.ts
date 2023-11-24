import { FastifyInstance } from "fastify";
import { BurgerRequestController } from "../Controllers/BurgerRequestController";

export const BurgerRequestRoutes = async (fastify: FastifyInstance) => {
  const controller = new BurgerRequestController();
};
