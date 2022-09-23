import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
import RestaurantHome from '../../screens/RestaurantEmlplyee/RestaurantHome';
import RestaurantProfile from '../../screens/RestaurantEmlplyee/RestaurantProfile';
import AddRestaurant from '../../screens/RestaurantEmlplyee/AddRestaurant';
import { db } from '../../firebaseConfig'



const Tab = createBottomTabNavigator();

const RestaurantTabs = () => {
  
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                initialRoute: 'PreviewOrders',
                showLabel: 'false',
                tabBarActiveTintColor: '#F54748',
                tabBarStyle: {
                    height: 60,
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === 'RestaurantHome') {
                        iconName = focused ? 'home' : 'home-outline';
                        size = focused ? size + 4 : size + 2;
                    } else if (rn === 'AddRestaurant') {
                        iconName = focused ? 'add-circle' : 'add-circle-outline'
                        size = focused ? size + 4 : size + 2;
                    } else if (rn === 'RestaurantProfile') {
                        iconName = focused ? 'person-circle' : 'person-circle-outline'
                        size = focused ? size + 4 : size + 2;
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                },
            })}
        >
            <Tab.Screen name="RestaurantHome" component={RestaurantHome} options={{ tabBarLabel: 'Home', headerShown: false }} />
            <Tab.Screen name="AddRestaurant" component={AddRestaurant} options={{ tabBarLabel: 'Add Restaurant', headerShown: false }} />
            <Tab.Screen name="RestaurantProfile" component={RestaurantProfile} options={{ tabBarLabel: 'Profile', headerShown: false }} />
        </Tab.Navigator>
    )
};

export default RestaurantTabs;