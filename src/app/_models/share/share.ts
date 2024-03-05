
import { AnimalByUser } from "../animalByUser/animalByUser";
import { User } from "../user/user";

export class Share {
  imageUrl: string = "";
  userId: number = 0;
  animalId?: number | null;
  description?: string = "";
  user?: User;
  animal?: AnimalByUser;
}


