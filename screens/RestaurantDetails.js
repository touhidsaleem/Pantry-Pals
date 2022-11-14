import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Divider } from '@rneui/themed';
import About from '../components/customer/restaurantDetails/About';
import MenuItem from '../components/customer/restaurantDetails/MenuItem';
import ViewCart from '../components/customer/restaurantDetails/ViewCart';

const RestaurantDetails = ({ navigation, id, restaurantName, restaurantDescription, restaurantImage }) => {
  return (
    <SafeAreaView className="flex-1">
      {/* <Text>{restaurantDescription}</Text> */}
      <About id={id} restaurantDescription={restaurantDescription} restaurantName={restaurantName} restaurantImage={restaurantImage} />
      <Divider width={1} style={{ marginTop: 20 }} />
      {/* <Text>{restaurantDescription}</Text> */}
      {/* 3:30:00 */}
      <MenuItem navigation={navigation} />
      <ViewCart navigation={navigation} />
    </SafeAreaView>
  )
}

export default RestaurantDetails;