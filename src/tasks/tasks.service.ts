import { Injectable, Scope } from "@nestjs/common";

@Injectable({
  scope: Scope.DEFAULT
})
export class TasksService {

  private taskList: any[] = [];

  constructor() { }

  getTasks() {
    return this.taskList;
  }

}
