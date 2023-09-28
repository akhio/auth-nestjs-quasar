import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  // This is function is used to create User in User Entity.
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const checkUserExists = await this.userRepository.findOneBy({
      email: createUserDto.email,
    });

    if (checkUserExists) {
      throw new HttpException('User already exists', HttpStatus.FOUND);
    }

    const user: User = new User();
    user.email = createUserDto.email;
    user.password = await hash(createUserDto.password, 10);
    return await this.userRepository.save(user);
  }

  findUser(email: string): Promise<User> {
    return this.userRepository.findOneBy({ email });
  }

  // This function is used to remove or delete user from database.
  removeUser(id: number): Promise<{ affected?: number }> {
    return this.userRepository.delete(id);
  }
}
