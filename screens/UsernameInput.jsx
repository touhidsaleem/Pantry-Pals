import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react';
import { get, onValue, ref, set } from "firebase/database";
import { rdb, db } from "../firebaseConfig";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { doc, setDoc } from "firebase/firestore";


const UsernameInput = ({ navigation, route }) => {
    const [name, setName] = useState('');




    // useEffect(() => {
    //     onValue(ref(rdb), (snapshot) => {
    //         const data = snapshot.val();
    //         console.log(data)
    //     })
    // }, []);  

    // useEffect(() => {
    //     const unsubscribe = db.collection('users')
    //         .doc(route.params.id)
    //         .onSnapshot((snapshot) => setUserData(snapshot.docs.map(doc => ({
    //             id: doc.id,
    //             data: doc.data(),
    //         }))));
    //     return unsubscribe;
    // }, [])


    const postDataCustomer = async ({ id }) => {
        try {
            const customerData = doc(db, "customers", route.params);
            const customer = {
                name: name,
                phoneNumber: route.params,
                role: 'Customer'
            }
            await setDoc(customerData, customer)

            await AsyncStorage.setItem('userData', JSON.stringify(customer));
            console.log('Phone Number is:', route.params);
            console.log('username is:', name);
            navigation.replace('BottomTabs', {
                screen: 'Home',
            })
        } catch (error) { console.log(error.message) };
    }

    const postDataRestaurantEmployee = async () => {
        try {
            const RestaurantEmployeeData = doc(db, "restaurantEmployee", route.params);
            const RestaurantEmployee = {
                name: name,
                phoneNumber: route.params,
                role: 'Restaurant Employee'
            }
            await setDoc(RestaurantEmployeeData, RestaurantEmployee)

            await AsyncStorage.setItem('userData', JSON.stringify(RestaurantEmployee));
            console.log('Phone Number is:', route.params);
            console.log('username is:', name);
            navigation.replace('RestaurantTabs',  {
                screen: 'RestaurantHome',
            })
        } catch (error) { console.log(error.message) };
    }



    return (
        <>
            <KeyboardAvoidingView
                keyboardVerticalOffset={0}
                behavior={'height'}
                className="flex-1 w-full p-5"
                style={{ backgroundColor: '#FFF', }}
            >
                <Text className="mt-24 w-full text-2xl text-left font-bold" style={{ color: '#2E2828' }}>Almost there!</Text>
                <Text className="mt-0 w-full text-2xl text-left font-bold" style={{ color: '#2E2828' }}>Registering as?</Text>

                <View className="flex-1 w-full">
                    <Text className="absolute left-2" style={{ top: 13, zIndex: 555, backgroundColor: '#FFF', color: '#F54748' }}> Name </Text>
                    <TextInput
                        autoFocus
                        onChangeText={setName}
                        value={name}
                        className="text-xl p-2 px-3 mt-6 rounded-md font-semibold"
                        style={{ borderWidth: 1.5, borderColor: '#F54748' }}
                        caretHidden
                    />

                    <View className="flex-1 justify-end items-center w-full">
                        <TouchableOpacity activeOpacity={0.5} disabled={!name} onPress={postDataCustomer} style={{ width: '100%' }}>
                            <View className="rounded-md w-full h-12 items-center justify-center" style={{ backgroundColor: '#F54748' }}>
                                <Text className="font-semibold text-lg items-center" style={{ color: '#FEF4F4' }}>Customer</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} disabled={!name} onPress={postDataRestaurantEmployee} style={{ width: '100%', marginTop: 15, }}>
                            <View className="rounded-md w-full h-12 items-center justify-center" style={{ backgroundColor: '#FFF', borderWidth: 1.5, borderColor: '#F54748' }}>
                                <Text className="font-semibold text-lg items-center" style={{ color: '#F54748' }}>Restaurant Employee</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>

            </KeyboardAvoidingView>

        </>
    )
}

export default UsernameInput;