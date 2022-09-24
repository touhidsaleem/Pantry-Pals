import { View, Text, TextInput, KeyboardAvoidingView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { db } from '../../firebaseConfig';
import firebase from 'firebase/compat/app';

const AddRestaurant = ({ navigation, route }) => {
    const [image, setImage] = useState('');
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    const [restaurantName, setRestaurantName] = useState('')
    const [restaurantAddress, setRestaurantAddress] = useState('')
    const [restaurantDescription, setRestaurantDescription] = useState('')
    const [restaurantRating, setRestaurantRating] = useState('')
    const [data, setData] = useState('');

    useEffect(() => {
        const unsubscribe = db.collection('restaurants').onSnapshot(snapshot => (
            setData(
            snapshot.docs.map(doc => ({
              id: doc.id,
              data: doc.data()
            })))
        ))
    
        return unsubscribe;
      }, [])

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add Restaurant",
            // headerBackTitleVisible: true,
            headerStyle: { backgroundColor: "#F54748" },
            headerTitleStyle: { color: "#FFF" },
            headerShown: true
        })
    }, [navigation])

    useEffect(() => {
        (async () => {
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPermission(galleryStatus.status === 'granted');
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspectRatio: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    if (hasGalleryPermission === false) {
        console.log("permission denied");
    }

    const AddRestaurant = (id) => {
        try {
            db.collection("verifiedRestaurants").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                restaurantImage: image,
                restaurantName: restaurantName,
                restaurantLocation: restaurantAddress,
                restaurantDescription: restaurantDescription,
                restaurantRating: restaurantRating,
            })
            setImage('');
            setRestaurantName('');
            setRestaurantAddress('');
            setRestaurantDescription('')
            setRestaurantRating('')
            console.log("data Pushed")
        } catch (err) {console.log(err.message)}
    }

    return (
        <KeyboardAvoidingView
            keyboardVerticalOffset={0}
            behavior={'height'}
            className="flex-1 p-5 bg-white">
            <ScrollView className="" showsVerticalScrollIndicator={false}>

                <View className="w-full h-48">
                    <TouchableOpacity activeOpacity={0.5} onPress={pickImage} className="items-center ">
                        <Image source={image ? { uri: image } : require("../../assets/images/rename.png")} className="object-contain h-full w-96" />
                    </TouchableOpacity>
                </View>

                {/* <View className="w-full h-48">
                    {image && <Image source={{ uri: image }} className="h-full w-96" />}
                </View> */}

                <View className="">
                    <Text className="absolute left-2" style={{ top: 13, zIndex: 555, backgroundColor: '#FFF', color: '#F54748' }}> Restaurant Name </Text>
                    <TextInput
                        className="text-xl p-2 px-3 mt-6 rounded-md font-semibold"
                        style={{ borderWidth: 1.5, borderColor: '#F54748', color: '#2E2828' }}
                        caretHidden
                        onChangeText={setRestaurantName}
                        value={restaurantName}
                    />
                </View>
                <View className="">
                    <Text className="absolute left-2" style={{ top: 13, zIndex: 555, backgroundColor: '#FFF', color: '#F54748' }}> Restaurant Address </Text>
                    <TextInput
                        className="text-xl p-2 px-3 mt-6 rounded-md font-semibold"
                        style={{ borderWidth: 1.5, borderColor: '#F54748', color: '#2E2828' }}
                        caretHidden
                        onChangeText={setRestaurantAddress}
                        value={restaurantAddress}
                    />
                </View>
                <View className="">
                    <Text className="absolute left-2" style={{ top: 13, zIndex: 555, backgroundColor: '#FFF', color: '#F54748' }}> Description </Text>
                    <TextInput
                        className="text-xl p-2 px-3 mt-6 rounded-md font-semibold"
                        style={{ borderWidth: 1.5, borderColor: '#F54748', color: '#2E2828' }}
                        caretHidden
                        onChangeText={setRestaurantDescription}
                        value={restaurantDescription}
                    />
                </View>
                <View className="">
                    <Text className="absolute left-2" style={{ top: 13, zIndex: 555, backgroundColor: '#FFF', color: '#F54748' }}> Rating </Text>
                    <TextInput
                        className="text-xl p-2 px-3 mt-6 rounded-md font-semibold"
                        style={{ borderWidth: 1.5, borderColor: '#F54748', color: '#2E2828' }}
                        caretHidden
                        onChangeText={setRestaurantRating}
                        value={restaurantRating}
                    />
                </View>

                <TouchableOpacity activeOpacity={0.5} style={{ width: '100%' }} className="mt-5"
                    onPress={AddRestaurant}
                >
                    <View className="rounded-md w-full h-12 items-center justify-center" style={{ backgroundColor: '#F54748' }}>
                        <Text className="font-semibold text-lg items-center" style={{ color: '#FEF4F4' }}>ADD</Text>
                    </View>
                </TouchableOpacity>


            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default AddRestaurant;