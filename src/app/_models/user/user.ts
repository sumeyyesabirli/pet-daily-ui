import { Animal } from "../animal/animal";

export class User {
  id: number = 0;
  imageUrl: string= "";
  username: string = "";
  password: string = "";
  mail: string = "";
  firstName: string = "";
  lastName: string = "";
  description?: string = "";
  gender: boolean = false;
  fullName: string = "";
  animals?: Animal[];
}
