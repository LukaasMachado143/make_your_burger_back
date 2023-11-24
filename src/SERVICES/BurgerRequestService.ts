import { GeneralResponse } from "../CORE/Types/GeneralResponse";
import { IBurgerRequestService } from "../CORE/Interfaces/IBurgerRequestService";
import { IBurgerRequestRepository } from "../CORE/Interfaces/IBurgerRequestRepository";
import { BurgerRequest, Ingredient } from "@prisma/client";
import { BurgerRequestRepository } from "../INFRASTRUCTURE/Repository/BurgerRequestRepository";
import { BurgerRequestTable } from "../CORE/Types/BurgerRequest/BurgerRequestTable";

export class BurgerRequestService implements IBurgerRequestService {
  private _repository: IBurgerRequestRepository = new BurgerRequestRepository();

  async getTable(): Promise<GeneralResponse> {
    const response: GeneralResponse = {
      success: false,
      message: "",
    };
    const burgerRequests = await this._repository.getAll();
    const mapedDatas: BurgerRequestTable[] = burgerRequests.map(
      (request: any) => {
        const id: number = request.id;
        const name: string = request.name;
        const status: string = request.status;
        const bread: string = request.ingredients.find(
          (ingredient: Ingredient) => ingredient.type == "bread"
        )?.name;
        const meat: string = request.ingredients.find(
          (ingredient: Ingredient) => ingredient.type == "meat"
        )?.name;
        const optionalItems: string[] = request.ingredients
          .filter((ingredient: Ingredient) => ingredient.type === "optional")
          .map((ingredient: Ingredient) => ingredient.name);

        return { id, name, status, bread, meat, optionalItems };
      }
    );
    response.data = mapedDatas;
    response.success = true;
    response.message = "ok";
    return response;
  }
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
