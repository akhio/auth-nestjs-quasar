import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async auth(email: string, passw: string) {
    const user = await this.usersService.findUser(email);
    if (!user) {
      return new Error('User not found');
    }

    bcrypt.compare(passw, user.password, (err: any, isMatch: any) => {
      if (err) {
        throw err;
      }
      if (isMatch) {
        console.log('User found');
        return user;
      } else {
        return new Error('Incorrect password');
      }
    });
  }
}
