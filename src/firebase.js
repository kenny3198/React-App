import firebase from "firebase/compat/app"
import  "firebase/compat/auth"

const firebaseConfig = firebase.initiliazeApp({
    // your api key
})
export const auth = firebaseConfig.auth();
export default firebaseConfig;