import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);



const RestaurantHome = () => {
  return (
    <>
      <View className="flex-1 mt-10 p-5 w-full bg-white">
        <ShimmerPlaceHolder
          style={{ width: 100, height: 100, borderRadius: 50 }}
          shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
        >
        </ShimmerPlaceHolder>
        <ShimmerPlaceHolder
          style={{ width: '100%', height: 15, marginVertical: 10, borderRadius: 50 }}
          shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
        >
        </ShimmerPlaceHolder>
        <ShimmerPlaceHolder
          style={{ width: '100%', height: 15, borderRadius: 50 }}
          shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
        >
        </ShimmerPlaceHolder>

        <View>
          <ShimmerPlaceHolder
            style={{ width: 100, height: 100, borderRadius: 50 }}
            shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
          >
          </ShimmerPlaceHolder>
          <ShimmerPlaceHolder
            style={{ width: '100%', height: 15, marginVertical: 10, borderRadius: 50 }}
            shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
          >
          </ShimmerPlaceHolder>
          <ShimmerPlaceHolder
            style={{ width: '100%', height: 15, borderRadius: 50 }}
            shimmerColors={['#c4c4c4', '#eaeaea', '#c4c4c4']}
          >
          </ShimmerPlaceHolder>
        </View>

      </View>
    </>
  )
}

export default RestaurantHome;