
import { AnimalType } from "../animalType/animal-type";
import { User } from "../user/user";

export class AnimalByUser {
  id: number = 0;
  animalTypeId: number = 0;
  name: string = '';
  age: number = 0;
  description?: string;
  weight: number = 0;
  userId: number = 0;
  animalType: AnimalType = new AnimalType();
  user: User = new User();
}
