import { PipeTransform, ArgumentMetadata, NotAcceptableException } from "@nestjs/common";
import { TaskStatuses } from "../models/task.model";

export class TaskStatusValidationPipe implements PipeTransform {

  transform(value: TaskStatuses, metadata: ArgumentMetadata) {
    const taskStatuses = Object.values(TaskStatuses);
    const isTaskValueValid = taskStatuses.some(status => status === value);

    if (!isTaskValueValid) {
      throw new NotAcceptableException(`Status ${value} is not a valid status`);
    }

    return value;
  }

}
