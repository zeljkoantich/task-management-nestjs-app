import { Injectable, Scope, NotFoundException } from "@nestjs/common";
import { ITaskModel, TaskStatuses } from "./models/task.model";
import * as uuid from "uuid/v1";
import { CreateTaskDTO } from "./dto/create-task.dto";
import { GetTasksFilterDTO } from "./dto/get-tasks-filter.dto";

@Injectable({
  scope: Scope.DEFAULT
})
export class TasksService {

  private taskList: ITaskModel[] = [];

  constructor() { }

  getTasks() {
    return this.taskList;
  }

  getFilteredTasks(getTasksFilterDTO: GetTasksFilterDTO) {
    const { search, status } = getTasksFilterDTO;
    let tasks = [ ...this.getTasks() ];

    if (status) {
      tasks = tasks.filter(task => task.status === status);
    }

    if (search) {
      tasks = tasks.filter(task => task.title.includes(search)); // filter tasks by title
    }

    return tasks;
  }

  getTask(id: string) {
    const task = this.taskList.find(_task => _task.id === id);
    if (task) {
      return task;
    }

    throw new NotFoundException(`Task with id: ${id} not found`);
  }

  createTask(createTaskDTO: CreateTaskDTO): ITaskModel {
    const { description, title } = createTaskDTO;
    const task: ITaskModel = {
      description,
      title,
      id: uuid(),
      status: TaskStatuses.OPEN
    };
    this.taskList.push(task);

    return task;
  }

  updateTaskStatus(id: string, status: TaskStatuses) {
    let updatedTask: ITaskModel;
    this.taskList.forEach((task, index) => {
      if ( task.id === id ) {
        this.taskList[index].status = status;
        updatedTask = this.taskList[index];
        return;
      }
    });

    return updatedTask;
  }

  deleteTask(id: string): void {
    this.taskList = [ ...this.taskList.filter(task => task.id !== id) ];
  }

}
