import { FastifyRequest, FastifyReply } from "fastify";
import { GeneralResponse } from "../../CORE/Types/GeneralResponse";
import { IBurgerRequestService } from "../../CORE/Interfaces/IBurgerRequestService";
import { BurgerRequestService } from "../../SERVICES/BurgerRequestService";
import { BurgerRequest } from "@prisma/client";

export class BurgerRequestController {
  async create(
    request: FastifyRequest<{ Body: BurgerRequest }>,
    reply: FastifyReply
  ) {
    const response: GeneralResponse = {
      success: false,
      message: "",
    };
    try {
      const service: IBurgerRequestService = new BurgerRequestService();
      const data: BurgerRequest = request.body;
      return await service.create(data);
    } catch (error) {
      response.success = false;
      response.message = "Internal Error !";
      response.error = error;
      return response;
    }
  }

  async getAll(request: FastifyRequest, reply: FastifyReply) {
    const response: GeneralResponse = {
      success: false,
      message: "",
    };
    try {
      const service: IBurgerRequestService = new BurgerRequestService();
      return await service.getAll();
    } catch (error) {
      response.success = false;
      response.message = "Internal Error !";
      response.error = error;
      return response;
    }
  }

  async getTable(request: FastifyRequest, reply: FastifyReply) {
    const response: GeneralResponse = {
      success: false,
      message: "",
    };
    try {
      const service: IBurgerRequestService = new BurgerRequestService();
      return await service.getTable();
    } catch (error) {
      response.success = false;
      response.message = "Internal Error !";
      response.error = error;
      return response;
    }
  }

  async delete(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ) {
    const response: GeneralResponse = {
      success: false,
      message: "",
    };
    try {
      const service: IBurgerRequestService = new BurgerRequestService();
      const id: string = request.params.id;
      return await service.delete(id);
    } catch (error) {
      response.success = false;
      response.message = "Internal Error !";
      response.error = error;
      return response;
    }
  }
  async updateStatus(
    request: FastifyRequest<{ Params: { id: string; status: string } }>,
    reply: FastifyReply
  ) {
    const response: GeneralResponse = {
      success: false,
      message: "",
    };
    try {
      const service: IBurgerRequestService = new BurgerRequestService();
      const id: string = request.params.id;
      const status: string = request.params.status;
      return await service.updateStatus(id,status);
    } catch (error) {
      response.success = false;
      response.message = "Internal Error !";
      response.error = error;
      return response;
    }
  }
}
