import { BaseEntity } from './base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class UserEntity extends BaseEntity {
  @Column({
    type: 'varchar',
    length: 128,
  })
  name: string;
}
