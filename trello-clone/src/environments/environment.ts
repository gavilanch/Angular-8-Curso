// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var firebaseConfig = {
  apiKey: "AIzaSyA0l4O8CpoKHNPvGsaN2_hy3UnvXGMnnWQ",
  authDomain: "trello-clone-udemy.firebaseapp.com",
  databaseURL: "https://trello-clone-udemy.firebaseio.com",
  projectId: "trello-clone-udemy",
  storageBucket: "trello-clone-udemy.appspot.com",
  messagingSenderId: "771779400915",
  appId: "1:771779400915:web:db951a82d39c6428"
};

export const environment = {
  production: false,
  firebaseConfig
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
