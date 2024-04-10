import { Controller, Get, Inject, Req } from "@nestjs/common";
import { Request } from "express";
import { Task } from "src/schemas/task.schema";
import { TaskService } from "src/services/task.service";

@Controller('tasks')
export class TaskController {
    constructor(@Inject(TaskService) private readonly taskService: TaskService) { }

    @Get('all')
    findAll(): Promise<Task[]> {
        return this.taskService.findAll();
    }
}
