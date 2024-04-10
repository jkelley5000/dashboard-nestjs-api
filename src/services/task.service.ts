import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Task } from "src/schemas/task.schema";

@Injectable()
export class TaskService {
    constructor(@InjectModel(Task.name) private taskModel: Model<Task>) { }

    async findAll(): Promise<Task[]> {
        return this.taskModel.find().exec();
    }
}
