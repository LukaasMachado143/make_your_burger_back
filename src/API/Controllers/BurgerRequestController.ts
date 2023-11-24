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
}
