import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

const PreviewOrders = ({ navigation }) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="px-5 py-2">
        <TouchableOpacity activeOpacity={0.6} className="bg-slate-200 p-2 w-full h-28 mt-2 rounded-xl"
          onPress={() => navigation.navigate('OrderExpand')}
        >
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, iusto dolorum! Totam.</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}

export default PreviewOrders;