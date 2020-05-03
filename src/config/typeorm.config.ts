import { TypeOrmModuleOptions } from "@nestjs/typeorm";

/**
 * USE THIS WHEN DEBUGGING: npm run start:debug
 */
// (back form current directory, any folder, any file that ends with '.entity.ts')
// tslint:disable-next-line: max-line-length
const entitiesLocationDebug = null; // `${__dirname}/../**/*.entity.ts`; // if .ts error: EntityMetadataNotFound: No metadata for "TaskEntity" was found.

/**
 * USE THIS WHEN DEVELOPING: npm run start:dev
 */
const entitiesLocationDev = `${__dirname}/../**/*.entity.js`;

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "postgres",
  port: 5432,
  username: "taskmanagement",
  database: "taskmanagement",
  password: process.env.TASKMANAGEMENT_ADMIN,
  host: "localhost",
  entities: [ entitiesLocationDebug || entitiesLocationDev ], // tables
  synchronize: true
};
