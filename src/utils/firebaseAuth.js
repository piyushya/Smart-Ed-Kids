import {app} from './firebaseConfig.js'

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    getAuth,
    signOut,
    fetchSignInMethodsForEmail
} from "firebase/auth";

const auth = getAuth(app);

async function SignUp (email, password) {
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        
        const user = userCredential.user;
        return user;
        // ...
    })
}

async function SignIn (email, password) {
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        return user;
        // ...
    })
}

const isEmailRegistered = async (email) => {
    console.log(email);
    try {
        const methods = await fetchSignInMethodsForEmail(auth, email);
        if (methods.length === 0) {
            return false;
        } else {
            return true;
        }
    } catch (error) {
        console.error('Error checking email:', error);
    }
};

const logout = () => {
    signOut(auth);
};

export {
    auth,
    SignUp,
    SignIn,
    // registerWithEmailAndPassword,
    // sendPasswordReset,
    logout,
    isEmailRegistered
};