import { TypeOrmModuleOptions } from "@nestjs/typeorm";

// back form current directory, any folder, any file that ends with '.entity.ts'
// const entitiesLocation = `${__dirname}/../**/*.entity.ts`; // if .ts error: EntityMetadataNotFound: No metadata for "TaskEntity" was found.

const entitiesLocation = `${__dirname}/../**/*.entity.js`;

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  port: 5432,
  username: "postgres",
  database: "taskmanagement",
  password: "postgres",
  host: "localhost",
  entities: [ entitiesLocation ], // tables
  synchronize: true
};
