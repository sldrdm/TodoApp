
import { AuthService } from './auth.service'; // auth.service.ts ile aynı klasördeyse
import { UsersService } from '../users/users.service'; // users klasörüne göre yolu ayarla
import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { ConflictException } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) {}

 @Post('register')
async register(@Body() dto: { username: string, password: string }) {
  const existing = await this.usersService.findByUsername(dto.username);
  if (existing) {
    throw new ConflictException('Bu kullanıcı adı zaten alınmış.');
  }
  return this.usersService.createUser(dto.username, dto.password);
}


  @Post('login')
  async login(@Body() dto: { username: string, password: string }) {
    const user = await this.authService.validateUser(dto.username, dto.password);
    if (!user) throw new UnauthorizedException();
    return this.authService.login(user);
  }
}
