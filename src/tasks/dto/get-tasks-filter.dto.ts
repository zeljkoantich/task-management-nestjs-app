import { TaskStatuses } from "../task-statuses.enum";
import { IsOptional, IsIn, IsNotEmpty } from "class-validator";

export class GetTasksFilterDTO {
  @IsOptional()
  @IsIn(Object.values(TaskStatuses))
  status: TaskStatuses;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
