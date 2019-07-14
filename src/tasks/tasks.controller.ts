import { Controller, Get } from "@nestjs/common";
import { TasksService } from "./tasks.service";

@Controller({
  path: "tasks"
})
export class TasksController {

  constructor(
    private tasksService: TasksService
  ) { }

  @Get()
  getTasks() {
    return this.tasksService.getTasks();
  }

}
