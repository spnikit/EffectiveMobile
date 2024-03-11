export interface Task {
  id: string;
  title: string;
  name: string;
  dueTo: string;
  priority: TaskPriority;
  status: TaskStatus;
  assignees: Assignee[];
}

export interface Assignee {
  id: string;
  name: string;
}

type TaskPriority = `${TaskPriorityEnum}`;
type TaskStatus = `${TaskStatusEnum}`;

export enum TaskPriorityEnum {
  low = 'low',
  medium = 'medium',
  high = 'high',
}

export enum TaskStatusEnum {
  idle = 'idle',
  inProgress = 'in-progress',
  done = 'done',
}
