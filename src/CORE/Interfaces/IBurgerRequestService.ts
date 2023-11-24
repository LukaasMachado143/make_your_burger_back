import { BurgerRequest } from "@prisma/client";
import { GeneralResponse } from "../Types/GeneralResponse";
export interface IBurgerRequestService {
  getAll(): Promise<GeneralResponse>;
  create(data: BurgerRequest): Promise<GeneralResponse>;
}
