import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity'; // user.entity.ts dosyanın yolu doğruysa bu şekilde
import * as bcrypt from 'bcrypt';
// src/users/users.service.ts

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  async findByUsername(username: string) {
    return this.usersRepo.findOne({ where: { username } });
  }

  async createUser(username: string, password: string) {
    const hashed = await bcrypt.hash(password, 10);
    const user = this.usersRepo.create({ username, password: hashed });
    return this.usersRepo.save(user);
  }

  async findById(id: number) {
    return this.usersRepo.findOne({ where: { id } });
  }
}
