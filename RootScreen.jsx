import { View, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RestaurantDetails from './screens/RestaurantDetails';
import UsernameInput from './screens/UsernameInput';
import AddRestaurant from './screens/RestaurantEmlplyee/AddRestaurant';
import BottomTabs from './components/customer/BottomTabs';
import OrderExpand from './screens/OrderExpand';
import RestaurantTabs from './components/RestaurantEmployee/RestaurantTabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
// import { selectUser } from './features/userSlice';
import Basket from './components/customer/restaurantDetails/Basket';
import OrderCompleted from './screens/OrderCompleted';

const RootScreen = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [userData, setUserData] = useState([]);
    const Stack = createStackNavigator();
    // const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        checkUser();
    }, [])

    // useEffect(()=> {
    //     items.map(item => {
    //         dispatch(addMyProducts(item));
    //     })
    // },[])

    const checkUser = async () => {
        try {
            const value = await AsyncStorage.getItem('userData')
                .then(value => {
                    if (value != null) {
                        setUserData(value)
                        // navigation.replace('BottomTabs', {
                        //   screen: 'Home',
                        // });
                    }
                    const localData = JSON.parse(value);
                    console.log(localData);
                    // Alert.alert('Phone Number: ', localData.phoneNumber);
                }).catch((error) => console.log(error.message));
        } catch (error) {
            console.log(error);
        }
    }

    // if (isLoading) {
    //   return (
    //     <View style={{ flex: 1, justifyContent: 'center' }}>
    //       <ActivityIndicator size='large' />
    //     </View>
    //   )
    // }
    // const RootLogin = () => {
    //     return (
    //         <Stack.Navigator initialRouteName=''>
    //             <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    //             <Stack.Screen name="Username" component={UsernameInput} options={{ headerShown: false }} />
    //         </Stack.Navigator>
    //     )
    // }
    // const WholeApp = () => {
    //     return (
    //         <Stack.Navigator initialRouteName=''>
    //             <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
    //             <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} options={{ headerShown: false }} />
    //             <Stack.Screen name="AddRestaurant" component={AddRestaurant} />
    //             <Stack.Screen name="OrderExpand" component={OrderExpand}
    //                 options={{
    //                     headerShown: true,
    //                     title: "Order",
    //                     headerBackTitleVisible: false,
    //                     headerStyle: { backgroundColor: "#F54748" },
    //                     headerTitleStyle: { color: "#FFF" },
    //                 }} />
    //                 <Stack.Screen name="RestaurantTabs" component={RestaurantTabs} />
    //         </Stack.Navigator>

    //     )
    // }
    // return (
    //     <Stack.Navigator initialRouteName='WholeApp'>
    //         {
    //             user
    //                 ?
    //                 <Stack.Screen name="WholeApp" component={WholeApp} options={{ headerShown: false }} />
    //                 :
    //                 <Stack.Screen name="RootLogin" component={RootLogin} options={{ headerShown: false }} />
    //         }

    //     </Stack.Navigator>
    // )
    return (
        <Stack.Navigator initialRouteName='BottomTabs'>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Username" component={UsernameInput} options={{ headerShown: false }} />
            <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
            <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} options={{ headerShown: false }} />
            <Stack.Screen name="Basket" component={Basket} options={{ headerShown: false }} />
            <Stack.Screen name="OrderCompleted" component={OrderCompleted} options={{ headerShown: false }} />
            {/* <Stack.Screen name="AddRestaurant" component={AddRestaurant} /> */}
            <Stack.Screen name="OrderExpand" component={OrderExpand}
                options={{
                    headerShown: true,
                    title: "Order",
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: "#F54748" },
                    headerTitleStyle: { color: "#FFF" },
                }} />
            <Stack.Screen name="RestaurantTabs" component={RestaurantTabs} options={{ presentation: "modal", headerShown: false }}  />
        </Stack.Navigator>
    );
}

export default RootScreen