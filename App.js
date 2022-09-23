import 'react-native-gesture-handler';
import React, { useState, useEffect, useMemo } from 'react';
import { View, ActivityIndicator, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TailwindProvider } from 'tailwindcss-react-native'
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import RestaurantDetails from './screens/RestaurantDetails';
import UsernameInput from './screens/UsernameInput';
import AddRestaurant from './screens/RestaurantEmlplyee/AddRestaurant';
import BottomTabs from './components/customer/BottomTabs';
import OrderExpand from './screens/OrderExpand';
import RestaurantTabs from './components/RestaurantEmployee/RestaurantTabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from './context';
// import { Provider as ReduxProvider } from 'react-redux';
// import { store } from './redux/store'


export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);
  const [userData, setUserData] = useState([]);
  const Stack = createStackNavigator();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    checkUser();
  }, [])

  // const authContext = useMemo(() => ({
  //   Login: () => {
  //     setUserToken(userData);
  //     setIsLoading(false);
  //   },
  //   Logout: () => {
  //     setUserToken(null);
  //     setIsLoading(false);
  //     userData === null
  //   },
  // }), []);

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
  //   return (
  //     <Stack.Navigator>
  //       <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
  //     </Stack.Navigator>
  //   );
  // }

  return (
    // <ReduxProvider store={store}>
    // <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <TailwindProvider preview={true}>
          {/* <Stack.Navigator>
            {userToken === null ? (
              <>
                <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
                <Stack.Screen name="Username" component={UsernameInput} options={{ headerShown: false }} />
                <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} options={{ headerShown: false }} />
                <Stack.Screen name="AddRestaurant" component={AddRestaurant} />
                <Stack.Screen name="OrderExpand" component={OrderExpand}
                  options={{
                    headerShown: true,
                    title: "Order",
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: "#F54748" },
                    headerTitleStyle: { color: "#FFF" },
                  }} />
                <Stack.Screen name="RestaurantTabs" component={RestaurantTabs} options={{ headerShown: false }} />
              </>
            ) :
              <>
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />

              </>
            }
          </Stack.Navigator> */}

          <Stack.Navigator initialRouteName='BottomTabs'>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
            <Stack.Screen name="Username" component={UsernameInput} options={{ headerShown: false }} />
            <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} options={{ headerShown: false }} />
            <Stack.Screen name="AddRestaurant" component={AddRestaurant} />
            <Stack.Screen name="OrderExpand" component={OrderExpand}
              options={{
                headerShown: true,
                title: "Order",
                headerBackTitleVisible: false,
                headerStyle: { backgroundColor: "#F54748" },
                headerTitleStyle: { color: "#FFF" },
              }} />

            <Stack.Screen name="RestaurantTabs" component={RestaurantTabs} options={{ headerShown: false }} />
          </Stack.Navigator>
        </TailwindProvider>
      </NavigationContainer>
    // {/* </AuthContext.Provider> */}
    // </ReduxProvider>
  );
}

