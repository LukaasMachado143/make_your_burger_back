import fastify, { FastifyInstance } from "fastify";
import fastifyCors from "@fastify/cors";

const server: FastifyInstance = fastify();
server.register(fastifyCors);
server.listen({ port: 8000 }, () => {
  console.log("Server is Running !");
});
