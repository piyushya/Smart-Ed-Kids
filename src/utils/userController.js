import { onValue, ref, set, get } from "firebase/database";
import { db, app } from './firebaseConfig.js'

async function getUserData(username){
    const dbRef = ref(db, '/users/' + username);
    let userData = {};
    const snapshot = await get(dbRef);
    snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
        userData[childKey] = childData;
    });
    return userData;
}

function addNewUser(userData){
    const reference = ref(db, '/users/' + userData.username);
    set(reference,{
        "agegroup" : userData.agegroup,
        "language" : userData.language
    })
}

async function userExists(username){
    const userRef = ref(db, '/users/' + username);
    const userSnapshot = await get(userRef)
    if (userSnapshot.exists()) {
        return true
    }
    return false
}

async function updateUserData(){
    //
}

export {
    addNewUser,
    getUserData,
    userExists,
}