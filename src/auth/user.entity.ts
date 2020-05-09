import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn() // primary key, auto increment
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ name: "email" })
  email: string;

  @Column()
  password: string;

}
