import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
// import { selectBasketItems } from '../../../features/basketSlice'
import LottieView from "lottie-react-native";

const ViewCart = ({ navigation }) => {
    // const items = useSelector(selectBasketItems)
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const addOrderToFireBase = () => {
        setLoading(true);
        // const db = firebase.firestore();
        // db.collection("orders")
        //   .add({
        //     items: items,
        //     restaurantName: restaurantName,
        //     createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        //   })
        //   .then(() => {
        setTimeout(() => {
            setLoading(false);
            navigation.navigate("OrderCompleted");
        }, 2500);
        //   });
    };

    const chekoutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.restaurantName}>{'Beachside Rhino'}</Text>
                        {/* {items.map((item, index) => (
                  <OrderItem key={index} item={item} />
                ))} */}
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                padding: 20,
                                borderBottomWidth: 1,
                                borderBottomColor: "#999",
                            }}
                        >
                            <Text style={{ fontWeight: "600", fontSize: 16 }}>{'Burger'}</Text>
                            <Text style={{ opacity: 0.7, fontSize: 16 }}>{'₹ 285'}</Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                padding: 20,
                                borderBottomWidth: 1,
                                borderBottomColor: "#999",
                            }}
                        >
                            <Text style={{ fontWeight: "600", fontSize: 16 }}>{'Chocolate Cake'}</Text>
                            <Text style={{ opacity: 0.7, fontSize: 16 }}>{'₹ 120'}</Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                padding: 20,
                                borderBottomWidth: 1,
                                borderBottomColor: "#999",
                            }}
                        >
                            <Text style={{ fontWeight: "600", fontSize: 16 }}>{'WOW Momos'}</Text>
                            <Text style={{ opacity: 0.7, fontSize: 16 }}>{'₹ 360'}</Text>
                        </View>
                        <View style={styles.subtotalContainer}>
                            <Text className="font-extrabold" style={styles.subtotalText}>Subtotal</Text>
                            <Text className="font-extrabold">{'₹ 765'}</Text>
                        </View>
                        <View className="flex-1 items-center flex-row absolute bottom-5 Z-10">
                            <View className="flex-row justify-center items-center w-full">
                                <TouchableOpacity activeOpacity={0.7} className="bg-black items-center justify-center h-12 px-2 rounded-md w-80 relative flex-row space-x-1" style={{ backgroundColor: "#F54748" }} onPress={() => {
                                    addOrderToFireBase();
                                    setModalVisible(false);
                                }}>
                                    <Text style={{ color: "#FEF4F4" }} className="font-extrabold text-lg text-center">Checkout</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </>
        );
    };

    return (
        <>
            <Modal animationType='slide' visible={modalVisible} transparent={true} >
                {chekoutModalContent()}
            </Modal>
            <View className="flex-1 items-center flex-row absolute bottom-5 Z-10">
                <View className="flex-row justify-center w-full">
                    <TouchableOpacity activeOpacity={0.9} className="mt-10 bg-black items-center justify-between h-12 px-2 rounded-md w-80 relative flex-row space-x-1" style={{ backgroundColor: "#F54748" }} onPress={() => setModalVisible(true)}>
                        <Text style={{ color: "#FEF4F4" }} className="font-extrabold bg-[#ed6f6f] text-lg px-2">3</Text>
                        <Text style={{ color: "#FEF4F4" }} className="font-extrabold text-lg text-center">View Cart</Text>
                        <Text style={{ color: "#FEF4F4" }} className="font-extrabold text-lg ">₹ 765</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    position: "absolute",
                    bottom: 130,
                    zIndex: 999,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        width: "100%",
                    }}
                >
                    <TouchableOpacity
                        style={{
                            marginTop: 20,
                            backgroundColor: "black",
                            flexDirection: "row",
                            justifyContent: "flex-end",
                            padding: 15,
                            borderRadius: 30,
                            width: 300,
                            position: "relative",
                        }}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={{ color: "white", fontSize: 20, marginRight: 30 }}>
                            View Cart
                        </Text>
                        <Text style={{ color: "white", fontSize: 20 }}>{'totalUSD'}</Text>
                    </TouchableOpacity>
                </View>
            </View> */}

            {loading ? (
                <View
                    style={{
                        backgroundColor: "black",
                        position: "absolute",
                        opacity: 0.6,
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        width: "100%",
                    }}
                >
                    <LottieView
                        style={{ height: 200 }}
                        source={require("../../../assets/animations/scanner.json")}
                        autoPlay
                        speed={3}
                    />
                </View>
            ) : (
                <></>
            )}

        </>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.7)",
    },

    modalCheckoutContainer: {
        backgroundColor: "white",
        padding: 16,
        height: 500,
        borderWidth: 1,
    },

    restaurantName: {
        textAlign: "center",
        fontWeight: "600",
        fontSize: 18,
        marginBottom: 10,
    },

    subtotalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
    },

    subtotalText: {
        textAlign: "left",
        fontSize: 15,
        marginBottom: 10,
    },
});

export default ViewCart;