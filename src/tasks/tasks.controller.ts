import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDTO } from "./dto/create-task.dto";
import { TaskStatuses } from "./task-statuses.enum";
import { GetTasksFilterDTO } from "./dto/get-tasks-filter.dto";
import { objectHasKeys } from "../shared/helper-functions";
import { TaskStatusValidationPipe } from "./pipes/task-status-validation.pipe";
import { TaskEntity } from "./task.entity";

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
  ): Promise<TaskEntity> {
    return this.tasksService.getTask(id);
  }

  // @Post()
  // @UsePipes(ValidationPipe)
  // createTask(
  //   @Body() createTaskDTO: CreateTaskDTO
  // ) {
  //   return this.tasksService.createTask(createTaskDTO);
  // }

  // @Patch("/:id/status")
  // updateTaskStatus(
  //   @Param("id") id: string,
  //   @Body("status", TaskStatusValidationPipe) status: TaskStatuses,
  // ) {
  //   return this.tasksService.updateTaskStatus(id, status);
  // }

  // @Delete("/:id")
  // deleteTask(
  //   @Param("id") id: string
  // ): void {
  //   this.tasksService.deleteTask(id);
  // }

}
