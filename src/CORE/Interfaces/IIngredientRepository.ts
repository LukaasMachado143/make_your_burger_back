import { Ingredient } from "@prisma/client";

export interface IIngredientRepository {
  getAll(): Promise<Ingredient[]>;
  getById(id: number): Promise<Ingredient | null>;
  create(newIngredient: Ingredient): Promise<Ingredient>;
  delete(id: number): Promise<void>;
  update(id: number, name: string): Promise<void>;
}
