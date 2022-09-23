import { db } from "../firebaseConfig";

export const getRestaurants = async () => {
    try {
        const snap = await db.collection('verifiedRestaurants').get();
        const restaurants = [];
        snap.forEach(restaurant => restaurants.push(restaurant.data()));
    } catch (err) {
        return console.log(err.message);
    }
}

