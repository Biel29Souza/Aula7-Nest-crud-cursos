import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { CourserController } from './courses/courser.controller';
import { StudentModule } from './student/student.module';


@Module({
  imports: [CoursesModule, StudentModule],
  controllers: [AppController, CourserController],
  providers: [AppService],
})
export class AppModule {}
