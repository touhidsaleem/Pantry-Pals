import { View, Text, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'
import AntDesign from "react-native-vector-icons/AntDesign";
import { auth } from '../../../firebaseConfig';
// import { AuthContext } from '../../../context';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const ProfileIcon = (props) => (
  <>
    <View className="w-10 h-10 justify-center items-center rounded-full" style={{ backgroundColor: '#F54748' }}>
      <AntDesign name={props.icon} size={18} color="#FFF" />
    </View>
    <Text className="text-lg font-semibold pl-6">{props.title}</Text>
  </>
);


export default function Cards({ navigation }) {
  // const { Logout } = useContext(AuthContext);
  const signOutUser = () => {
    auth.signOut()
    AsyncStorage.clear()
      .then(() => {
        navigation.replace('Login')
      }).catch((error) => console.log(error.message));
    // {Logout()}
  }
  return (
    <>

      {/* <TouchableOpacity activeOpacity={0.5} className="bg-white h-14 flex-row items-center mx-4 my-3 pl-4 rounded-xl"
        // style={{ elevation: 5 }}
        onPress={() =>
          navigation.navigate('AddRestaurant')
        }
      >
        <ProfileIcon icon="plus" title="Add Restaurant" />
      </TouchableOpacity> */}

      <TouchableOpacity activeOpacity={0.5} className="bg-white h-14 flex-row items-center mx-4 my-3 pl-4 rounded-xl"
        // style={{ elevation: 5 }}
        onPress={signOutUser}
      >
        <ProfileIcon icon="logout" title="Logout" />
      </TouchableOpacity>

    </>
  )
}