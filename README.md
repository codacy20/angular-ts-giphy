# Angular Giphy app

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).
Angular CLI: 10.2.0
Node: 10.16.3
OS: darwin x64

## Installation

Run `npm i` to install all dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# Architecture, Explanation and more
To summries it, the application has a two very simple modules. the main module (application module) and Search feature module (lazy loaded). All Giphy search related features, components (5 components) are included in that module just to have at least a little bit of seperation of concerns.

I work with two things in mind always. My code should be easy to change (future maintainblity) and I do not like to repeat (DRY).

While working on this small project I tried showing that I care about clean readable maintainble extendable code. 

I have used rxjs events mostly to reduce the size of the code and hopefully the functionality. I have used a "Layout" component to illustrate that it is possible to extend this arcitechture to adopt "Input/Output" communication between components as well as the Rxjs (event driven) approach.

Data and events are managed in a single place (the Giphy Service) and it's considered to be the source of truth... it somewhat represents(mimics) NGRX data managemenet approach. Of course NGRX provides a much more comprehenvisve approach by having reducers, actions etc..

## Short comings
All said and done, I enjoyed working on it, I kept it simple. short and hope you forgive the short comings.

The main issue in my opinion is lack of e2e/integeration testing. And it just requires time and deligance.

## ONE. MORE. THING.
- There is strict typing. Everywhere.
- Prettier
- No lint issues.
- No build issues.
- Design has been inspired by https://www.uidesigndaily.com/
- Enviroment variable dictates the api key
- Made use of Reactive forms


## Check my other projects
if you read this far, make sure you follow me on LinkedIn and Github so we can stay connecteed.

My open source projects and sample code: https://github.com/codacy20


LinkedIn: https://www.linkedin.com/in/amirkiumarsi/


## Where can I see this projects code
Code is hosted here: https://github.com/codacy20/angular-ts-giphy
Application is deployed here: https://affectionate-curie-b2ffc8.netlify.app/