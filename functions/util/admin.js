const admin = require('firebase-admin');


const local = 0;

if (local){
    var serviceAccount = require("../../socialape-191b0-firebase-adminsdk-b0nqj-eebb4265d5.json");

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://socialape-191b0.firebaseio.com"
    });
}
else{
    admin.initializeApp();
}

const db = admin.firestore();

module.exports = {admin, db};