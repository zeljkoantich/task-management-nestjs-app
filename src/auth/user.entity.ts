import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn() // primary key, auto increment
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

}
