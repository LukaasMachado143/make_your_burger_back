import { Ingredient } from "@prisma/client";
import { IIngredientRepository } from "../../CORE/Interfaces/IIngredientRepository";
import { prismaClient } from "../DB/prisma";

export class IngredientRepository implements IIngredientRepository {
  async getById(id: number): Promise<Ingredient | null> {
    const ingredient = await prismaClient.ingredient.findFirst({
      where: {
        id: id,
      },
    });
    return ingredient;
  }
  async getAll(): Promise<Ingredient[]> {
    const ingredientList = await prismaClient.ingredient.findMany();
    return ingredientList;
  }
  async create(newIngredient: Ingredient): Promise<Ingredient> {
    const createdIngredient = await prismaClient.ingredient.create({
      data: {
        type: newIngredient.type,
        name: newIngredient.name,
      },
    });
    return createdIngredient;
  }
  async delete(id: number): Promise<void> {
    await prismaClient.ingredient.delete({ where: { id: id } });
    return;
  }
  async update(id: number, name: string): Promise<void> {
    await prismaClient.ingredient.update({
      where: { id: id },
      data: {
        name,
      },
    });
    return;
  }
}
