import { GeneralResponse } from "../Types/GeneralResponse";
import { Ingredient } from "@prisma/client";

export interface IIngredientService {
  getAll(): Promise<GeneralResponse>;
  create(newIngredient: Ingredient): Promise<GeneralResponse>;
  delete(id: number): Promise<GeneralResponse>;
  update(id: number, name: string): Promise<GeneralResponse>;
}
