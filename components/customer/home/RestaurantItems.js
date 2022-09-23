import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from '@react-navigation/native';
import { db } from '../../../firebaseConfig';
import { LinearGradient } from 'expo-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export const localRestaurants = [
    {
        name: "Blabber All Day",
        image_url: "https://b.zmtcdn.com/data/pictures/4/20169774/6635236e9fcef38e4f13ee49362f4165_featured_v2.jpg?output-format=webp",
        categories: ["cafe", "Bar"],
        price: "$$",
        reviews: "1244",
        rating: 3.5,
    },
    {
        name: "Beachside Rhino",
        image_url: "https://b.zmtcdn.com/data/pictures/0/19676350/0398208266a4e715e3af418603735cc6_featured_v2.jpg?output-format=webp",
        categories: ["cafe", "Bar"],
        price: "$$",
        reviews: "654",
        rating: 2.7,
    },
    {
        name: "India's Grill",
        image_url: "https://b.zmtcdn.com/data/pictures/4/20169774/6635236e9fcef38e4f13ee49362f4165_featured_v2.jpg?output-format=webp",
        categories: ["Indian", "Bar"],
        price: "$$",
        reviews: "2514",
        rating: 4.9,
    },
];



const RestaurantItem = () => {
    const navigation = useNavigation();
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        db.collection("verifiedRestaurants")
            .orderBy("restaurantLocation", "asc")
            .onSnapshot(
                querySnapshot => {
                    const restaurants = []
                    querySnapshot.forEach((doc) => {
                        // const { restaurantImage, restaurantName, restaurantRating, restaurantDescription } = doc.data()
                        restaurants.push({
                            id: doc.id,
                            // restaurantImage,
                            // restaurantName,
                            // restaurantRating,
                            // restaurantDescription,
                            data: doc.data(),
                        })
                    })
                    setRestaurants(restaurants);
                    setLoading(false);
                }
            )
    }, [])



    if (loading) {
        return (
            <>
                <View className="flex-1 mt-2 p-5 w-full bg-white">
                    <ShimmerPlaceHolder
                        className="w-full h-48 rounded-md"
                        shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
                    >
                    </ShimmerPlaceHolder>
                    <View className="flex-row justify-between items-center mt-1">
                        <View>
                            <ShimmerPlaceHolder
                                className=" mt-2 w-52 rounded-md"
                                shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
                            >
                            </ShimmerPlaceHolder>
                            <ShimmerPlaceHolder
                                className=" mt-2 w-24 rounded-md"
                                shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
                            >
                            </ShimmerPlaceHolder>
                        </View>

                        <ShimmerPlaceHolder
                            className=" mt-2 w-10 h-10 rounded-full"
                            shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
                        >
                        </ShimmerPlaceHolder>
                    </View>

                    <ShimmerPlaceHolder
                        className="w-full h-48 rounded-md mt-5"
                        shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
                    >
                    </ShimmerPlaceHolder>
                    <View className="flex-row justify-between items-center mt-1">
                        <View>
                            <ShimmerPlaceHolder
                                className=" mt-2 w-52 rounded-md"
                                shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
                            >
                            </ShimmerPlaceHolder>
                            <ShimmerPlaceHolder
                                className=" mt-2 w-24 rounded-md"
                                shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
                            >
                            </ShimmerPlaceHolder>
                        </View>

                        <ShimmerPlaceHolder
                            className=" mt-2 w-10 h-10 rounded-full"
                            shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
                        >
                        </ShimmerPlaceHolder>
                    </View>

                </View>
            </>
        );
    }

    const enterAbout = (id, restaurantName, restaurantImage, restaurantDescription, restaurantRating) => {
        navigation.navigate('RestaurantDetails', {
            id,
            restaurantName,
            restaurantImage,
            restaurantDescription,
            restaurantRating,
        });
    }

    return (
        <View className="mb-1">
            {restaurants && restaurants.map(({ data: { restaurantImage, restaurantName, restaurantDescription, restaurantRating }, id }) => (
                <TouchableOpacity onPress={enterAbout} key={id} activeOpacity={0.8} className="mt-2 p-3 bg-white">
                    <RestaurantImage image={restaurantImage} />
                    <RestaurantInfo name={restaurantName} rating={restaurantRating} />
                </TouchableOpacity>
            ))}
        </View>
    )
}

const RestaurantImage = (props) => (

    <>
        <Image source={{ uri: props.image }}
            className="w-full h-52"
        />
        <TouchableOpacity className="absolute right-7 top-7">
            <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
        </TouchableOpacity>
    </>
);

const RestaurantInfo = (props) => (
    <View className="flex-row justify-between items-center mt-1">
        <View>
            <Text className="font-bold text-sm" style={{ color: "#2E2828" }}>{props.name}</Text>
            <Text className="text-xs text-gray-500">30-45 min</Text>
        </View>
        <View className="bg-gray-100 h-7 w-7 rounded-full justify-center items-center">
            <Text className="text-xs ">{props.rating}</Text>
        </View>
    </View>
);

export default RestaurantItem;