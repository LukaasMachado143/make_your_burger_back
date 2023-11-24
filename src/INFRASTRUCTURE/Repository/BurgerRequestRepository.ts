import { BurgerRequest } from "@prisma/client";
import { IBurgerRequestRepository } from "../../CORE/Interfaces/IBurgerRequestRepository";
import { prismaClient } from "../DB/prisma";

export class BurgerRequestRepository implements IBurgerRequestRepository {
  async delete(id: string): Promise<void> {
    await prismaClient.burgerRequest.delete({ where: { id: +id } });
    return;
  }
  async getAll(): Promise<BurgerRequest[]> {
    return await prismaClient.burgerRequest.findMany({
      include: {
        ingredients: true,
      },
    });
  }
  async create(data: any): Promise<void> {
    await prismaClient.burgerRequest.create({
      data: {
        name: data.name,
        ingredients: {
          connect: data.ingredients,
        },
      },
    });
    return;
  }
}
