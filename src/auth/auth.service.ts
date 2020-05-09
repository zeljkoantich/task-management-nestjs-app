import { Injectable } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { RegisterUserDTO } from "./dto/register-user.dto";

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User)
    private userRepository: UserRepository
  ) {}

  async registerUser(registerUserDTO: RegisterUserDTO): Promise<User> {
    console.log(registerUserDTO);
    return this.userRepository.register(registerUserDTO);
  }

}
