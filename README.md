# MyApp

## Prerequisites

- Install node 16.15.0
- Install Xcode (Version 14.1)
- Install android studio (Version 2021.3)
- Install yarn using `npm i -g yarn` (Version 1.22.18)

## Dependencies

- axios - for networking.
- react-native-config - to manage environments.
- react-navigation - navigation library.
- jest and react-test-renderer - for testing.

## Instructions to setup dev env

- From the root project folder run `yarn install` to install dependencies
- From the root project folder run `yarn android` to run the Android app
- Goto ios folder and run the `pod install`(use `arch -x86_64 pod install` for apple chip machine) command. (If you don’t have cocoapods installed, please install them)
- Cocoa pod setup - https://guides.cocoapods.org/using/getting-started.html - (Version 1.11.3)
- From the root project folder run `yarn ios` to run the ios app (Please run anyone at a time, either Android or iOS)
- If the simulators are not set up, please set up them from Xcode or android studio.

## To run other environments

-  Delete .env file from the project root
- `yarn start --reset-cache`

## For production build run

- `yarn ios`
- `yarn android`

## For staging build run

- `yarn ios-stag`
- `yarn android-stag`

## Deep-linking

## What is deep-linking

- Deep linking is a mobile app development technique that enables a user to directly access specific content within an app. In the case of resetting a password, deep linking can allow a user to directly access the reset password screen within the mobile app, bypassing the need to navigate through the app's homepage and menus to find the reset password option. This can enhance the user experience and make the password reset process more convenient for the user.

- `npx uri-scheme add MyAppapp:// --ios`
- `npx uri-scheme open MyAppapp:// --ios`

- `npx uri-scheme add MyAppapp:// --android`
- `npx uri-scheme open MyAppapp:// --android`

- `npx uri-scheme open MyAppapp://SignIn --android`
- `npx uri-scheme open MyAppapp://SignIn --ios`

## Example for passing value to some screen with deep-linking

- `npx uri-scheme open MyAppapp://ResetPassword/8656603b-7c9a-426b-8952-a8e08f463516 --android`
- `npx uri-scheme open MyAppapp://ResetPassword/8656603b-7c9a-426b-8952-a8e08f463516 --ios`

## Link new custom fonts

- Add your font file to the asset folder
- Path should be `assets->fonts->Inter-Bold.ttf`
- Use this command to link the font with Android and iOS `npx react-native-asset`

## Folder structure

## **tests**

- The **tests** folder is a convention in Jest for organizing test files for a project.

## .husky

- .husky is a folder that is used in conjunction with Husky, a tool for creating Git hooks in a project.
- Git hooks are scripts that run automatically at certain points in the Git workflow, such as before or after a commit, push, or pull request.
- It contains subfolders with names that correspond to specific Git hooks (e.g. pre-commit, post-merge, etc.), and within each of these subfolders, you can place shell scripts that will be run when the corresponding Git hook is triggered.

## .vscode

- It is used to configure the Visual Studio Code (VS Code) editor for a specific project.

## android

- These folders contain the native code for Android platforms.
- Developers can make changes to these folders if they need to implement custom native functionality with Android.

## assets

- This folder contains static assets such as images, fonts, and videos used in the application.

## Automation

- The automation folder is used to store automated testing scripts and related files.

## coverage

- The coverage folder is typically generated as part of running automated tests in a React Native project.
- It contains reports on the test coverage of the application's source code, indicating which parts of the code have been tested and which have not.

- The coverage folder may contain several files, including:

  `index.html:`

  - This file contains the main test coverage report, which can be viewed in a web browser. The report typically includes information on the percentage of code that has been tested, as well as details on individual files, functions, and lines of code.

  `lcov.info:`

  - This file contains detailed information on the test coverage, including which lines of code have been executed during the tests.

  `lcov-report:`

  - This folder contains detailed HTML reports on the test coverage, including individual files and functions.

## ios

- These folders contain the native code for iOS platforms.
- Developers can make changes to these folders if they need to implement custom native functionality with iOS.

## jest

- The jest folder is a standard folder in a React Native project that contains configuration files and scripts for Jest, a popular testing framework used for testing React Native applications.

## node_modules

- This folder contains all the dependencies that are installed via Node Package Manager (NPM) or Yarn.

## patches

- It is used to store patches or fixes for third-party dependencies.

## MyApp build certificates

- It contains the keystore detail for Android build and certificates and provisioning profiles for iOS.

## src

