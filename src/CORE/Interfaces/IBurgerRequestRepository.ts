import { BurgerRequest } from "@prisma/client";

export interface IBurgerRequestRepository {
  getAll(): Promise<BurgerRequest[]>;
  create(data: any): Promise<void>;
}
