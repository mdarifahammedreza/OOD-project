## Configuration

Clone the application from github using given git command.

```ssh
    [https://github.com/mdarifahammedreza/OOD-project.git]
```
and differ the front and back folder, this setup is only for backend
Then open application directory and open it to your favourite code editor, then go to src/main/resources and open application.properties file to your code editor and add your database URL, username and password. An example given below:

```
spring.datasource.url=jdbc:mysql://172.20.0.1:3306/<DATABASENAME>
spring.datasource.username=<DATABASE USERNAME>
spring.datasource.password=<DATABASE PASSWORD>
```

Finally all environment setup successfully completed, Now run the application and browse given API endpoints to your postman.

## Modules

There are 2 main modules need in application prototypes:

1. Category
2. Book

## Available API endpoints:

    - Category
        - [GET] http://localhost:8081/api/v1/categories
        - [POST] http://localhost:8081/api/v1/categories
        - [GET] http://localhost:8081/api/v1/categories/:id
        - [PUT] http://localhost:8081/api/v1/categories/:id
        - [DELETE] http://localhost:8081/api/v1/categories/:id

    - Book
        - [GET] http://localhost:8081/api/v1/books
        - [POST] http://localhost:8081/api/v1/books
        - [GET] http://localhost:8081/api/v1/books/:id
        - [PUT] http://localhost:8081/api/v1/books/:id
        - [DELETE] http://localhost:8081/api/v1/books/:id
