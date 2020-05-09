import { IsNotEmpty, IsEmail } from "class-validator";

export class RegisterUserDTO {

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @IsEmail(undefined, {message: "Not valid email."})
  email: string;

  @IsNotEmpty()
  password: string;

}
