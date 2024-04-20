# 05 Server-Side Rendering

<!-- TOC -->

- [Add SSR to your app](#add-ssr-to-your-app)
- [Add prerender routes file for SSG](#add-prerender-routes-file-for-ssg)
  <!-- TOC -->

In this lab we will further improve the initial load of our `ng-p3rf` app by using server-side rendering. Once again, you could also apply the same optimizations to your own App - if you prefer to do that. Please keep in mind that this only works for **public** routes which are not dependent on a **login**.

## Add SSR to your app

To begin with, we need to add Angular Universal to our app:

```
ng add @angular/ssr
```

Note that, since we're using Angular 17, the fantastic `Hydration` feature was already added automatically to our `app.config.ts`:

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    [...],
    provideClientHydration(),
  ],
};
```

Now look into your `package.json` for the new SSR npm script:

```json
"serve:ssr:ng-p3rf": "node dist/ng-p3rf/server/server.mjs"
```

Also, make sure you update the `dist` directory to include `/browser` in the other scripts:

```json
"build:serve": "ng build && serve dist/ng-p3rf/browser -s",
"serve": "serve dist/ng-p3rf/browser -s",
[...]
"build:sme": "ng b && source-map-explorer dist/ng-p3rf/browser/**/*.js",
"sme": "source-map-explorer dist/ng-p3rf/browser/**/*.js",
[...]
```

Now try out SSR on your localhost! If you run the `ng b(uild)`, it will create a `server` folder with the server app!

Important note: In the latest version prerendering is on by default, so there is no extra step needed to enable it. Just build your app and see the magic happen! However you can disable prerendering by setting the `prerender` option `discoverRoutes` to `false` in your `angular.json`:

```json
"server": "src/main.server.ts",
"prerender": {
  "discoverRoutes": false
},
"ssr": {
  "entry": "server.ts"
},
```

## Add prerender routes file for SSG

You can add the dynamic **routes** you want to be prerendered manually into your `angular.json`:

```json
"server": "src/main.server.ts",
"prerender": {
  "routesFile": "angular-ssg-routes.txt"
},
"ssr": {
  "entry": "server.ts"
}
```

Add the `angular-ssg-routes.txt` file to the root of your project:

```txt
/flights/flight-edit/1;showDetails=true
/flights/flight-edit/2;showDetails=true
/flights/flight-edit/3;showDetails=true
/flights/flight-edit/4;showDetails=true
/flights/flight-edit/5;showDetails=true
```

Build your app once more to see if the added routes have been prerender successfully!
