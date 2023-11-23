import { FastifyRequest, FastifyReply } from "fastify";
import { GeneralResponse } from "../../CORE/Types/GeneralResponse";
export class IngredientController {
  async getAll(request: FastifyRequest, reply: FastifyReply) {
    const response: GeneralResponse = {
      success: false,
      message: "",
    };
    try {
      response.success = true;
      response.data.message = "Prosseguir";
      return response;
    } catch (error) {
      response.message = "Internal Error, try again !";
      return reply.status(500).send(response);
    }
  }

  async create(request: FastifyRequest, reply: FastifyReply) {
    const response: GeneralResponse = {
      success: false,
      message: "",
    };
    try {
      response.success = true;
      response.data.message = "Prosseguir";
      return response;
    } catch (error) {
      response.message = "Internal Error, try again !";
      return reply.status(500).send(response);
    }
  }

  async update(request: FastifyRequest, reply: FastifyReply) {
    const response: GeneralResponse = {
      success: false,
      message: "",
    };
    try {
      response.success = true;
      response.data.message = "Prosseguir";
      return response;
    } catch (error) {
      response.message = "Internal Error, try again !";
      return reply.status(500).send(response);
    }
  }

  async delete(request: FastifyRequest, reply: FastifyReply) {
    const response: GeneralResponse = {
      success: false,
      message: "",
    };
    try {
      response.success = true;
      response.data.message = "Prosseguir";
      return response;
    } catch (error) {
      response.message = "Internal Error, try again !";
      return reply.status(500).send(response);
    }
  }
}
