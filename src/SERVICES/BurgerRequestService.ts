import { GeneralResponse } from "../CORE/Types/GeneralResponse";
import { IBurgerRequestService } from "../CORE/Interfaces/IBurgerRequestService";
import { IBurgerRequestRepository } from "../CORE/Interfaces/IBurgerRequestRepository";
import { BurgerRequest } from "@prisma/client";
import { BurgerRequestRepository } from "../INFRASTRUCTURE/Repository/BurgerRequestRepository";

export class BurgerRequestService implements IBurgerRequestService {
  async getAll(): Promise<GeneralResponse> {
    const response: GeneralResponse = {
      success: false,
      message: "",
    };
    response.data = await this._repository.getAll();
    response.success = true;
    response.message = "ok";
    return response;
  }
  private _repository: IBurgerRequestRepository = new BurgerRequestRepository();
  async create(data: BurgerRequest): Promise<GeneralResponse> {
    const response: GeneralResponse = {
      success: false,
      message: "",
    };
    await this._repository.create(data);
    response.success = true;
    response.message = "Created Successfully";
    return response;
  }
}
