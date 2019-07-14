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

}
