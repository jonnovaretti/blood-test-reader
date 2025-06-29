import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { BloodTest } from './blood-test/blood-test.entity';
import { UsersModule } from './users/users.module';
import { BloodTestModule } from './blood-test/blood-test.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'blood_tests',
      entities: [User, BloodTest],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, BloodTest]),
    UsersModule,
    BloodTestModule,
    AuthModule,
  ],
})
export class AppModule {}
