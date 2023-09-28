import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  // This is function is used to create User in User Entity.
  createUser(createUserDto: CreateUserDto): Promise<User> {
    const user: User = new User();

    // user.name = createUserDto.name;
    user.email = createUserDto.email;
    // user.age = createUserDto.age;
    user.password = createUserDto.password;
    // user.phoneNumber = createUserDto.phoneNumber;
    // user.address = createUserDto.address;
    // user.aboutMe = createUserDto.aboutMe;

    return this.userRepository.save(user);
  }

  // This function is used to get all the user's list
  findAllUser(): Promise<User[]> {
    return this.userRepository.find();
  }

  // This function used to get data of use whose id is passed in parameter
  viewUser(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  // This function is used to updated specific user whose id is passed in parameter along with passed updated data
  updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user: User = new User();

    user.id = id;
    // user.name = updateUserDto.name;
    user.email = updateUserDto.email;
    // user.age = updateUserDto.age;
    user.password = updateUserDto.password;
    // user.phoneNumber = updateUserDto.phoneNumber;
    // user.address = updateUserDto.address;
    // user.aboutMe = updateUserDto.aboutMe;

    return this.userRepository.save(user);
  }

  // This function is used to remove or delete user from database.
  removeUser(id: number): Promise<{ affected?: number }> {
    return this.userRepository.delete(id);
  }
}
