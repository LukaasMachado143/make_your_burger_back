import { FastifyRequest, FastifyReply } from "fastify";
import { GeneralResponse } from "../../CORE/Types/GeneralResponse";
import { IIngredientService } from "../../CORE/Interfaces/IIngredientService";
import { IngredientService } from "../../SERVICES/IngredientService";
import { Ingredient } from "@prisma/client";
export class IngredientController {
  async getAll(request: FastifyRequest, reply: FastifyReply) {
    const service: IIngredientService = new IngredientService();
    const response: GeneralResponse = {
      success: false,
      message: "",
    };
    try {
      const response: GeneralResponse = await service.getAll();
      return response;
    } catch (error) {
      response.message = "Internal Error, try again !";
      return reply.status(500).send(response);
    }
  }

  async getFormatedList(request: FastifyRequest, reply: FastifyReply) {
    const service: IIngredientService = new IngredientService();
    const response: GeneralResponse = {
      success: false,
      message: "",
    };
    try {
      const response: GeneralResponse = await service.getFormatedList();
      return response;
    } catch (error) {
      response.message = "Internal Error, try again !";
      return reply.status(500).send(response);
    }
  }

  async create(
    request: FastifyRequest<{ Body: Ingredient }>,
    reply: FastifyReply
  ) {
    const service: IIngredientService = new IngredientService();
    const response: GeneralResponse = {
      success: false,
      message: "",
    };
    try {
      const newIngredient: Ingredient = request.body;
      const response = await service.create(newIngredient);
      return response;
    } catch (error) {
      response.success = false;
      response.message = "Internal Error, try again !";
      response.error = error;
      return reply.status(500).send(response);
    }
  }

  async update(
    request: FastifyRequest<{ Params: { id: number; name: string } }>,
    reply: FastifyReply
  ) {
    const service: IIngredientService = new IngredientService();
    const response: GeneralResponse = {
      success: false,
      message: "",
    };

    try {
      const { id, name } = request.params;
      const response = await service.update(id, name);
      return response;
    } catch (error) {
      response.success = false;
      response.message = "Internal Error, try again !";
      return reply.status(500).send(response);
    }
  }

  async delete(
    request: FastifyRequest<{ Params: { id: number } }>,
    reply: FastifyReply
  ) {
    const service: IIngredientService = new IngredientService();
    const response: GeneralResponse = {
      success: false,
      message: "",
    };
    try {
      const id: number = request.params.id;
      const response: GeneralResponse = await service.delete(id);
      return response;
    } catch (error) {
      response.success = false;
      response.message = "Internal Error, try again !";
      return reply.status(500).send(response);
    }
  }
}
