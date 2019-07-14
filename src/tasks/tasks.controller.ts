import { Controller, Get, Post, Body } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDTO } from "./dto/create-task.dto";

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
  createTask(@Body() createTaskDTO: CreateTaskDTO) {
    return this.tasksService.createTask(createTaskDTO);
  }

}
