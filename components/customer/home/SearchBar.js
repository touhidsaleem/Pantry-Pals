import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"

const SearchBar = () => {
    return (
        <View className="mt-15 flex-row px-4 pb-3">
            <GooglePlacesAutocomplete
                query={{ key: "AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4" }}
                placeholder='Search'
                styles={{
                    textInput: {
                        backgroundColor: "#eee",
                        borderRadius: 20,
                        fontWeight: "700",
                        marginTop: 7,
                    },
                    textInputContainer: {
                        backgroundColor: "#eee",
                        borderRadius: 50,
                        flexDirection: "row",
                        alignItems: "center",
                        // marginRight: 10,
                    },
                }}
                renderLeftButton={() => <View className="ml-3">
                    <Ionicons name="location-sharp" size={24} />
                </View>
                }
                renderRightButton={() => (
                    <TouchableOpacity activeOpacity={0.5} className="flex-row items-center bg-white p-2 rounded-full mr-3">
                        <AntDesign name="clockcircle" size={11} style={{ marginRight: 9 }} />
                        <Text>Search</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({})