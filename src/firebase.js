import { initializeApp } from 'firebase/app';

const app = initializeApp({
    apiKey: 'AIzaSyCBArQb2HO54hACoVGcK1CsXMTWGWb6Vog',
    authDomain: 'react-quiz-dev-93da4.firebaseapp.com',
    projectId: 'react-quiz-dev-93da4',
    storageBucket: 'react-quiz-dev-93da4.appspot.com',
    messagingSenderId: '484048390815',
    appId: '1:484048390815:web:34f4f48c655178af54f0aa',
    databaseURL: 'https://react-quiz-dev-93da4-default-rtdb.asia-southeast1.firebasedatabase.app',
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID,
});
export default app;
