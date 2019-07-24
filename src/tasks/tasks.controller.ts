import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDTO } from "./dto/create-task.dto";
import { TaskStatuses } from "./task-statuses.enum";
import { GetTasksFilterDTO } from "./dto/get-tasks-filter.dto";
import { objectHasKeys } from "../shared/helper-functions";
import { TaskStatusValidationPipe } from "./pipes/task-status-validation.pipe";
import { Task } from "./task.entity";
import { DeleteResult } from "typeorm";

@Controller({
  path: "tasks"
})
export class TasksController {

  constructor(
    private tasksService: TasksService
  ) { }

  // @Get()
  // getTasks(
  //   @Query(ValidationPipe) getTasksFilterDTO: GetTasksFilterDTO
  // ) {
  //   if (objectHasKeys(getTasksFilterDTO)) {
  //     // return this.tasksService.getFilteredTasks(getTasksFilterDTO);
  //     return this.tasksService.getTasks();

  //   }

  //   return this.tasksService.getTasks();
  // }

  @Get("/:id")
  async getTask(
    @Param("id", ParseIntPipe) id: number
  ): Promise<Task> {
    return this.tasksService.getTask(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createTask(
    @Body() createTaskDTO: CreateTaskDTO
  ): Promise<Task> {
    return this.tasksService.createTask(createTaskDTO);
  }

  @Patch("/:id/status")
  async updateTaskStatus(
    @Param("id") id: number,
    @Body("status", TaskStatusValidationPipe) status: TaskStatuses,
  ): Promise<Task> {
    return this.tasksService.updateTaskStatus(id, status);
  }

  @Delete("/:id")
  async deleteTask(
    @Param("id", ParseIntPipe) id: number
  ): Promise<DeleteResult> {
    return this.tasksService.deleteTask(id);
  }

}
