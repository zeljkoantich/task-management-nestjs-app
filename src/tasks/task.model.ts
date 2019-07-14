export interface ITaskModel {
  id: string;
  title: string;
  description: string;
  status: TaskStatuses;
}

export enum TaskStatuses {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
  DONE = "DONE"
}
