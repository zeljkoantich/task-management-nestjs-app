import { Controller, Get, Post, Body, Param, Delete, Patch } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDTO } from "./dto/create-task.dto";
import { TaskStatuses } from "./models/task.model";

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

  @Patch("/:id/status")
  updateTaskStatus(
    @Param("id") id: string,
    @Body("status") status: TaskStatuses,
    ) {
    return this.tasksService.updateTaskStatus(id, status);
  }

  @Delete("/:id")
  deleteTask(@Param("id") id: string): void {
    this.tasksService.deleteTask(id);
  }

}
