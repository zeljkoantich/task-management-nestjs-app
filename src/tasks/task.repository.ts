import { Repository, EntityRepository } from "typeorm";
import { Task } from "./task.entity";
import { CreateTaskDTO } from "./dto/create-task.dto";
import { TaskStatuses } from "./task-statuses.enum";
import { GetTasksFilterDTO } from "./dto/get-tasks-filter.dto";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {

  async getTasks(getTasksFilterDTO: GetTasksFilterDTO): Promise<Task[]> {
    const { search, status } = getTasksFilterDTO;
    const tableName = Task.name.toLowerCase();
    const query = this.createQueryBuilder(tableName);

    if (search) {
      query.andWhere("task.title LIKE :search", { search: `%${search}%` }); // add search query
    }

    if (status) {
      query.andWhere("task.status = :status", { status }); // add status query
    }

    return query.getMany();
  }

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
