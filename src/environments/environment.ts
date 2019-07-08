// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/**
*Credenciales de Firebase:
*/
export const environment = {
  production: false,
  firebase: {
  	apiKey: "AIzaSyDdh_e6e51Bmbtqv4ueDqsYk4kxkjzC8E4",
  	authDomain:"fixlab-storage.firebaseapp.com",
  	projectId: "fixlab-storage",
  	storageBucket: "fixlab-storage.appspot.com"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
