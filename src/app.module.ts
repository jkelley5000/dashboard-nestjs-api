import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './modules/task.modules';

const mongodbConnectionString = 'mongodb://localhost:27017/tasks';

@Module({
  imports: [
    MongooseModule.forRoot(mongodbConnectionString),
    TaskModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
