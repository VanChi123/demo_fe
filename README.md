# DemoFe

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.4.

## Kết nối BE (Spring Boot - thư mục `../be`)

- Yêu cầu Node `^22.22.3` (máy dùng nvm-windows: `nvm use 22.23.2`).
- Chạy BE ở `http://localhost:8080`, sau đó chạy FE: `npm start`.
- Dev: mọi request `/api/**` từ FE được `ng serve` proxy sang BE theo [proxy.conf.json](proxy.conf.json).
- Base URL API cấu hình trong [src/environments](src/environments) (`apiUrl`).
- Nếu FE gọi thẳng BE khác origin (không qua proxy), thêm origin của FE vào `app.cors.allowed-origins` trong `be/src/main/resources/application.properties`.
- Trang mẫu kiểm tra kết nối: `http://localhost:4200/` (gọi `GET /api/demo/ping` và `POST /api/demo/echo`).

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
