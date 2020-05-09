import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TasksModule } from "./tasks/tasks.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "./config/typeorm.config";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
