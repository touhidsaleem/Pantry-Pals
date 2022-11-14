import Reactr from "react";
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import LottieView from "lottie-react-native";
import { Divider } from '@rneui/themed'

export default function OrderCompleted() {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* green checkmark */}
      <View
        style={{
          margin: 15,
          alignItems: "center",
          height: "100%",
        }}
        className="mt-10"
      >
        <LottieView
          style={{ height: 100, alignSelf: "center" }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your order at {'Beachside Rhino'} has been placed for {'₹ 765'}
        </Text>
        <ScrollView>
          {/* <MenuItems
          foods={lastOrder.items}
          hideCheckbox={true}
          marginLeft={10}
        /> */}
          <View>
            <View className="flex-row justify-between items-center mt-2">
              <View className="flex-row">
                <View className="justify-evenly w-60">
                  <Text className="text-lg font-semibold" style={{ color: "#2E2828" }}>{'Burger'}</Text>
                  <Text className="text-xs" style={{ color: "#2E2828" }}>{'Giant Bun, with lettuce, a patty of meat, with special Sauce'}</Text>
                  <Text className="text-xs" style={{ color: "#2E2828" }}>{'₹ 285'}</Text>
                </View>
              </View>
              <View>
                <Image source={{ uri: "https://b.zmtcdn.com/data/pictures/6/38476/1fc2c60c6d6ee5729c386c18811d8f61.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" }} className="w-16 h-16 rounded-md shadow-2xl" />
              </View>
            </View>
            <Divider width={0.5} style={{ marginTop: 10, marginHorizontal: 10 }} />
          </View>
          <View>
            <View className="flex-row justify-between items-center mt-2">
              <View className="flex-row">
                <View className="justify-evenly w-60">
                  <Text className="text-lg font-semibold" style={{ color: "#2E2828" }}>{'Chocolate Cake'}</Text>
                  <Text className="text-xs" style={{ color: "#2E2828" }}>{'A cake with top layer Chocolate'}</Text>
                  <Text className="text-xs" style={{ color: "#2E2828" }}>{'₹ 120'}</Text>
                </View>
              </View>
              <View>
                <Image source={{ uri: "https://b.zmtcdn.com/data/pictures/chains/2/16529642/871d7282b7a07b3124784f015a37545c_o2_featured_v2.jpg" }} className="w-16 h-16 rounded-md shadow-2xl" />
              </View>
            </View>
            <Divider width={0.5} style={{ marginTop: 10, marginHorizontal: 10 }} />
          </View>
          <View>
            <View className="flex-row justify-between items-center mt-2">
              <View className="flex-row">
                <View className="justify-evenly w-60">
                  <Text className="text-lg font-semibold" style={{ color: "#2E2828" }}>{'WOW Momos'}</Text>
                  <Text className="text-xs" style={{ color: "#2E2828" }}>{'Momos With special Sauce for additional blends'}</Text>
                  <Text className="text-xs" style={{ color: "#2E2828" }}>{'₹ 360'}</Text>
                </View>
              </View>
              <View>
                <Image source={{ uri: "https://b.zmtcdn.com/data/pictures/chains/8/18577178/cc7cfcafbaa312b8e003ab60181246b0_o2_featured_v2.jpg" }} className="w-16 h-16 rounded-md shadow-2xl" />
              </View>
            </View>
            <Divider width={0.5} style={{ marginTop: 10, marginHorizontal: 10 }} />
          </View>

          <LottieView
            style={{ height: 200, alignSelf: "center" }}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}