import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import FavouriteRestaurants from '../../screens/FavouriteRestaurants';
import PreviewOrders from '../../screens/PreviewOrders';
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                initialRoute: 'Profile',
                showLabel: 'false',
                tabBarActiveTintColor: '#F54748',
                tabBarStyle: {
                    height: 60,
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                        size = focused ? size + 4 : size + 2;
                    } else if (rn === 'FavouriteRestaurants') {
                        iconName = focused ? 'heart' : 'heart-outline'
                        size = focused ? size + 4 : size + 2;
                    } else if (rn === 'PreviewOrders') {
                        iconName = focused ? 'receipt' : 'receipt-outline'
                        size = focused ? size + 4 : size + 2;
                    } else if (rn === 'Profile') {
                        iconName = focused ? 'person-circle' : 'person-circle-outline'
                        size = focused ? size + 4 : size + 2;
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="FavouriteRestaurants" component={FavouriteRestaurants} options={{
                tabBarLabel: 'Favourites', headerShown: true, title: "Your Favourites",
                headerBackTitleVisible: true,
                headerStyle: { backgroundColor: "#F54748" },
                headerTitleStyle: { color: "#FFF" },
            }} />
            <Tab.Screen name="PreviewOrders" component={PreviewOrders}
                options={{
                    tabBarLabel: 'Orders', headerShown: true, title: "Your Orders",
                    headerBackTitleVisible: true,
                    headerStyle: { backgroundColor: "#F54748" },
                    headerTitleStyle: { color: "#FFF" },
                }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: 'Profile', headerShown: false }} />
        </Tab.Navigator>
    )
}

export default BottomTabs;