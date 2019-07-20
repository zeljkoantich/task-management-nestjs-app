import { PipeTransform, NotAcceptableException } from "@nestjs/common";
import { TaskStatuses } from "../models/task.model";

export class TaskStatusValidationPipe implements PipeTransform {

  transform(value: TaskStatuses) {
    const taskStatuses = Object.values(TaskStatuses);
    const isTaskStatusValueValid = taskStatuses.some(status => status === value);

    if (!isTaskStatusValueValid) {
      throw new NotAcceptableException(`Status ${value} is not a valid status`);
    }

    return value;
  }

}
