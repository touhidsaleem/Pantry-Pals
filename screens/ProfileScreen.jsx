import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { auth } from '../firebaseConfig'
import { Avatar } from '@rneui/themed'
import Cards from '../components/customer/profile/Cards'
import AsyncStorage from '@react-native-async-storage/async-storage';


const ProfileScreen = ({ navigation }) => {
  const [userData, setUserData] = useState([]);

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
    return checkUser();
  }

  return (
    <SafeAreaView className="flex-1 bg-white relative">

      <View className="w-full" style={{ backgroundColor: "#F54748", height: "30%" }}>
        <Text className="text-center mt-16 text-2xl font-semibold text-white">PROFILE</Text>
      </View>

      <View className="w-11/12 h-44 mt-4 p-4 justify-center items-center rounded-2xl bg-white absolute top-28 left-4" style={{ elevation: 10 }}>
        <Avatar rounded source={{ uri: auth?.current?.photoURL || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj4oYq4NHc1Tg9zCy2B6PzyvZsQ0Y3eP5spw&usqp=CAU" }} style={{ width: 75, height: 75 }} />
        <Text className="text-xl mt-2 font-semibold">Touhid</Text>
        <Text className="text-md font-semibold" style={{ color: "grey" }}>{auth?.currentUser?.phoneNumber}</Text>
      </View>

      <ScrollView className="mt-20">
        <Cards navigation={navigation} />
      </ScrollView>

    </SafeAreaView>
  )
}

export default ProfileScreen;