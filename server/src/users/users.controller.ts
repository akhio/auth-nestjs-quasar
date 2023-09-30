import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('register')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UsePipes(new ValidationPipe())
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<any> {
    await this.usersService.createUser(createUserDto);
    return {
      statusCode: 201,
      res: 'User created successfully'
    };
  }

}
