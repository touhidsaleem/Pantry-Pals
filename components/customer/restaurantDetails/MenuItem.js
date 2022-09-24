import { View, Text, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Divider } from '@rneui/themed'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { db } from '../../../firebaseConfig'
import { LinearGradient } from 'expo-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, selectBasketItems } from '../../../features/basketSlice'

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);
// const dispatch = useDispatch();

const foods = [
    {
        title: "Burger",
        description: "Giant Bun, with lettuce, a patty of meat, with special Sauce",
        price: "₹ 285.00",
        image: "https://b.zmtcdn.com/data/pictures/6/38476/1fc2c60c6d6ee5729c386c18811d8f61.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
    },
    {
        title: "Wok Chinese",
        description: "Have this from Wok Express",
        price: "₹ 467.00",
        image: "https://b.zmtcdn.com/data/pictures/chains/3/18216863/a9dafd0abf342d036518bea733099f71_o2_featured_v2.jpg"
    },
    {
        title: "Chocolate Cake",
        description: "A cake with top layer Chocolate",
        price: "₹ 800.00",
        image: "https://b.zmtcdn.com/data/pictures/chains/2/16529642/871d7282b7a07b3124784f015a37545c_o2_featured_v2.jpg"
    },
    {
        title: "WOW Momos",
        description: "Momos With special Sauce for additional blends",
        price: "₹ 360.00",
        image: "https://b.zmtcdn.com/data/pictures/chains/8/18577178/cc7cfcafbaa312b8e003ab60181246b0_o2_featured_v2.jpg"
    },

    {
        title: "WOW Momos",
        description: "Momos With special Sauce for additional blends",
        price: "₹ 360.00",
        image: "https://b.zmtcdn.com/data/pictures/chains/8/18577178/cc7cfcafbaa312b8e003ab60181246b0_o2_featured_v2.jpg"
    },

    {
        title: "WOW Momos",
        description: "Momos With special Sauce for additional blends",
        price: "₹ 360.00",
        image: "https://b.zmtcdn.com/data/pictures/chains/8/18577178/cc7cfcafbaa312b8e003ab60181246b0_o2_featured_v2.jpg"
    },

    {
        title: "WOW Momos",
        description: "Momos With special Sauce for additional blends",
        price: "₹ 360.00",
        image: "https://b.zmtcdn.com/data/pictures/chains/8/18577178/cc7cfcafbaa312b8e003ab60181246b0_o2_featured_v2.jpg"
    },

]

