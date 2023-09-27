import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            email: "debil@gmail.com",
            password: "debil3000"
        },
        {
            userId: 2,
            email: "akhio@gmail.com",
            password: "akhio"
        },
        {
            userId: 3,
            email: "temir@gmail.com",
            password: "temir"
        }
    ]

    async findOne(email: string): Promise<User | undefined> {
        return this.users.find(user => user.email === email)
    }
}

