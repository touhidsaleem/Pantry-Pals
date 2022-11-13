import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { UserIcon, ChevronDownIcon, } from "react-native-heroicons/outline";
import Ionicons from "react-native-vector-icons/Ionicons";
import { auth } from '../../../firebaseConfig';


const HeaderTab = ({ navigation }) => {

  return (
    <>
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://links.papareact.com/wru"
            }}
            className="h-9 w-9 bg-gray-300 rounded-full"
          />

        </TouchableOpacity>

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs pt-2">Deliver Now!{auth.current?.phoneNumber}</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#1a1a1a" />
          </Text>
        </View>
        {/* <Ionicons name="person-outline" size={30} color="#1a1a1a" /> */}
      </View>

      {/* <View className="flex-row items-center space-x-2 pb-2 px-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-2">
          <SearchIcon color="gray" size={20} className="pt-10" />
          <TextInput placeholder='Search here' keyboardType='default' />
        </View>
        <AdjustmentsIcon color="#00ccbb" />
      </View> */}
    </>
  )
}

export default HeaderTab;

const styles = StyleSheet.create({})