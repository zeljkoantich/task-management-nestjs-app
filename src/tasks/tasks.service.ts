import { Injectable, Scope } from "@nestjs/common";
import { ITaskModel, TaskStatuses } from "./models/task.model";
import * as uuid from "uuid/v1";
import { CreateTaskDTO } from "./dto/create-task.dto";

@Injectable({
  scope: Scope.DEFAULT
})
export class TasksService {

  private taskList: ITaskModel[] = [];

  constructor() { }

  getTasks() {
    return this.taskList;
  }

  getTask(id: string) {
    return this.taskList.find(task => task.id === id);
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
