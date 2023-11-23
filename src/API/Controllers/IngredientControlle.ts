import { FastifyRequest, FastifyReply } from "fastify";
import { GeneralResponse } from "../../CORE/Types/GeneralResponse";
export class IngredientController {
  async getAll(request: FastifyRequest, reply: FastifyReply) {
    try {
    } catch (error) {
      const response: GeneralResponse = {
        success: false,
        message: "Internal Error",
      };
      return reply.status(500).send(response);
    }
  }

  async create(request: FastifyRequest, reply: FastifyReply) {
    try {
    } catch (error) {
      const response: GeneralResponse = {
        success: false,
        message: "Internal Error",
      };
      return reply.status(500).send(response);
    }
  }

  async update(request: FastifyRequest, reply: FastifyReply) {
    try {
    } catch (error) {
      const response: GeneralResponse = {
        success: false,
        message: "Internal Error",
      };
      return reply.status(500).send(response);
    }
  }

  async delete(request: FastifyRequest, reply: FastifyReply) {
    try {
    } catch (error) {
      const response: GeneralResponse = {
        success: false,
        message: "Internal Error",
      };
      return reply.status(500).send(response);
    }
  }
}
