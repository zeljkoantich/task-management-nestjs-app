import { TypeOrmModuleOptions } from "@nestjs/typeorm";

// back form current directory, any folder, any file that ends with '.entity.ts'
const entitiesLocation = `${__dirname}/../**/*.entity.ts`;

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  port: 5432,
  username: "postgres",
  database: "task_management",
  password: "postgres",
  host: "localhost",
  entities: [ entitiesLocation ], // tables
  synchronize: true
};
