import { initializeApp } from 'firebase'

const app = initializeApp({
    apiKey: "AIzaSyAL79-jWIH3skbYhCwmw8XPxuyP6TiqJ20",
    authDomain: "gdv-dicasdefrontend-96280.firebaseapp.com",
    databaseURL: "https://gdv-dicasdefrontend-96280.firebaseio.com",
    projectId: "gdv-dicasdefrontend-96280",
    storageBucket: "gdv-dicasdefrontend-96280.appspot.com",
    messagingSenderId: "5659986340"
})

export const db = app.database()
export const productRef = db.ref('product')