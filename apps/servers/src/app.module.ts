import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../libs/shared/types/user.entity';
import { BloodTest } from '../../libs/shared/types/blood-test.entity';

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
  ],
})
export class AppModule {}