const MenuItem = ({navigation, route}) => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        db.collection("verifiedRestaurants").doc().collection('menu')
            .onSnapshot(
                querySnapshot => {
                    const menu = []
                    querySnapshot.forEach((doc) => {
                        const { menuImage, menuName, menuPrice, menuDescription } = doc.data()
                        restaurants.push({
                            id: doc.id,
                            menuImage,
                            menuName,
                            menuPrice,
                            menuDescription,
                        })
                    })
                    setMenu(menu);
                    setLoading(false);
                }
            )
    }, [])

    // const addItemToBasket = () => {
    //     dispatch(addToBasket({id, name, description, price, image}))
    // }

    if (loading) {
        return (
            <>
                <View className="flex-1 mt-2 p-5 w-full bg-white">
                    <View className="flex-row justify-between items-center m-3">
                        <View>
                            <ShimmerPlaceHolder
                                className=" mt-2 w-54 rounded-md"
                                shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
                            >
                            </ShimmerPlaceHolder>
                            <ShimmerPlaceHolder
                                className=" mt-2 w-32 rounded-md"
                                shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
                            >
                            </ShimmerPlaceHolder>
                            <ShimmerPlaceHolder
                                className=" mt-2 w-20 rounded-md"
                                shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
                            >
                            </ShimmerPlaceHolder>
                        </View>

                        <ShimmerPlaceHolder
                            className="w-16 h-16 rounded-md "
                            shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
                        >
                        </ShimmerPlaceHolder>
                    </View>
                    <View className="flex-row justify-between items-center m-3">
                        <View>
                            <ShimmerPlaceHolder
                                className=" mt-2 w-54 rounded-md"
                                shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
                            >
                            </ShimmerPlaceHolder>
                            <ShimmerPlaceHolder
                                className=" mt-2 w-32 rounded-md"
                                shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
                            >
                            </ShimmerPlaceHolder>
                            <ShimmerPlaceHolder
                                className=" mt-2 w-20 rounded-md"
                                shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
                            >
                            </ShimmerPlaceHolder>
                        </View>

                        <ShimmerPlaceHolder
                            className="w-16 h-16 rounded-md "
                            shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
                        >
                        </ShimmerPlaceHolder>
                    </View>
                    <View className="flex-row justify-between items-center m-3">
                        <View>
                            <ShimmerPlaceHolder
                                className=" mt-2 w-54 rounded-md"
                                shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
                            >
                            </ShimmerPlaceHolder>
                            <ShimmerPlaceHolder
                                className=" mt-2 w-32 rounded-md"
                                shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
                            >
                            </ShimmerPlaceHolder>
                            <ShimmerPlaceHolder
                                className=" mt-2 w-20 rounded-md"
                                shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
                            >
                            </ShimmerPlaceHolder>
                        </View>

                        <ShimmerPlaceHolder
                            className="w-16 h-16 rounded-md "
                            shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
                        >
                        </ShimmerPlaceHolder>
                    </View>
                    <View className="flex-row justify-between items-center m-3">
                        <View>
                            <ShimmerPlaceHolder
                                className=" mt-2 w-54 rounded-md"
                                shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
                            >
                            </ShimmerPlaceHolder>
                            <ShimmerPlaceHolder
                                className=" mt-2 w-32 rounded-md"
                                shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
                            >
                            </ShimmerPlaceHolder>
                            <ShimmerPlaceHolder
                                className=" mt-2 w-20 rounded-md"
                                shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
                            >
                            </ShimmerPlaceHolder>
                        </View>

                        <ShimmerPlaceHolder
                            className="w-16 h-16 rounded-md "
                            shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
                        >
                        </ShimmerPlaceHolder>
                    </View>
                    <View className="flex-row justify-between items-center m-3">
                        <View>
                            <ShimmerPlaceHolder
                                className=" mt-2 w-54 rounded-md"
                                shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
                            >
                            </ShimmerPlaceHolder>
                            <ShimmerPlaceHolder
                                className=" mt-2 w-32 rounded-md"
                                shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
                            >
                            </ShimmerPlaceHolder>
                            <ShimmerPlaceHolder
                                className=" mt-2 w-20 rounded-md"
                                shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
                            >
                            </ShimmerPlaceHolder>
                        </View>

                        <ShimmerPlaceHolder
                            className="w-16 h-16 rounded-md "
                            shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
                        >
                        </ShimmerPlaceHolder>
                    </View>

                </View>
            </>
        );
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} className="mb-14">
            {foods && foods.map((food, id) => (
                <View key={id}>
                    <View className="flex-row justify-between items-center m-3">
                        <View className="flex-row">
                            {/* <BouncyCheckbox iconStyle={{ borderColor: "lightgray" }} fillColor="#F54748" onPress={addItemToBasket} /> */}
                            <BouncyCheckbox iconStyle={{ borderColor: "lightgray" }} fillColor="#F54748" />
                            <FoodInfo food={food} />
                            {/* <View className="justify-evenly w-60">
                                <Text className="text-lg font-semibold" style={{ color: "#2E2828" }}>{data.menuName}</Text>
                                <Text className="text-xs" style={{ color: "#2E2828" }}>{data.menuDescription}</Text>
                                <Text className="text-xs" style={{ color: "#2E2828" }}>{data.menuPrice}</Text>
                            </View> */}
                        </View>
                        <FoodImage food={food} />
                        {/* <View>
                            <Image source={{ uri: data.menuImage }} className="w-16 h-16 rounded-md shadow-2xl" />
                        </View> */}
                    </View>
                    <Divider width={0.5} style={{ marginTop: 10, marginHorizontal: 10 }} />
                </View>
            ))}
        </ScrollView>
    )
}

const FoodInfo = (props) => (
    <View className="justify-evenly w-60">
        <Text className="text-lg font-semibold" style={{ color: "#2E2828" }}>{props.food.title}</Text>
        <Text className="text-xs" style={{ color: "#2E2828" }}>{props.food.description}</Text>
        <Text className="text-xs" style={{ color: "#2E2828" }}>{props.food.price}</Text>
    </View>
);
const FoodImage = (props) => (
    <View>
        <Image source={{ uri: props.food.image }} className="w-16 h-16 rounded-md shadow-2xl" />
    </View>
);

export default MenuItem;