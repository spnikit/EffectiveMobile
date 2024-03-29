import {Assignee, TaskPriority, TaskStatus, TaskStatusEnum} from './task.model';

export const TASK_PRIORITY: TaskPriority[] = ['low', 'medium', 'high'];
export const TASK_STATUS: TaskStatus[] = ['idle', 'in-progress', 'done'];
export const ASSIGNEES: Assignee[] = [
  { id: '1', name: 'John Doe' },
  { id: '7', name: 'Olivia Martinez' },
  { id: '2', name: 'Jane Smith' },
  { id: '3', name: 'Alice Johnson' },
  { id: '4', name: 'Bob Williams' },
  { id: '5', name: 'Eva Brown' },
  { id: '6', name: 'Michael Wilson' },
  { id: '8', name: 'William Jones' },
  { id: '9', name: 'Sophia Garcia' },
  { id: '10', name: 'Liam Brown' },
];
export const LOCAL_ST_TASK_KEY = 'task';
export const FILTER_STATUS_OPTIONS = [
  {label: 'Idle', value: TaskStatusEnum.idle},
  {label: 'In Progress', value: TaskStatusEnum.inProgress},
  {label: 'Done', value: TaskStatusEnum.done}
]
