import { GeneralResponse } from "../CORE/Types/GeneralResponse";
import { IngredientRepository } from "../INFRASTRUCTURE/Repository/IngredientRepository";
import { IBurgerRequestService } from "../CORE/Interfaces/IBurgerRequestService";
import { IBurgerRequestRepository } from "../CORE/Interfaces/IBurgerRequestRepository";

export class BurgerService implements IBurgerRequestService {
  private _repository: IBurgerRequestRepository = new IngredientRepository();
  
}
