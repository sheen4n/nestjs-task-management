import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task.model';

export class UpdateTaskstatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