- This folder is the main container of all the code inside your application.
- src folder contains two different folders `components` and `modules`

  ## components

  - `components` folder contains all the common components of the app.
  - For Example TextInput, Button, RadioButton, Checkbox, etc.

  ## modules

  - This folder contains different modules like `auth, home, downloads, discover, setting,mylist` etc.
  - Each module contains the below folder.

  `api:`

  - contains different files for respected modules API.

  `assets:`

  - assets folder contain the images file which stores all the image of respected modules.

  `components:`

  - contains common components for respected modules.

  `src:`

  - src folder contains different folders `(action, reducer,saga,type)` for handling the redux of resepected modules.
  - It also contains different files for handling the input config data, const data, enum, routes, and validation for respected modules.

  `translations:`

  - This folder contains two different files for handling the strings for English and French languages for respected modules

  `typings:`

  - This folder contains different typing files for respected modules.

  `views:`

  - This folder contains all the screens for respected modules.

  `__tests__:`

  - This folder contains all the snapshot & unit test files for respected modules.

  `__mocks__:`

  - This folder contains all the mock data for the API for respected modules.

- daemon

  - This folder contains the index file which stores all the saga functions.
  - Whenever you create any saga you must have to add its function with this file then only you can call that saga file.
  - This file is a common rootSaga file for all the modules.

- lib

  - This folder contains different helpers file
  - For Example helper, color, method, toast, etc.

- localization

  - This folder contains folders for different languages.
  - each folder contains all the module's translation file paths.
  - Whenever you create any file inside the translation folder with `en` or `fr` you should have to add its path to the respected folder.

## .env.production

- This file contains the API BASE URL, JWPlayer Config detail, and Customer IO config detail for production env.

## .env.staging

- This file contains the API BASE URL, JWPlayer Config detail, and Customer IO config detail for staging env.

## .eslintignore

- The .eslintignore.json file is used to configure ESLint to ignore certain files or directories when running linting checks.
- We have added different folders with .eslintignore files like
  - node_modules
  - coverage
  - metro.config.js
  - babel.config.js
  - jest.config.js
  - build
  - ios
  - android

## .eslintrc.json

- The .eslintrc.json file is used to configure the ESLint linter for our project.
- ESLint is a tool that analyzes your JavaScript code to find and report common errors, coding style inconsistencies, and potential bugs.
- The .eslintrc.json file is used to configure ESLint with specific rules, plugins, and settings.
- By configuring the .eslintrc.json file for your project, you can ensure that your code is consistent, maintainable, and free of common errors.

## .gitignore

- The .gitignore file is used to specify files and directories that should not be tracked by Git.
- It contains a list of files and directories that Git should ignore.
- It's important to include a .gitignore file in our project to prevent unnecessary files from being tracked by Git.
- This can help keep our Git repository clean and reduce the size of your commits.

## .gitlab-ci.yml

- The .gitlab-ci.yml file is used to configure the GitLab CI/CD pipeline.
- It contains a set of instructions that define how GitLab should build, test, and deploy your React Native application.
- By defining the pipeline in the .gitlab-ci.yml file, you can ensure that your application is built and tested in a consistent and automated way.
- You can also use the .gitlab-ci.yml file to deploy your application to various environments based on the branch or tag that triggered the pipeline.

## .lintstagedrc.json

- The .lintstagedrc file is used to configure the lint-staged package.
- This package is a tool that allows you to run linters on files that are staged for commit.
- This can help ensure that code that is committed to your Git repository meets your project's coding standards and is free of common errors.
- By configuring lint-staged, you can ensure that code that is committed to your Git repository is properly formatted and free of common errors. This can help improve code quality and maintainability over time.

## .nvmrc

- The .nvmrc file is used to specify the version of Node.js that should be used for the project.
- It contains a single line with the desired Node.js version.

## .prettierignore

- The .prettierignore file is used to specify files and directories that should be ignored by the Prettier code formatter.
- By including a .prettierignore file in your project, you can ensure that Prettier does not attempt to format files that should not be formatted.
- This can help improve the efficiency of the Prettier formatting process and ensure that your project is consistently formatted according to your specified code style.

## .prettierrc

- The .prettierrc file is used to configure the Prettier code formatter.
- This file contains a set of options that specify how Prettier should format your code.
- By configuring Prettier with a .prettierrc file, you can ensure that your project's code is consistently formatted according to your specified code style.
- This can help improve the readability and maintainability of your code over time.

## app.json

