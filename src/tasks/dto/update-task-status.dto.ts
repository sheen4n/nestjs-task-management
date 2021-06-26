import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class UpdateTaskstatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
