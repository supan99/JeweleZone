import React, { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { images } from "../../assets/images";

import { CommonActions } from "@react-navigation/native";
import AppOtpTextInput from "../../components/OtpInpute/AppOtpTextInput";
import AppButton from "../../components/Button/AppButton";
import {
  Opacity,
  color,
  fontFamily,
  fontSize,
  getHeight,
  getWidth,
  showError,
} from "@/common/GConstants";

const dehight = Dimensions.get("window").height;
const dewidth = Dimensions.get("window").width;
const OtpVerification = (props: any) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hidecreatpass, setHidecreatpass] = useState(true);
  const [number, setNumber] = useState(props.route.params?.num);
  const [veryfytype, setveryfytype] = useState(props.route.params?.veryfytype);
  const [countrycode, setcountrycode] = useState(
    props.route.params?.countryCode
  );
  const [modeluplod, setModeluplod] = useState(false);
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");

  const otp1Ref = useRef(null);
  const otp2Ref = useRef(null);
  const otp3Ref = useRef(null);
  const otp4Ref = useRef(null);

  useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Welcome");
          }}
          activeOpacity={Opacity}
          style={{
            height: 30,
            width: 30,
            marginTop: getHeight(10),
            marginLeft: getWidth(12),
            backgroundColor: `${color.white}80`,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image source={images.backarrow} />
        </TouchableOpacity>
      ),
      headerRight: () => <View></View>,
      headerTitle: () => <View></View>,
      headerTitleAlign: "center",
    });
  }, []);

  const validate = () => {
    Keyboard.dismiss();
    var sendotp = otp1 + otp2 + otp3 + otp4;
    if (otp1 == "") {
      showError("Please Enter OTP");
    } else if (otp2 == "") {
      showError("Please Enter Valid OTP");
    } else if (otp3 == "") {
      showError("Please Enter Valid OTP");
    } else if (otp4 == "") {
      showError("Please Enter Valid OTP");
    } else {
      props.navigation.navigate("ComplateProfile");
    }
  };

  const containsOnlyNumbers = (str: any) => {
    return /^\d+$/.test(str);
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        Keyboard.dismiss();
      }}
      style={{ flex: 1, backgroundColor: color.white }}
    >
      <View
        style={{
          flex: 1,
          // backgroundColor: color.white,
        }}
      >
        <Text style={styles.txtotp}>Verify OTP</Text>
        <Text style={styles.txtinfo2}>We have sent an OTP to</Text>
        <Text style={styles.txtinfo}>hem************ons@gmail.com.</Text>

        <View style={styles.vwbox}>
          <AppOtpTextInput
            ref={otp1Ref}
            value={otp1}
            onChangeText={(text: any) => {
              if (containsOnlyNumbers(text) || text == "") {
                setOtp1(text);
                text != "" ? otp2Ref?.current?.focus() : null;
              }
              // setOtp1(text);
            }}
            onKeyPress={() => {}}
          />

          <AppOtpTextInput
            ref={otp2Ref}
            value={otp2}
            onChangeText={(text: any) => {
              if (containsOnlyNumbers(text) || text == "") {
                setOtp2(text);
                text ? otp3Ref?.current?.focus() : null; //otp1Ref?.current.focus();
              }
              // setOtp2(text);
            }}
            onKeyPress={(data: any) => {
              console.log("ON KEY PRESS ==== > ", data.nativeEvent.key);
              if (data.nativeEvent.key == "Backspace" && otp2.length == 0) {
                otp1Ref?.current?.focus();
                setOtp1("");
              }
            }}
          />

          <AppOtpTextInput
            ref={otp3Ref}
            value={otp3}
            onChangeText={(text: any) => {
              if (containsOnlyNumbers(text) || text == "") {
                setOtp3(text);
                text ? otp4Ref?.current?.focus() : null; //otp2Ref?.current.focus();
              }
              // setOtp3(text);
            }}
            onKeyPress={(data: any) => {
              console.log("ON KEY PRESS ==== > ", data.nativeEvent.key);
              if (data.nativeEvent.key == "Backspace" && otp3.length == 0) {
                otp2Ref?.current?.focus();
                setOtp2("");
              }
            }}
          />

          <AppOtpTextInput
            ref={otp4Ref}
            value={otp4}
            onChangeText={(text: any) => {
              if (containsOnlyNumbers(text) || text == "") {
                setOtp4(text);
                Keyboard.dismiss();
                // text ? otp5Ref?.current?.focus() : null; //otp2Ref?.current.focus();
              }
              // setOtp4(text);
            }}
            onKeyPress={(data: any) => {
              console.log("ON KEY PRESS ==== > ", data.nativeEvent.key);
              if (data.nativeEvent.key == "Backspace" && otp4.length == 0) {
                otp3Ref?.current?.focus();
                setOtp3("");
              }
            }}
          />
        </View>
        <View style={{ marginTop: getHeight(24) }}>
          <AppButton
            onpress={() => {
              validate();
            }}
            title={"Verify OTP"}
            titlestyle={{ color: color.white, fontFamily: fontFamily.semibold }}
            boxstyle={{ backgroundColor: color.brown }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  txtotp: {
    fontFamily: fontFamily.midium,
    fontSize: fontSize.size24,
    color: color.blackfont,
    marginLeft: getWidth(16),
    marginTop: getHeight(50),
  },
  txtinfo: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.size14,
    color: color.blackfont,
    marginLeft: getWidth(16),

    marginBottom: getHeight(10),
  },
  txtinfo2: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.size14,
    color: color.blackfont,
    marginLeft: getWidth(16),
    marginTop: getHeight(18),
    marginRight: dewidth - getWidth(200),
  },
  vwbox: {
    flexDirection: "row",
    marginTop: getHeight(0),
    marginHorizontal: getWidth(20),
    alignSelf: "center",
    gap: getWidth(22),
  },
  txtrec: {
    fontFamily: fontFamily.midium,
    fontSize: fontSize.size14,
    alignSelf: "center",
    position: "absolute",
    bottom: getHeight(105),
    color: color.white,
  },
});
