import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../Configurations/FirbaseConfiguration/firebase.config";
import { productEntity } from "../lib/productEntities";

export const getAllProducts = (callback) => {
    try {
        const q = collection(db, productEntity);

        return onSnapshot(q, (snapshot) => {
            const productsList = snapshot.docs.map((doc) => {
                return doc.data();
            });
            callback(productsList);
        });

    } catch (error) {
        console.error("Error fetching products:", error);
    }
}
