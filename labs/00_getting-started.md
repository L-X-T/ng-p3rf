# 00 Getting Started

<!-- TOC -->

- [Before you start - check required software](#before-you-start---check-required-software)
- [If you use IntelliJ / WebStorm: Getting started with IntelliJ / WebStorm](#if-you-use-intellij--webstorm-getting-started-with-intellij--webstorm)
- [If you use Visual Studio Code: Getting started with Visual Studio Code](#if-you-use-visual-studio-code-getting-started-with-visual-studio-code)
- [Take a closer look at the starter kit](#take-a-closer-look-at-the-starter-kit)
- [TL;DR](#tldr)
  <!-- TOC -->

This lab will get you started.

Note: If you already have a lot of experience with Angular jump directly to the [TL;DR](#tldr).

## Before you start - check required software

- [NodeJS](https://nodejs.org/en/) in a current LTS version, we recommend using
  - [NVM](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) for Windows/Linux or
  - [Homebrew](https://brew.sh/) for macOS
- IDE / Editor
  - [Visual Studio Code](https://code.visualstudio.com/) (free) _or_
  - IntelliJ / [WebStorm](https://www.jetbrains.com/webstorm/) (or [PhpStorm](https://www.jetbrains.com/phpstorm/), commercial)
- Angular CLI (`npm i -g @angular/cli`)
  - If installation fails b/c of local firewall settings, you can also work without the CLI by using `npx`, please ask me if further assistance is needed.

## If you use IntelliJ / WebStorm: Getting started with IntelliJ / WebStorm

> If you use Visual Studio code, you can skip this section.

In this part of the tutorial, you will pull (or download & extract the `....zip`) the starter kit and run it.

Tip: Install and checkout the following useful tools for developing with Angular:

- [Angular Plugin](https://plugins.jetbrains.com/plugin/6971-angular-and-angularjs)
- [Prettier](https://www.jetbrains.com/help/phpstorm/prettier.html)

1. Pull the starter kit:

   https://github.com/L-X-T/...

   If you are using Linux, you should add the execution flag (x) to all files in the folder `node_modules\.bin` with `chmod`: `chmod -R +x  node_modules`.

2. Open the starter kit in WebStorm/IntelliJ. This is the folder containing the `package.json`.

3. Switch to the terminal and install all dependencies with:

   ```shell
   npm i
   ```

   or

   ```shell
   yarn
   ```

4. Now you can run the development server with `npm start`.

   ![](https://i.imgur.com/7YG65wz.png)

   If you do not want to run the project in the IDE, you can also use `cmd` (under Windows) or `bash` (under Linux and OS X) to open a shell in the root of the project and use `npm start`.

5. Open the demo in your browser (preferably a Chromium): http://localhost:4200. You should now see the demo application.

   If and only if this port is already taken, you can change adjust it in the project root's `package.json` file. To do this, add the `--port` option to the node scripts / start:

   ```json
   "scripts": {
       "start": "ng serve --port 4242", [...]
   }
   ```

## If you use Visual Studio Code: Getting started with Visual Studio Code

> If you are using IntelliJ/WebStorm, you can skip this section.

In this part of the exercise, you will extract the starter kit (`....zip`) and run it.

Tip: Install the following useful plugins for developing with Angular:

- [Angular Context Creator](https://marketplace.visualstudio.com/items?itemName=sjuulwijnia.kx-vscode-angular-context-creator)
- [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)

In this part of the tutorial, you will pull (or download & extract `....zip`) the starter kit and run it.

1. Pull the starter kit:

   https://github.com/L-X-T/...

   If you are using Linux, you should use `chmod` to add the execution flag (x) to all files in the `node_modules/.bin` folder: `chmod -R +x  node_modules`.

2. Open the starter kit in Visual Studio Code.

3. Change to the command line (`CTRL+SHIFT+C`) or to the integrated Terminal (`CTRL+SHIFT+ö`)

4. Switch to the terminal and install all dependencies with:

   ```shell
   npm i
   ```

   or

   ```shell
   yarn
   ```

5. Now you can run the starter kit with `npm start` or `yarn start`.

   Note: The development server does not put the required bundles on the disk but only keeps them in the main memory. When you change the source files, it recreates the bundles and then notifies the browser.

6. Open the demo in your browser (preferably a Chromium): http://localhost:4200. You should now see the demo application.

   If and only if this port is already taken, you can change adjust it in the project root's `package.json` file. To do this, add the `--port` option to the node scripts / start:

   ```json
   "scripts": {
       "start": "ng serve [...] --port 4242", [...]
   }
   ```

## Take a closer look at the starter kit

In this part, you will take a closer look at the starter kit to familiarize yourself with it.

> **Important hint:** During **all** the labs, use `CTRL`+`p` in Visual Studio Code to quickly jump to a specific file. You can do the same by pressing `SHIFT` twice in WebStorm/PhpStorm/IntelliJ.

1. Look at the component in the `app.component.ts` and `app.component.html` in the `src/app` folder and find out what they do.

2. Note that the `app.component.html` has an element `<router-outlet />`. This is the placeholder for the router.

3. Look at the `index.html` file.

4. If you have not already done so, start the development web server:

   ```shell
   npm start
   ```

5. If you have not already done so, open the project in your browser.

## TL;DR

1. If you have not already done so, install dependencies:

   ```shell
   npm i
   ```

   or

   ```shell
   yarn
   ```

2. If you have not already done so, start the development web server:

   ```shell
   npm start
   ```

   or

   ```shell
   yarn start
   ```

3. Open the demo in your browser (preferably a Chromium): http://localhost:4200.

   You should now see the demo application.

4. Now start inspecting the workspace and the source code.
