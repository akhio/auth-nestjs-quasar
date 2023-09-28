import { IsEmail, IsInt, IsNotEmpty, IsPhoneNumber, IsString, Matches, MaxLength, MinLength } from 'class-validator';

const passwordRegEx =
  /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

export class CreateUserDto {
  // @IsString()
  // @MinLength(2, {message: 'Name must have at least 2 characters'})
  // name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  // @IsInt()
  // age: number;

  @IsNotEmpty()
  @MinLength(8, {message: "Password must contain minimum 8 characters "})
  @MaxLength(20, {message: 'Password must contain maximum 20 characters'})
  @Matches(passwordRegEx, {
    message:  `Password must contain t least one uppercase letter, 
    one lowercase letter, 
    one number and 
    one special character`,
  })
  password: string;

  // @IsPhoneNumber()
  // phoneNumber: string;

  // @MaxLength(30)
  // address: string;

  // @MinLength(20)
  // @MaxLength(500)
  // aboutMe: string;
}
