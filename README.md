# Angular Giphy app

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

```
Angular CLI: 10.2.0
Node: 10.16.3
OS: darwin x64
```

## Installation

Run `npm i` to install all dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# Architecture, Explanation and more

To sum-up, the application has two very simple modules. The main module (application module) and search feature module (lazy loaded). All Giphy search related features, components (5 components) are included in that module just to have some separation of concerns.

I always work with two things in mind. My code should be easy to change (future maintainability) and I do not like to repeat (DRY).

While working on this small project I tried showing that I care about clean readable maintainable extendable code.

I have used RXJS events mostly to reduce the size of the code and hopefully the functionality. I have used a "Layout" component to illustrate that it is possible to extend this architecture and to adopt "Input/Output" communication between components as well as the RXJS (event driven) approach.

Data and events are managed in a single place (the Giphy Service) and it's considered to be the source of truth... it somewhat represents NGRX data tree approach.

## Libraries, packages and components

I have not used any UI library (material UI or bootstrap). I like creating detailed custom components, that you can find on my GitHub profile. Collection of different simple small apps that are all made of custom components and custom interactions. 

I chose to use SCSS since I can create faster with it and provides readability.

When it comes to filtering profanity, I chose to use `censor-sensor`  since I do not want to maintain a generic list of slurs, common profanity etc. in the application. Additionally, it provides "Tires" of words. You might want to filter out slurs, but not common profanity. You can do that using this package.

https://www.npmjs.com/package/censor-sensor


## Possible improvements

All said and done, I enjoyed working on it, I kept it simple, short.

The main issue in my opinion is lack of e2e/integration testing.

## ONE. MORE. THING.

- There is strict typing. Everywhere.
- Prettier
- No lint issues.
- No build issues.
- Design has been inspired by https://www.uidesigndaily.com/
- Environment variable dictates the API key
- Made use of Reactive forms

## Check my other projects

If you read this far, make sure you follow me on LinkedIn and GitHub, so we can stay connected.

My open source projects and sample code: https://github.com/codacy20

LinkedIn: https://www.linkedin.com/in/amirkiumarsi/

## Where can I see this projects code

Code is hosted here: https://github.com/codacy20/angular-ts-giphy

Application is deployed here: https://affectionate-curie-b2ffc8.netlify.app/
