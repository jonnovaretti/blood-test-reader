import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BloodTest } from './blood-test.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BloodTest])],
  exports: [TypeOrmModule],
})
export class BloodTestModule {}
