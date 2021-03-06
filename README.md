# RentoMojo Assignment Frontend
The project consists of two parts - The Frontend created using Angular and the backend created using  Node.Js and Express. \
This Fronend is a Single Page Application (SPA) which consists of Login, Signup and the post page. The Post page is a protected route that can be only accessed when a user is logged in. The post page is used to `post`, `upvote` and `downvote` comments \
The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Directory Structure

```
   |-- RentoMojo
       |-- .editorconfig
       |-- .gitignore
       |-- angular.json
       |-- package-lock.json
       |-- package.json
       |-- README.md
       |-- tsconfig.json
       |-- tslint.json
       |-- .idea
       |   |-- encodings.xml
       |   |-- misc.xml
       |   |-- modules.xml
       |   |-- RmAssignmentFrontend.iml
       |   |-- vcs.xml
       |   |-- watcherTasks.xml
       |   |-- workspace.xml
       |   |-- codeStyles
       |   |   |-- codeStyleConfig.xml
       |   |   |-- Project.xml
       |   |-- inspectionProfiles
       |       |-- Project_Default.xml
       |-- e2e
       |   |-- protractor.conf.js
       |   |-- tsconfig.e2e.json
       |   |-- src
       |       |-- app.e2e-spec.ts
       |       |-- app.po.ts
       |-- src
           |-- bootstrap.css
           |-- browserslist
           |-- favicon.ico
           |-- index.html
           |-- karma.conf.js
           |-- main.ts
           |-- polyfills.ts
           |-- styles.scss
           |-- test.ts
           |-- tsconfig.app.json
           |-- tsconfig.spec.json
           |-- tslint.json
           |-- app
           |   |-- app-routing.module.ts
           |   |-- app.component.html
           |   |-- app.component.scss
           |   |-- app.component.spec.ts
           |   |-- app.component.ts
           |   |-- app.module.ts
           |   |-- components
           |   |   |-- comments
           |   |   |   |-- comments.component.html
           |   |   |   |-- comments.component.scss
           |   |   |   |-- comments.component.spec.ts
           |   |   |   |-- comments.component.ts
           |   |   |-- login
           |   |   |   |-- login.component.html
           |   |   |   |-- login.component.scss
           |   |   |   |-- login.component.spec.ts
           |   |   |   |-- login.component.ts
           |   |   |-- navbar
           |   |   |   |-- navbar.component.html
           |   |   |   |-- navbar.component.scss
           |   |   |   |-- navbar.component.spec.ts
           |   |   |   |-- navbar.component.ts
           |   |   |-- post
           |   |   |   |-- post.component.html
           |   |   |   |-- post.component.scss
           |   |   |   |-- post.component.spec.ts
           |   |   |   |-- post.component.ts
           |   |   |-- register
           |   |       |-- register.component.html
           |   |       |-- register.component.scss
           |   |       |-- register.component.spec.ts
           |   |       |-- register.component.ts
           |   |-- models
           |   |   |-- comments.ts
           |   |   |-- dataInterfaces.ts
           |   |-- services
           |       |-- auth-guard.service.spec.ts
           |       |-- auth-guard.service.ts
           |       |-- authentication.service.spec.ts
           |       |-- authentication.service.ts
           |-- assets
           |   |-- .gitkeep
           |-- environments
               |-- environment.prod.ts
               |-- environment.ts

```


## Running Locally

Run `git clone https://github.com/arealdeadone/rentomojo_frontend.git` to clone the project to a local directory. \
Run `npm install` to install the dependencies \
Run `ng serve` to start the local development server

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Project Workflow

The root page is the login page, which can be used to login. This redirects to the post page, where the user can post, upvote and downvote comments. The register page can be used to register new users. The authentication system is implemented in order to ensure that the comments can be identified by users.
