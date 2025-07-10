import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'; // <-- eksikti, eklendi
import { UsersService } from '../users/users.service'; // <-- eksikti, eklendi
import * as bcrypt from 'bcryptjs'; // <-- eksikti, eklendi
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string) {
    const user = await this.usersService.findByUsername(username);
    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return { access_token: this.jwtService.sign(payload) };
  }
}
