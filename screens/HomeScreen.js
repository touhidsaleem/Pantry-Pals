import { Text, Image, View, SafeAreaView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import SearchBar from '../components/customer/home/SearchBar';
import HeaderTab from '../components/customer/home/HeaderTab';
import Categories from "../components/customer/home/Categories";
import { ScrollView } from 'react-native-gesture-handler';
import RestaurantItem, { localRestaurants } from '../components/customer/home/RestaurantItems';
import { Divider } from '@rneui/themed';

// const YELP_API_KEY = "D3HdOS0cSBro4agg4TEDAvcGLBQl8eGU5M-AGIZF8ay7NalO8u79gqmrsjFSxkLzIfQk230yeqvuuetJqk8H8xMY5EvbCTPihdiCTtYbTaL2AJvRB9SPl1r5i6_2YnYx";

const HomeScreen = ({ navigation }) => {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);

    // const getRestaurantsFromYelp = async () => {
    //     const yelpUrl = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego";

    //     const apiOptions = {
    //         headers: {
    //             Authorization: `Bearer ${YELP_API_KEY}`,
    //         },
    //     }
    //     const res = await fetch(yelpUrl, apiOptions);
    //     const json = await res.json();
    //     return setRestaurantData(json.businesses);
    // };

    // useEffect(() => {
    //     getRestaurantsFromYelp();
    // }, []);

    return (
        <SafeAreaView className="pt-10 flex-1" style={{ backgroundColor: '#FEF4F4' }}>
            <View className="bg-white">
                <HeaderTab navigation={navigation} />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItem />
            </ScrollView>
            {/* <Divider width={1} /> */}
        </SafeAreaView>
    );
};

export default HomeScreen;

