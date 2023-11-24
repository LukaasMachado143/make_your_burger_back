import fastify, { FastifyInstance } from "fastify";
import fastifyCors from "@fastify/cors";
import { IngredientRoutes } from "./API/Routes/IngredientRoutes";
import { BurgerRequestRoutes } from "./API/Routes/BurgerRequestRoutes";

const server: FastifyInstance = fastify();
server.register(fastifyCors);
server.register(IngredientRoutes, { prefix: "/ingredient" });
server.register(BurgerRequestRoutes, { prefix: "/burgerRequest" });
server.listen({ port: 8000 }, () => {
  console.log("Server is Running !");
});
