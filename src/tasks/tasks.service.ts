import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task-dto';
import { UpdateTaskDto } from './dto/update-task-dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((t) => t.id === id);
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;

    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }

  deleteTaskById(id: string): void {
    this.tasks = this.tasks.filter((t) => t.id != id);
    return;
  }

  updateTaskById(id: string, updateTaskDto: UpdateTaskDto): Task {
    const { status } = updateTaskDto;

    const taskIdToUpdate = this.tasks.findIndex((t) => t.id === id);
    const taskToUpdate = this.tasks[taskIdToUpdate];
    taskToUpdate.status = status;
    return taskToUpdate;
  }
}
