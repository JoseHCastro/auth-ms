import { ChildEntity, Column } from 'typeorm';
import { User } from './user.entity';

@ChildEntity()
export class Teacher extends User {
  @Column('varchar', { length: 50 })
  category: string;

  @Column('varchar', { length: 50 })
  workload: string;

  @Column('varchar', { length: 30 })
  contract_type: string;

  @Column('date')
  hired_at: Date;
}