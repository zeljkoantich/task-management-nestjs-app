import { Injectable, Scope } from "@nestjs/common";
import { ITaskModel, TaskStatuses } from "./models/task.model";
import * as uuid from "uuid/v1";

@Injectable({
  scope: Scope.DEFAULT
})
export class TasksService {

  private taskList: ITaskModel[] = [];

  constructor() { }

  getTasks() {
    return this.taskList;
  }

  createTask(title: string, description: string): ITaskModel {
    const task: ITaskModel = {
      description,
      title,
      id: uuid(),
      status: TaskStatuses.OPEN
    };
    this.taskList.push(task);

    return task;
  }

}
