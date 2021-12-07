# angular-mwe
A minimal working example of an Angular app, from scratch.

## development

Reference for building from scratch rather than cli: [here](https://medium.com/angular-in-depth/setting-up-angular-from-scratch-1f518c65d8ab).

> For a brief walkthrough of angular components "gotcha's", view each commit in order on the "components" branch.
### dependencies

* typescript: `npm i -D typescript`
    * init: `tsc --init`
* angular: 
```
npm i --save 
    @angular/cli \
    @angular/core \
    @angular/compiler \
    @angular/common \
    @angular/platform-browser \
    @angular/platform-browser-dynamic \
    zone.js
```

### required config

In a separate folder, run: `ng new project-name`
Copy `angular.json` into root.

### environment

`npm run dev` from root.

