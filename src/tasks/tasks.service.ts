import { Injectable, Scope } from "@nestjs/common";
import { ITaskModel } from "./task.model";

@Injectable({
  scope: Scope.DEFAULT
})
export class TasksService {

  private taskList: ITaskModel[] = [];

  constructor() { }

  getTasks() {
    return this.taskList;
  }

}
