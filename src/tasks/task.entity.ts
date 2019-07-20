import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { TaskStatuses } from "./models/task.model";

@Entity()
export class TaskEntity extends BaseEntity {

  @PrimaryGeneratedColumn() // primary key, auto increment
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatuses;

}
