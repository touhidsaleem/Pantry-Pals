import { View, Text, Image } from 'react-native'
import React from 'react'

const image = "https://b.zmtcdn.com/data/pictures/0/19676350/0398208266a4e715e3af418603735cc6_featured_v2.jpg?output-format=webp";

const title = 'Beachside Rhino';
const description = 'Indian · Comfort Food · 🎫 · 4 ⭐ (2193+)'

const About = () => {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />
    </View>
  )
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} className="w-full h-52" />
);
const RestaurantTitle = (props) => (
  <Text className="font-bold text-xl mt-2 mx-3" style={{ color: "#2E2828" }}>{props.title}</Text>
);
const RestaurantDescription = (props) => (
  <Text className="mx-3 mt-1 text-xs font-semibold" style={{ color: "#2E2828" }}>{props.description}</Text>
);

export default About;