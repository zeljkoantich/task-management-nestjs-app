import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { TaskStatuses } from "./task-statuses.enum";

@Entity()
export class Task extends BaseEntity {

  @PrimaryGeneratedColumn() // primary key, auto increment
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatuses;

}
