import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot } from "firebase/firestore";
import { db, storage } from "../Configurations/FirbaseConfiguration/firebase.config";
import { productEntity } from "../lib/productEntities";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export const getAllProducts = (callback) => {
    try {
        const q = collection(db, productEntity);

        return onSnapshot(q, (snapshot) => {
            const productsList = snapshot.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
            });
            callback(productsList);
        });

    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

export const getProductDetail = async (id) => {
    return new Promise(async (res, rej) => {
        const docRef = doc(db, `${productEntity}/${id}`);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            res(docSnap.data());
        } else {
            rej("not found");
        }
    })
}

export const deleteProduct = async (id) => {
    await deleteDoc(doc(db, `${productEntity}/${id}`));
}

export const addProduct = async (data) => {
    const imageUrl = await prdocutImageUrl(data.imageUrl[0])
    data.imageUrl = imageUrl;
    await addDoc(collection(db, `${productEntity}`), {
        ...data
    });
}


const prdocutImageUrl = (file) => {
    return new Promise((resolve, reject) => {
        const productImageRef = ref(storage, `products/${file.name}/`);
        const uploadTask = uploadBytesResumable(productImageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                switch (snapshot.state) {
                    case 'paused':
                        break;
                    case 'running':
                        break;
                }
            },
            (error) => {
                reject(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((downloadURL) => {
                        resolve(downloadURL);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            }
        );
    });
};