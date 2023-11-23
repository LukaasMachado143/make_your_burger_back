import { IIngredientRepository } from "../CORE/Interfaces/IIngredientRepository";
import { IIngredientService } from "../CORE/Interfaces/IIngredientService";
import { GeneralResponse } from "../CORE/Types/GeneralResponse";
import { Ingredient } from "@prisma/client";
import { IngredientRepository } from "../INFRASTRUCTURE/Repository/IngredientRepository";

export class IngredientService implements IIngredientService {
  private _repository: IIngredientRepository = new IngredientRepository();
  async getAll(): Promise<GeneralResponse> {
    const response: GeneralResponse = {
      success: false,
      message: "",
    };
    try {
      const ingredientList: Ingredient[] = await this._repository.getAll();
      response.success = true;
      response.message = "ok";
      response.data = ingredientList;
    } catch (error) {
      response.success = false;
      response.message;
      response.error = error;
    }

    return response;
  }
  async create(newIngredient: Ingredient): Promise<GeneralResponse> {
    const response: GeneralResponse = {
      success: false,
      message: "",
    };
    try {
      const createdIngredient: Ingredient = await this._repository.create(
        newIngredient
      );
      response.success = true;
      response.message = "Created Succesfully";
      response.data = createdIngredient;
    } catch (error) {
      response.success = false;
      response.message;
      response.error = error;
    }
    return response;
  }
  async delete(id: number): Promise<GeneralResponse> {
    const response: GeneralResponse = {
      success: false,
      message: "",
    };
    try {
      const isExisting = await this.checkExistence(id);
      if (isExisting.success == false) return isExisting;
      await this._repository.delete(+id);
      response.success = true;
      response.message = "Deleted Successfully !";
    } catch (error) {
      console.log(error);
      response.success = false;
      response.message;
      response.error = error;
    }

    return response;
  }
  async update(id: number, name: string): Promise<GeneralResponse> {
    const response: GeneralResponse = {
      success: false,
      message: "",
    };
    try {
      const isExisting = await this.checkExistence(id);
      if (isExisting.success == false) return isExisting;
      await this._repository.update(+id, name);
      response.success = true;
      response.message = "Updated Successfully !";
    } catch (error) {
      console.log(error);
      response.success = false;
      response.message;
      response.error = error;
    }

    return response;
  }

  private async checkExistence(id: number) {
    const foundedIngredient: Ingredient | null = await this._repository.getById(
      +id
    );
    if (!foundedIngredient) {
      return {
        success: false,
        message: "Ingredient not Found, try other id !",
      };
    }
    return {
      success: true,
      message: "",
    };
  }
}
