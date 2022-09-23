import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const items = [
  {
    image: require("../../../assets/images/shopping-bag.png"),
    text: "Pickup"
  },
  {
    image: require("../../../assets/images/soft-drink.png"),
    text: "Soft Drinks"
  },
  {
    image: require("../../../assets/images/bread.png"),
    text: "Bakery Items"
  },
  {
    image: require("../../../assets/images/fast-food.png"),
    text: "Fast Foods"
  },
  {
    image: require("../../../assets/images/deals.png"),
    text: "Deals"
  },
  {
    image: require("../../../assets/images/coffee.png"),
    text: "Coffee & Tea"
  },
  {
    image: require("../../../assets/images/desserts.png"),
    text: "Desserts"
  },
];

const Categories = () => {
  return (
    <View className="bg-white mt-2 py-2 pl-2">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((item, index) => (
        <TouchableOpacity activeOpacity={0.5} key={index} className="items-center mr-4">
          <Image source={item.image} className="h-12 w-12 object-contain" />
          <Text className="font-bold text-xs">{item.text}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
    </View>
  )
}

export default Categories;