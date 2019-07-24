import { PipeTransform, BadRequestException } from "@nestjs/common";
import { TaskStatuses } from "../task-statuses.enum";

export class TaskStatusValidationPipe implements PipeTransform {

  transform(value: TaskStatuses) {
    const taskStatuses = Object.values(TaskStatuses);
    const isTaskStatusValueValid = taskStatuses.some(status => status === value);

    if (!isTaskStatusValueValid) {
      throw new BadRequestException(`Status ${value} is not a valid status`);
    }

    return value;
  }

}
