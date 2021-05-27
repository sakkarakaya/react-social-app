import firebase from 'firebase/app'
import 'firebase/auth'

var devConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APP_ID
};

var prodConfig = {}
// Initialize Firebase

const firebaseConfig = process.env.NODE_ENV === "development" ? devConfig : prodConfig

class Firebase {
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.firebaseAuth = firebase.auth();
    }
    async register(displayName, email, password){
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        firebase.auth().currentUser.updateProfile({
            displayName
        })
    }
    login(email, password){
        firebase.auth().signInWithEmailAndPassword(email, password)
    }
    signwithGoogle(){
        const googleProvider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(googleProvider)
    }
    signOut(){
        firebase.auth().signOut()
    }
    forgotPassword(email){
        firebase.auth().sendPasswordResetEmail(email)
    }
}
export default new Firebase()




