import { Animal } from "../animal/animal";
import { User } from "../user/user";

export class Share {
  imageUrl: string = "";
  userId: number = 0;
  animalId?: number | null;
  description?: string = "";
  user?: User;
  animal?: Animal;
}