- The app.json file is used to configure various settings related to the app, such as the app's name, version, and bundle identifier.

## assetsTransformer.js

- The assetsTransformer.js file uses Jest as its testing framework, to transform static assets (such as images, fonts, etc.) into something that can be imported and used in the tests.

## babel.config.js

- The babel.config.js file is used to configure Babel, a JavaScript transpiler, which is used to transform modern JavaScript syntax into a version of JavaScript that can be run in older browsers and environments.
- By configuring Babel with a babel.config.js file, you can ensure that your project's JavaScript code is properly transpired and can be run in a wide range of environments.
- This can help ensure that your app is compatible with older devices and browsers, and can help you take advantage of the latest JavaScript syntax and features.

## bitrise.yml

- The bitrise.yml file is a configuration file that is built and deployed using Bitrise, a Continuous Integration and Delivery (CI/CD) platform.
- By configuring the bitrise.yml file with the appropriate steps, you can automate the build and deployment process for your app using Bitrise.

## Gemfile

- The Gemfile is a file using Ruby gems for dependency management.
- It is a plain text file that specifies the Ruby gems that your project depends on, along with their versions.

## index.js

- The index.js file is an entry point file.
- This file is used to bootstrap the application and render the first component on the screen.

## jest.config.js

- The jest.config.js file is a configuration file for Jest.
- This file is used to specify the configuration options for Jest, such as test environment, coverage reporting, and other settings.

## junit.xml

- The junit.xml file is an XML file format used for reporting test results.
- This file is commonly used with testing frameworks such as Jest to generate test reports that can be easily read and analyzed by humans or other software tools.

## metro.config.js

- This file is used to specify the configuration options for Metro, such as customizing the behavior of the bundler and specifying additional files to include in the bundle.

## package.json

- The package.json file is a metadata file that contains various information about the project, including its dependencies, scripts, and other metadata.
- It is a required file in the project.

## react-native.config.js

- This file allows you to define custom configurations for your app, such as additional third-party libraries or native modules.
- You can also use it to define custom build configurations for your app.

## tsconfig.json

- This file is a configuration file used in TypeScript projects to specify compiler options.
- The tsconfig.json file is used to configure the TypeScript compiler and TypeScript compiler to determine how to compile your TypeScript code.

## Deployment steps

### Android 

- Generate a Signed APK: In Android Studio, select "Build" from the top menu and then select "Generate Signed Bundle / APK." Follow the prompts, use an existing keystore(located at `<project root>/MyAppBuildCertificates/Android/MyAppBuildCertificates/Android/MyAppAppKeystoreDetails.rtf`) and then generate a signed APK.
- Open the Google Play Console and select "MyApp" app.
- Click on "Setup" in the left-hand menu and then select "Internal App Sharing."
- Agree to the terms and conditions.
- Drag and drop or browse for the APK file you want to upload.
- Once the upload is complete, a new page will appear with a link to the app. You can copy this link and share it with your testers.
- Before sharing the app with your testers, you can configure the release options such as release name, release notes, and track (beta or alpha).
- To invite testers, go to the "Internal Testers" or "External Testers" page and add their email addresses.
- Share the link with your testers, and they can download and test your app on their Android devices.
- Note that it may take a few hours for the uploaded APK to be available to testers, and the app needs to be published to an internal track before it can be shared with testers. Also, make sure that the APK is signed with the same keystore used to sign the app's previous versions.

### iOS

- Log in to your Apple Developer account and navigate to the "App Store Connect" portal.
- Click on the "My Apps" tab, and select your app. If you haven't already created a record for your app, click on "Add App" to create one.
- Prepare your app for distribution by creating a distribution build. This involves compiling your code, signing your app with a distribution certificate, and creating an archive of your app.(certificates and provisioning profiles are located at `<project root>/MyAppBuildCertificates/iOS`)
- Upload your build to App Store Connect. Navigate to the "TestFlight" tab, click on the "Builds" section, and then click on the plus icon to upload your build.
- Prepare for testing by inviting testers to your app. Navigate to the "Testers" section, and invite testers by email address. You can also create groups of testers for specific builds or features.
- Distribute your app to testers. Navigate to the "Builds" section, and select the build you want to distribute. From there, you can choose to distribute the build to all testers or select specific groups of testers.
- Monitor feedback from testers. Navigate to the "TestFlight" tab, and select the "Feedback" section to view feedback from testers. You can also view crash logs and other diagnostic information to help identify and fix any issues with your app.
