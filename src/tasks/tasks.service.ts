import { Injectable, Scope, NotFoundException } from "@nestjs/common";
import { ITaskModel } from "./models/task.model";
import * as uuid from "uuid/v1";
import { CreateTaskDTO } from "./dto/create-task.dto";
import { GetTasksFilterDTO } from "./dto/get-tasks-filter.dto";
import { TaskStatuses } from "./task-statuses.enum";

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
    const task = this.taskList.find(task_ => task_.id === id);
    if (task) {
      return task;
    }

    throw new NotFoundException(`Task with id: ${id} not found`);
  }

  private getTaskIndex(id: string) {
    let index: number;
    this.taskList.find((task, index_): boolean => {
      if (task.id === id) {
        index = index_;
        return true; // callback return a boolean: src/tasks/tasks.service.ts(49,24): error TS2345
        /*
         Argument of type '(this: void, task: ITaskModel, index_: number) => void' is not
         assignable to parameter of type '(value: ITaskModel, index: number, obj: ITaskModel[]) =>
         boolean'.
         Type 'void' is not assignable to type 'boolean'.
        */
      }
    });

    return index;
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
    const task = this.getTask(id); // throws NotFoundException if no task to update
    task.status = status;
    this.taskList[this.getTaskIndex(task.id)] = task; // update task list

    return task;
  }

  deleteTask(id: string): void {
    const task = this.getTask(id); // throws NotFoundException if no task to delete
    const taskIndex = this.getTaskIndex[task.id];
    this.taskList.splice(taskIndex, 1); // remove deleted item from task list
  }

}
