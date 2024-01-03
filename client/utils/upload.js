import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

import { storage } from "./config";

const uploadImage = async (uri, imageName) => {
  try {
    const response = await fetch(uri);
    const blob = await response.blob();
    const fileRef = `images/${Date.now()}`;
    const imageRef = ref(storage, fileRef);
    await uploadBytes(imageRef, blob);

    const downloadURL = await getDownloadURL(imageRef);
   

    return downloadURL;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { uploadImage };
