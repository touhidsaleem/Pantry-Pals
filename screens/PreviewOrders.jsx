import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Divider from "@rneui/themed"

const PreviewOrders = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="px-5 py-2">
        <TouchableOpacity activeOpacity={0.6} className="bg-slate-200 p-2 w-full h-28 mt-2 rounded-xl"
          onPress={() => navigation.navigate('OrderExpand')}
        >

        <View className="justify-between flex-row">
         <View className="">
         <Text className="font-extrabold text-lg">Cafe 2.0</Text>
          <Text className="text-md font-semibold">5 items</Text>
          <Text className="text-md font-semibold">Initiated</Text>
         </View>
          <View>
                <Image source={{ uri: "https://b.zmtcdn.com/data/pictures/4/20169774/6635236e9fcef38e4f13ee49362f4165_featured_v2.jpg?output-format=webp" }} className="w-28 h-24 rounded-md shadow-2xl" />
              </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} className="bg-slate-200 p-2 w-full h-28 mt-2 rounded-xl"
          onPress={() => navigation.navigate('OrderExpand')}
        >

        <View className="justify-between flex-row">
         <View className="">
         <Text className="font-extrabold text-lg">Beachside Rhino</Text>
          <Text className="text-md font-semibold">4 items</Text>
          <Text className="text-md font-semibold">Delivered</Text>
         </View>
          <View>
                <Image source={{ uri: "https://b.zmtcdn.com/data/pictures/0/19676350/0398208266a4e715e3af418603735cc6_featured_v2.jpg?output-format=webp" }} className="w-28 h-24 rounded-md shadow-2xl" />
              </View>
        </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default PreviewOrders;