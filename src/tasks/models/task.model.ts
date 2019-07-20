import { TaskStatuses } from "../task-statuses.enum";

export interface ITaskModel {
  id: string;
  title: string;
  description: string;
  status: TaskStatuses;
}
