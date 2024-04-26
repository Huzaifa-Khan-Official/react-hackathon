import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../Configurations/FirbaseConfiguration/firebase.config";
import { productEntity } from "../lib/productEntities";

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

        // const q = collection(db, productEntity);

        // return onSnapshot(q, (snapshot) => {
        //     const productsList = snapshot.docs.map((doc) => {
        //         return { ...doc.data(), id: doc.id };
        //     });
        //     callback(productsList);
        // });

        const docRef = doc(db, `${productEntity}/${id}`);
        console.log("aaraha hai");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            res(docSnap.data());
        } else {
            rej("not found");
        }
    })

}