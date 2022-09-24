import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems } from '../../../features/basketSlice'

const ViewCart = ({ navigation }) => {
// const items = useSelector(selectBasketItems)

    return (
        <View className="flex-1 items-center flex-row absolute bottom-5 Z-10">
            <View className="flex-row justify-center w-full">
                <TouchableOpacity activeOpacity={0.8} className="mt-10 bg-black items-center h-12 justify-center rounded-md w-80 relative" style={{backgroundColor: "#F54748"}}>
                    {/* <Text style={{color: "#FEF4F4"}} className="font-semibold text-lg items-center">{items.length}View Cart</Text> */}
                    <Text style={{color: "#FEF4F4"}} className="font-semibold text-lg items-center">View Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ViewCart;