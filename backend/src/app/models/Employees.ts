import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('employees')
class Employees {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  occupation: string;

  @Column()
  department: string;

  @Column()
  email: string;

  @Column()
  telephone: number;

  @Column()
  avatar: string;

  @Column()
  like: number;

  @Column()
  dislike: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Employees;
