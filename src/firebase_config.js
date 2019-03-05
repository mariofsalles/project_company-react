const Firebase = require('firebase');
const Rebase = require('re-base');

const firebaseConfig = {
  apiKey: "AIzaSyCCAOg9sPCmVOv4SfXr1SrFxeqLxX9g5Y8",
  authDomain: "react-project-7663c.firebaseapp.com",
  databaseURL: "https://react-project-7663c.firebaseio.com",
  projectId: "react-project-7663c",
  storageBucket: "react-project-7663c.appspot.com",
  messagingSenderId: "245013741128"
}
const app = Firebase.initializeApp(firebaseConfig);
const config = Rebase.createClass(app.database());

export const storage = app.storage();
export const auth = app.auth();

export default config;
