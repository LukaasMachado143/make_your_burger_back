import { BurgerRequest } from "@prisma/client";

export interface IBurgerRequestRepository {
  getAll(): Promise<BurgerRequest[]>;
  create(data: any): Promise<void>;
  delete(id: string): Promise<void>;
  updateStatus(id: string, status: string): Promise<void>;
}
