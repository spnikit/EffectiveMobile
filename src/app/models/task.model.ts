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

export interface TaskStore {
  tasks: Task[];
  filters: {
    statusFilter?: TaskStatus;
  };
}

export type TaskPriority = `${TaskPriorityEnum}`;
export type TaskStatus = `${TaskStatusEnum}`;

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
