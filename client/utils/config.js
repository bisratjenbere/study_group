import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCwGh-mbgR9P60YkmmxF4gO-5NbrnA3zhk",
  authDomain: "image-2df3e.firebaseapp.com",
  projectId: "image-2df3e",
  storageBucket: "image-2df3e.appspot.com",
  messagingSenderId: "639995543739",
  appId: "1:639995543739:web:dc291f53bc464fb0e8699e",
  measurementId: "G-8QP93QQQ3G",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export default app;
