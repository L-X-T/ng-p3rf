# 02 Build Analysis

<!-- TOC -->

- [Source Map Explorer](#source-map-explorer)
  - [Bonus: Analyze the build of your app](#bonus-analyze-the-build-of-your-app)
- [Bundle Analyzer](#bundle-analyzer)
  - [For NG < 16 (or >= 16 and not yet using Vite) run the Webpack Bundle Analyzer](#for-ng--16-or--16-and-not-yet-using-vite-run-the-webpack-bundle-analyzer)
  - [For NG >= 16 (using Vite + esbuild) run the Vite Bundle Visualizer](#for-ng--16-using-vite--esbuild-run-the-vite-bundle-visualizer)
- [Bonus: Check out the import dependencies](#bonus-check-out-the-import-dependencies)
  <!-- TOC -->

In this lab we'll get to the most important builds analysis tools for Angular apps.

## Source Map Explorer

The `Source Map Explorer` is a tool that shows you the size of your JavaScript files in your Angular app. It shows you a treemap to help you debug where all the code is coming from. It is said to be more accurate than `WBA`. The drawback is that it's visualization is not as colorful (beautiful).

To use the `Source Map Explorer` you need to build your Angular app with source maps. Either set `sourceMap: true` in your `angular.json` or use the `--source-map` flag when building the app. Look into your `package.json`.

Create and check out the source maps by running this script:

```shell
npm run build:sme
```

### Bonus: Analyze the build of your app

Now try running the `Source Map Explorer` for your own Angular app.

## Bundle Analyzer

### For NG < 16 (or >= 16 and not yet using Vite) run the Webpack Bundle Analyzer

Look into your `package.json` again. There you'll find some scripts to build the app including a `stats.json` file which will then be used by `Webpack Bundle Analyzer` to create a nice tree map of your build.

Check it out by running the script:

```shell
npm run build:wba
```

### For NG >= 16 (using Vite + esbuild) run the Vite Bundle Visualizer

It's not possible to use the `Webpack Bundle Analyzer` with `Vite`. However, you can use the `vite-bundle-visualizer` instead.

Run it by:

```shell
npm run vbv
```

## Bonus: Check out the import dependencies

In your `package.json` there is another script for running the `Import Graph Visualizer`. If `IGV` starts, you should select your `src/main.ts` as the **Import source** to see all imports in the whole app. You can then select an **Import target**, like for example `@angular/core/rxjs-interop` - to see if the app is already using that new stuff.
Notice that `IGV` even follows lazy-loading imports via the `app.routes.ts`.

If you want to run the `IGV` for your own project as well, you may need to adjust the paths of the `main.ts` and the `tsconfig.json` from the script command.
