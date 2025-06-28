import { Body, Controller, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/user.entity';

@Controller('auth')
export class AuthController {
  constructor(
    private jwt: JwtService,
    @InjectRepository(User) private users: Repository<User>,
  ) {}

  @Post('register')
  async register(@Body() body: { email: string; password: string }) {
    const user = this.users.create({
      ...body,
      password: await argon2.hash(body.password),
    });
    await this.users.save(user);
    return { id: user.id };
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.users.findOne({ where: { email: body.email } });
    if (!user || !(await argon2.verify(user.password, body.password))) {
      return { error: 'Invalid credentials' };
    }
    const token = await this.jwt.signAsync({ sub: user.id });
    return { access_token: token };
  }
}
