import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const FavouriteRestaurants = () => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.8} className="mt-2 p-3 bg-white">
        <Image source={{ uri: "https://b.zmtcdn.com/data/pictures/4/20169774/6635236e9fcef38e4f13ee49362f4165_featured_v2.jpg?output-format=webp" }}
          className="w-full h-52"
        />
        <TouchableOpacity className="absolute right-7 top-7">
          <MaterialCommunityIcons name="heart" size={25} color="red" />
        </TouchableOpacity>
        <View className="flex-row justify-between items-center mt-1">
          <View>
            <Text className="font-bold text-sm" style={{ color: "#2E2828" }}>{'Hardrock Cafe'}</Text>
            <Text className="text-xs text-gray-500">Nearby: {'Mumbai'}</Text>
          </View>
          <View className="bg-gray-100 h-7 w-7 rounded-full justify-center items-center">
            <Text className="text-xs ">{4.8}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default FavouriteRestaurants;