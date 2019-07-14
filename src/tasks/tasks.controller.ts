import { Controller, Get, Post, Body, Param } from "@nestjs/common";
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

  @Get("/:id")
  getTask(@Param("id") id: string) {
    return this.tasksService.getTask(id);
  }

  @Post()
  createTask(@Body() createTaskDTO: CreateTaskDTO) {
    return this.tasksService.createTask(createTaskDTO);
  }

}
