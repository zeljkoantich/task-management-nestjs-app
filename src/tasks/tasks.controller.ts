import { Controller, Get, Post, Body } from "@nestjs/common";
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

  @Post()
  createTask(
    @Body("title") title: string,
    @Body("description") description: string
  ) {
    return this.tasksService.createTask(title, description);
  }

}
