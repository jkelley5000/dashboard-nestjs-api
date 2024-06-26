import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TaskController } from "src/controllers/task.controller";
import { TaskService } from "src/services/task.service";
import { Task, TaskSchema } from "src/schemas/task.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }])],
    controllers: [TaskController],
    providers: [TaskService]
})
export class TaskModule { }