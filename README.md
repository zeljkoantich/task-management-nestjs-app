# Nest.js RESTful API App

## Objectives
  - NestJS Modules
  - NestJS Controllers
  - NestJS Services and Providers
  - Controller-to-Service communication
  - Validation using NestJS Pipes
---
<br>

## Objectives: Back-end & Architecture
 - Develop production-ready REST APIs
 - CRUD operations ( Create, Read, Update, Delete )
 - Error handling
 - Data Transfer Objects ( DTO )
 - System modularity
 - Back-end development best practices
 - Logging
 - Security best practices
---
<br>


## Objectives: Data Persistance
 - Connecting the app to a database
 - Working with relational databases
 - Using TypeORM
 - Writing simple and complex queries using QueryBuilder
 - Performance when working with a database
---
<br>

## Objectives: Authorization/Authentication
 - Signing up, singing in
 - Authentication and Authorization
 - Protected resources
 - Ownership of tasks by users
 - Using JWT tokes ( JSON Web Tokens )
 - Password hashing, salts and properly storing passwords
---
<br>

## Objectives: Deployment
 - Polishing the application for production use
 - Deploying NestJS app to AWS
 - Deploying front-end applications to Amazon S3
 - Wiring up the front-end and back-end
---
<br>


## Application Structure

```
                                AppModule ( root )


------------------------------------     -----------------------------------
|           TaskSModule            |     |          AuthModule             |
|                                  |     |                                 |
|  - TasksController               |     |       - AuthController          |
|  - TasksService                  |     |       - AuthService             |
|  - StatusValidationPipe          |     |       - UserEntity              |
|                                  |     |       - UserRepository          |
|  - Data persistance with TypeORM |     |       - JWTStrategy             |
|          TaskEntity              |     |                                 |
|        TaskRepository            |     |                                 |
------------------------------------     -----------------------------------



                              API Endpoints - Tasks


  Endpoint                   Method          Description
----------------------------------------------------------------------------
| /tasks                     GET             Get tasks ( incl. filters )   |
|                                                                          |
| /tasks/:id                 GET             Get a task                    |
|                                                                          |
| /tasks                     POST            Create a task                 |
|                                                                          |
| /tasks/:id                 DELETE          Delete a task                 |
|                                                                          |
| /tasks/:id/status          PATCH           Update task status            |
----------------------------------------------------------------------------



                              API Endpoints - Auth


  Endpoint                   Method          Description
----------------------------------------------------------------------------
| /auth/signup               POST            Sign up                       |
| /auth/signin               POST            Sign in                       |
----------------------------------------------------------------------------

```

<br>

## NestJS CLI - create app

    nest new task-managment
    🚀  Successfully created project task-managment
    👉  Get started with the following commands:

    $ cd task-managment
    $ npm run start


- Running the app

  ```bash
  # development
  $ npm run start

  # watch mode
  $ npm run start:dev

  # production mode
  $ npm run start:prod
  ```

- Test

  ```bash
  # unit tests
  $ npm run test

  # e2e tests
  $ npm run test:e2e

  # test coverage
  $ npm run test:cov
  ```
