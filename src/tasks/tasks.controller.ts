import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDTO } from "./dto/create-task.dto";
import { TaskStatuses } from "./models/task.model";
import { GetTasksFilterDTO } from "./dto/get-tasks-filter.dto";
import { objectHasKeys } from "../shared/helper-functions";
import { TaskStatusValidationPipe } from "./pipes/task-status-validation.pipe";

@Controller({
  path: "tasks"
})
export class TasksController {

  constructor(
    private tasksService: TasksService
  ) { }

  @Get()
  getTasks(
    @Query() getTasksFilterDTO: GetTasksFilterDTO
  ) {
    if (objectHasKeys(getTasksFilterDTO)) {
      return this.tasksService.getFilteredTasks(getTasksFilterDTO);
    }

    return this.tasksService.getTasks();
  }

  @Get("/:id")
  getTask(
    @Param("id") id: string
  ) {
    return this.tasksService.getTask(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(
    @Body() createTaskDTO: CreateTaskDTO
  ) {
    return this.tasksService.createTask(createTaskDTO);
  }

  @Patch("/:id/status")
  updateTaskStatus(
    @Param("id") id: string,
    @Body("status", TaskStatusValidationPipe) status: TaskStatuses,
  ) {
    return this.tasksService.updateTaskStatus(id, status);
  }

  @Delete("/:id")
  deleteTask(
    @Param("id") id: string
  ): void {
    this.tasksService.deleteTask(id);
  }

}
