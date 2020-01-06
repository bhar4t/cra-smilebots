# Project Starter Kit v2
# SmileBots React+Firebase Sample Codebase

A complete app example showing adding/updating/removing data from Firestore

## How was it Started?

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Folder Structure

**components/** - the original directory for presentational components. Most of our presentational components still live here.

**containers/** - the original directory for containers.

**layouts/** - This is the only other directory that holds presentational components. These presentational components are specifically concerned with how an entire page in our application is laid out

**pages/** - Pages are containers that pull in all of the presentational components and sub-containers for a particular application view. All of our pages start with a layout component and add children from there. These are what are called by the router

**firebase/** - This is for all of our firebase related code.

**styles/** - Self-explanatory. Basically, this is where you put the colors.js file.

For the project to build, **these files must exist with exact filenames**:

- `index.html` is the page template;
- `favicon.ico` is the icon you see in the browser tab;
- `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.  
You need to **put any JS and CSS files inside `src`**, or Webpack won’t see them.

You can, however, create more top-level directories.  
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Styling

We are using Prettier by default. To use it in VSCode:

1. Install this in VSCode : https://github.com/prettier/prettier-vscode
   ----or----
1. Search for `Prettier Code Formatter` by Esben Petersen
1. Go to Preferences -> Text Editor -> Formatting -> Format on Save (or any other if you prefer)

⚠ A word of warning-if you have any other code formatting extensions installed such as for example hugely popular `Beautify` or `HookyQR.beautify` or taichi.react-beautify they might take precedence and format your code instead of Prettier leading to unexpected results. So disable them before proceeding.

## Using Firebase and Auth

To use firebase db, use the `withFirebase` HOC which gives you two props:
`firebase` - contains the main firebase functions
`db` - contains reference to the firestore db

To get the user object, use the `withUser` HOC which gives you one prop:
`user` - contains null if the user is logged out, else gives you the user object
