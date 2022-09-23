import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { auth } from '../../firebaseConfig';
import { Avatar } from '@rneui/themed';
import { ProfileIcon } from '../../components/customer/profile/Cards';

const RestaurantProfile = () => {

    const signOutUser = () => {
        auth.signOut()
            .then(() => {
                navigation.replace("Login");
            }).catch((error) => console.log(error.message));
    }

    return (
        <SafeAreaView className="flex-1 bg-white relative">

            <View className="w-full" style={{ backgroundColor: "#F54748", height: "30%" }}>
                <Text className="text-center mt-16 text-2xl font-semibold text-white">PROFILE</Text>
            </View>

            <View className="w-11/12 h-44 mt-4 p-4 justify-center items-center rounded-2xl bg-white absolute top-28 left-4" style={{ elevation: 10 }}>
                <Avatar rounded source={{ uri: auth?.current?.photoURL || "https://cdn-icons-png.flaticon.com/512/64/64572.png" }} style={{ width: 75, height: 75 }} />
                <Text className="text-xl mt-2 font-semibold">{auth?.currentUser?.displayName}</Text>
                <Text className="text-md font-semibold" style={{ color: "grey" }}>{auth?.currentUser?.phoneNumber}</Text>
            </View>

            <ScrollView className="mt-20">
                <TouchableOpacity activeOpacity={0.5} className="bg-white h-14 flex-row items-center mx-4 my-3 pl-4 rounded-xl"
                    // style={{ elevation: 5 }}
                    onPress={signOutUser}
                >
                    <ProfileIcon icon="logout" title="Logout" />
                </TouchableOpacity>
            </ScrollView>

        </SafeAreaView>
    )
}

export default RestaurantProfile