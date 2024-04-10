import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task {
    @Prop()
    id: number;

    @Prop()
    task_name: string;

    @Prop()
    task_description: string;

    @Prop()
    assignee_name: string;

    @Prop()
    assignee_email: string;

    @Prop()
    team: string;

    @Prop()
    due_date: string;

    @Prop()
    date_completed: string;

    @Prop()
    priority: string;

    @Prop()
    status: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);