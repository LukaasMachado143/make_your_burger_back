import fastify, { FastifyInstance } from "fastify";
import fastifyCors from "@fastify/cors";
import { IngredientRoutes } from "./API/Routes/IngredientRoutes";

const server: FastifyInstance = fastify();

server.register(fastifyCors);
server.register(IngredientRoutes, { prefix: "/ingredient" });
server.listen({ port: 8000 }, () => {
  console.log("Server is Running !");
});
