import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDi1It8iKZcyoz1WhouO__6IuDVHsMI3N0",
    authDomain: "thuto-lwethu.firebaseapp.com",
    databaseURL: "https://thuto-lwethu.firebaseio.com",
    projectId: "thuto-lwethu",
    storageBucket: "thuto-lwethu.appspot.com",
    messagingSenderId: "150966290157"
};

firebase.initializeApp(config);

export default firebase;