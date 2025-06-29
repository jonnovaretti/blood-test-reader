import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class BloodTest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filePath: string;

  @ManyToOne(() => User, user => user.id)
  user: User;
}
