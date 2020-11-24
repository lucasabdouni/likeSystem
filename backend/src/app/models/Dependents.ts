import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Employees from './Employees';

@Entity('dependents')
class Dependents {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('timestamp with time zone')
  birth_date: Date;

  @Column()
  kinship: string;

  @Column()
  avatar: string;

  @Column('uuid')
  id_employees: string;

  @ManyToOne(() => Employees)
  @JoinColumn({ name: 'id_employees' })
  employees_id: Employees;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Dependents;
