# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

We advise you run this project via the provided docker-compose file to ensure that all dependencies are installed.

## Start with hot reloading

Run `npm run start:dev` or `docker-compose up dev_frontend` to start the frontend with hot reloading. Navigate to http://localhost:4200 to see the application.
The docker is using the `ng serve` command.

## Start like in production

Run `npm run start:prod` or `docker-compose up prod_frontend` to start the frontend in production mode. Navigate to http://localhost:8080 to see the application.
The docker is using the `ng build` command and a nginx serve.
