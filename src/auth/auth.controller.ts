import { Controller, Post, Body, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { User } from "./user.entity";
import { RegisterUserDTO } from "./dto/register-user.dto";

@Controller("auth")
export class AuthController {

  constructor(
    private authService: AuthService
  ) {}

  @Post("/register")
  @UsePipes(ValidationPipe)
  async registerUser(@Body() registerUserBody: RegisterUserDTO): Promise<User> {
    return this.authService.registerUser(registerUserBody);
  }

}
