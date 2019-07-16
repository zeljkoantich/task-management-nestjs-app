import { TaskStatuses } from "../models/task.model";

export class GetTasksFilterDTO {
  status: TaskStatuses;
  search: string;
}
