import { IsEmail, IsInt, IsNotEmpty, IsPhoneNumber, IsString, Matches, MaxLength, MinLength } from 'class-validator';

const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;

export class CreateUserDto {
  @IsString()
  @MinLength(2, {message: 'Name must have at least 2 characters'})
  name: string;

  @IsNotEmpty()
  @IsEmail(null, {message: 'Please provide valid email'})
  email: string;

  @IsInt()
  age: number;

  @IsNotEmpty()
  @Matches(passwordRegEx, {
    message: `Password must contain Minimum 8 and Maximum 20 characters, 
    at least one uppercase letter, 
    one lowercase letter, 
    one number and 
    one special character`,
  })
  password: string;

  @IsPhoneNumber()
  phoneNumber: string;

  @MaxLength(30)
  address: string;

  @MinLength(20)
  @MaxLength(500)
  aboutMe: string;
}
