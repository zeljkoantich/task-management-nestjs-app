import { Repository, EntityRepository } from "typeorm";
import { Task } from "./task.entity";
import { CreateTaskDTO } from "./dto/create-task.dto";
import { TaskStatuses } from "./task-statuses.enum";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {

  async createTask(createTaskDTO: CreateTaskDTO): Promise<Task> {
    const { description, title } = createTaskDTO;
    const task = new Task();

    task.description = description;
    task.title = title;
    task.status = TaskStatuses.OPEN;
    await task.save();

    return task;
  }

}
