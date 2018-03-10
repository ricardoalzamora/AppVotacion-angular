// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyAiIG8dSCHrL7aSs8YnJp6t9z-mVeecqiA",
    authDomain: "angularvotacion.firebaseapp.com",
    databaseURL: "https://angularvotacion.firebaseio.com",
    projectId: "angularvotacion",
    storageBucket: "angularvotacion.appspot.com",
    messagingSenderId: "209034639425"
  }
};
