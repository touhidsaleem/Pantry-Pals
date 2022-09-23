import { Text, View, TouchableOpacity, Alert, KeyboardAvoidingView, TextInput, StyleSheet, Button, Image } from 'react-native';
import React, { useLayoutEffect, useState, useRef, useEffect, } from 'react';
import { firebaseConfig, auth } from '../firebaseConfig';
import PhoneInput from 'react-native-phone-number-input';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { ref, set } from "firebase/database";
import { rdb } from "../firebaseConfig";



const LoginScreen = ({ navigation, userData }) => {
  const recaptchaVerifier = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState();
  const [verificationId, setVerificationId] = useState();
  const [verificationCode, setVerificationCode] = useState();
  const [flag, setFlag] = useState(false);

  const [message, showMessage] = useState();
  const attemptInvisibleVerification = true;

  useEffect(() => {
    const unsubscirbe = auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        navigation.navigate('BottomTabs', {
          screen: 'Home',
        });
      }
    });
    return unsubscirbe;
  }, [])


  
  useEffect(() => {
    setTimeout(() => {
      showMessage(undefined);
    }, 3000);
  }, [showMessage]);

  // useEffect(() => {
  //   if (userData !== null) {
  //     navigation.navigate('BottomTabs', {
  //         screen: 'Home',
  //       });
  //   }
  // }, [])

  const lengthInput = "6";

  const signIn = async () => {
    try {
      const phoneProvider = new PhoneAuthProvider(auth);
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      );
      setVerificationId(verificationId);
      showMessage({
        text: 'Verification code has been sent to your phone.', color: 'green'
      });
      setFlag(true);
    } catch (err) {
      showMessage({ text: `${err.message}`, color: 'red' });
      // showMessage({ text: `Oops! seems invalid Number`, color: 'red' });
    }
  };

  const verify = async () => {
    try {
      const credential = PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      await signInWithCredential(auth, credential);
      showMessage({ text: 'Phone authentication successful 👍', color: 'green' });
      // set(ref(rdb, 'users/' + phoneNumber), {
      //   phoneNumber: phoneNumber,
      // })
      console.log('passed', phoneNumber)
      navigation.replace('Username', phoneNumber);
    } catch (err) {
      // showMessage({ text: `Error: ${err.message}`, color: 'red' });
      showMessage({ text: `OTP Invalid`, color: 'red' });
    }
  };


  return (
    <>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
        attemptInvisibleVerification={true}
      />
      <View className="flex-1 w-full" style={{ display: !flag ? "flex" : "none", backgroundColor: "#FFFFFF" }}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={0}
          behavior={'height'}
          className="flex-1 w-full"
        >
          <View className="font-bold w-screen h-2/3 justify-center items-center" style={{ height: "60%" }}>
            <Image className="w-full h-full" source={{ uri: "https://b.zmtcdn.com/data/pictures/chains/2/18796372/0216a546d44b0225ce89ae448a1dffa0_o2_featured_v2.jpg?output-format=webp" }} />
          </View>

          <Text className="text-xl font-bold text-center my-5 mx-2" style={{ color: "#2E2828" }}>Taste the Best Restaurants</Text>

          {/* <Text className="text-md font-bold text-center  mb-2 mx-2">Log in or Sign</Text> */}

          <View className="flex-row rounded-md items-center mx-4 justify-center" style={{ backgroundColor: "#FEF4F4" }}>
            <PhoneInput
              placeholder='Phone Number'
              keyboardType='phone-pad'
              // autoFocus
              defaultCode='IN'
              value={phoneNumber}
              onChangeFormattedText={phoneNumber => setPhoneNumber(phoneNumber)}
              withShadow
              isValidNumber={phoneNumber}
            />
          </View>

          <View className="justify-end items-center my-5 p-1 mx-4">
            <TouchableOpacity activeOpacity={0.5} disabled={!phoneNumber} style={{ width: '100%' }} onPress={signIn}>
              <View className="rounded-md w-full h-12 items-center justify-center" style={{ backgroundColor: "#F54748" }}>
                <Text className="text-center text-lg font-semibold w-full" style={{ color: "#FEF4F4" }}>Continue</Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity activeOpacity={0.5} className="items-center mt-20">
            <Text className="underline" style={{ color: "#2E2828" }}>Terms & Conditions</Text>
          </TouchableOpacity>

        </KeyboardAvoidingView>
        <View className="bg-slate-600 h-1/3 hidden rounded-t-3xl justify-center items-center">
          <Text style={{ color: "#2E2828" }}>This is terms and Conditions</Text>
        </View>
      </View>

      {/* OTP Screen Start */}

      <View className="flex-1" style={{ display: flag ? "flex" : "none", backgroundColor: '#FFF' }}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={50}
          behavior={'height'}
          className="flex-1 items-center p-5"
        >
          <Text className="mt-28 w-full text-xl text-left font-bold" style={{ color: "#2E2828" }}>Enter OTP sent in {phoneNumber} via SMS</Text>
          <View className="flex-1 w-full" >
            <Text className="absolute left-4" style={{ top: 10, zIndex: 555, backgroundColor: '#FFF', color: '#F54748' }}> OTP </Text>
            <TextInput
              editable={!!verificationId}
              onChangeText={setVerificationCode}
              maxlength={lengthInput}
              value={verificationCode}
              keyboardType="numeric"
              // className="w-full h-10 absolute text-transparent"
              className="w-full h-14 mt-5 text-center text-2xl font-semibold rounded-md"
              caretHidden={true}
              autoFocus
              style={{ borderWidth: 1.5, borderColor: "#F54748" }}
            />
            {/* <View className="flex-row items-center justify-center relative top-0 left-0">
              {
                Array(lengthInput).fill().map((data, index) => (
                  <View
                    key={index}
                    className="w-10 h-10 m-2 justify-center items-center rounded-lg"
                    style={{ borderWidth: 2 }}
                  >
                    <Text
                      className="text-center text-lg"
                      onPress={() => textInput.focus()}
                    >
                      {verificationCode && verificationCode.length > 0 ? verificationCode[index] : ""}
                    </Text>
                  </View>
                ))
              }
            </View> */}

            <View className="flex-1 justify-end items-center w-full">
              <TouchableOpacity activeOpacity={0.5} disabled={!verificationId} style={{ width: '100%' }} onPress={verify}>
                <View className="rounded-md w-full h-12 items-center justify-center" style={{ backgroundColor: "#F54748" }}>
                  <Text className="font-semibold text-lg items-center" style={{ color: "#FEF4F4" }}>Verify</Text>
                </View>
              </TouchableOpacity>
            </View>

          </View>
        </KeyboardAvoidingView>

      </View>


      {message ? (
        <TouchableOpacity
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: 0xffffffff, justifyContent: 'center', height: 100, borderRadius: 10, marginTop: 40, marginHorizontal: 10, borderLeftWidth: 7, elevation: 10 },
          ]}
          onPress={() => showMessage(undefined)}
          >
          <Text
            style={{
              color: message.color || 'green',
              fontSize: 17,
              textAlign: 'center',
              // margin: 20,
            }}>
            {message.text}
          </Text>
        </TouchableOpacity>
      ) : (
        undefined
      )}
      {attemptInvisibleVerification}

    </>
  )
}

export default LoginScreen;
