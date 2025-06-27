import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { User } from '../../../libs/shared/types/user.entity';

@Module({
  imports: [JwtModule.register({ secret: 'secret' }), TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
})
export class AuthModule {}
