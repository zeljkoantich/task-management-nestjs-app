import { Repository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { RegisterUserDTO } from "./dto/register-user.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User> {

  async register({ firstName, lastName, password, email }: RegisterUserDTO): Promise<User> {
    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.password = password;
    user.email = email;

    return user.save();
  }

}
