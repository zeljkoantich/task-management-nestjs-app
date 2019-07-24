import { Injectable, Scope, NotFoundException } from "@nestjs/common";
import { CreateTaskDTO } from "./dto/create-task.dto";
import { GetTasksFilterDTO } from "./dto/get-tasks-filter.dto";
import { TaskStatuses } from "./task-statuses.enum";
import { TaskRepository } from "./task.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "./task.entity";
import { DeleteResult } from "typeorm";
import { of } from "rxjs";

@Injectable({
  scope: Scope.DEFAULT
})
export class TasksService {

  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository
  ) { }

  async getTasks(getTasksFilterDTO: GetTasksFilterDTO): Promise<Task[]> {
    return this.taskRepository.getTasks(getTasksFilterDTO);
  }

  async getTask(id: number): Promise<Task> {
    const task = await this.taskRepository.findOne(id);
    if (task) {
      return task;
    }

    throw new NotFoundException(`Task with id: ${id} not found`);
  }

  async createTask(createTaskDTO: CreateTaskDTO): Promise<Task> {
    return this.taskRepository.createTask(createTaskDTO);
  }

  async updateTaskStatus(id: number, status: TaskStatuses): Promise<Task> {
    const task = await this.getTask(id); // throws NotFoundException if no task to update
    task.status = status;
    await this.taskRepository.update(task.id, task);

    return of(task).toPromise(); // return promise of updated task
  }

  async deleteTask(id: number): Promise<DeleteResult> {
    const task = await this.getTask(id); // throws NotFoundException if no task to delete

    return this.taskRepository.delete(task.id);
  }

}
