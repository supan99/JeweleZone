import React, { useEffect, useState } from "react";

import {
  Dimensions,
  Image,
  ImageBackground,
  Keyboard,
  LogBox,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { images } from "../../assets/images";

import AppTextinput from "../../components/AppTextinput/Textinput";

import AppButton from "../../components/Button/AppButton";
import { Pass, number, pincodes, validEmail } from "@/common/Validation";
import {
  Opacity,
  color,
  fontFamily,
  fontSize,
  getHeight,
  getWidth,
} from "@/common/GConstants";

const dehight = Dimensions.get("window").height;
const dewidth = Dimensions.get("window").width;

const Signup = (props: any) => {
  const [email, setemail] = useState("");
  const [emailvisible, setemailvisible] = useState(false);
  const [mobilenumber, setmobilenumber] = useState("");
  const [mobilenumbervisible, setmobilenumbervisible] = useState(false);
  const [gstnumber, setgstnumber] = useState("");
  const [gstnumbervisible, setgstnumbervisible] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordvisible, setpasswordvisible] = useState(false);
  const [hidecreatpass, setHidecreatpass] = useState(true);
  const [emaileror, setemailerror] = useState("");
  const [passerror, setpasserror] = useState("");
  const [mobileerror, setmobileerror] = useState("");
  const [gstnumbererror, setgstnumbererror] = useState("");

  const PassblindCreatePassword = () => {
    setHidecreatpass(!hidecreatpass);
  };

  const validtion = () => {
    if (email == "") {
      setemailerror("Please enter email address");
      setemailvisible(true);
    } else if (!validEmail(email)) {
      setemailerror("Please enter valid email address");
      setemailvisible(true);
    } else if (mobilenumber == "") {
      setmobileerror("Please enter mobile number");
      setmobilenumbervisible(true);
      setemailvisible(false);
    } else if (mobilenumber.length < 9) {
      setmobileerror("Please enter a valid mobile number");
      setmobilenumbervisible(true);
    } else if (!number.test(mobilenumber)) {
      setmobileerror("Please enter a valid mobile number");
      setmobilenumbervisible(true);
    } else if (gstnumber == "") {
      setgstnumbererror("Please enter GST Number");
      setgstnumbervisible(true);
      setmobilenumbervisible(false);
    } else if (password.trim() == "") {
      setpasserror("Please enter password");
      setpasswordvisible(true);
      setgstnumbervisible(false);
    } else if (password.length < 8) {
      setpasserror("Please enter valid password");
      setpasswordvisible(true);
    } else if (!Pass.test(password)) {
      setpasserror("Please enter valid password");
      setpasswordvisible(true);
    } else {
      props.navigation.navigate("OtpVerification");
      setpasswordvisible(false);
    }
  };

  useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            props.navigation.pop();
          }}
          activeOpacity={Opacity}
          style={styles.vwbackicon}
        >
          <Image source={images.backarrow} />
        </TouchableOpacity>
      ),
      headerRight: () => <View></View>,
      headerTitle: () => <View></View>,
      headerTitleAlign: "center",
    });
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        Keyboard.dismiss();
      }}
      style={{ flex: 1, backgroundColor: color.white }}
    >
      <ScrollView>
        <Text style={styles.txtsignup}>Signup</Text>

        {/* ========== email addresas ========== */}

        <AppTextinput
          title={"Business Email Address"}
          value={email}
          placeholder={"Email Address"}
          onChangeText={(text: any) => {
            setemail(text);
            if (text == "") {
              setemailvisible(false);
            }
          }}
          imgpress={() => {
            setemailvisible(false);
            setemail("");
          }}
          errormsgstyle={{
            marginBottom: emailvisible == true ? getHeight(16) : getHeight(0),
          }}
          images={emailvisible == true ? images.closeicon : null}
          errormsg={emailvisible == true ? emaileror : null}
          broderstyle={{
            borderColor:
              emailvisible == true ? color.errorcolor : color.inputebordercolor,
          }}
        />

        {/* ========== mobole number ========== */}

        <AppTextinput
          title={"Mobile Number"}
          value={mobilenumber}
          placeholder={"Mobile Number"}
          onChangeText={(text: any) => {
            if (pincodes.test(text) || text == "") {
              setmobilenumber(text);
            }
            if (text == "") {
              setmobilenumbervisible(false);
            }
          }}
          imgpress={() => {
            setmobilenumbervisible(false);
            setmobilenumber("");
          }}
          errormsgstyle={{
            marginBottom:
              mobilenumbervisible == true ? getHeight(16) : getHeight(0),
          }}
          maxLength={10}
          keyboardType="number-pad"
          images={mobilenumbervisible == true ? images.closeicon : null}
          errormsg={mobilenumbervisible == true ? mobileerror : null}
          broderstyle={{
            borderColor:
              mobilenumbervisible == true
                ? color.errorcolor
                : color.inputebordercolor,
          }}
        />

        {/* ========== GST number ========== */}

        <AppTextinput
          title={"GST Number"}
          value={gstnumber}
          placeholder={"GST Number"}
          onChangeText={(text: any) => {
            if (pincodes.test(text) || text == "") {
              setgstnumber(text);
            }
            if (text == "") {
              setgstnumbervisible(false);
            }
          }}
          imgpress={() => {
            setgstnumbervisible(false);
            setgstnumber("");
          }}
          errormsgstyle={{
            marginBottom:
              gstnumbervisible == true ? getHeight(16) : getHeight(0),
          }}
          keyboardType="number-pad"
          images={gstnumbervisible == true ? images.closeicon : null}
          errormsg={gstnumbervisible == true ? mobileerror : null}
          broderstyle={{
            borderColor:
              gstnumbervisible == true
                ? color.errorcolor
                : color.inputebordercolor,
          }}
        />

        {/* ========== Password ========== */}

        <AppTextinput
          title={"Password"}
          value={password}
          placeholder={"Password"}
          onChangeText={(text: any) => {
            setPassword(text);
            if (text != "") {
              setpasswordvisible(false);
            }
          }}
          imgpress={() => {
            PassblindCreatePassword();
          }}
          secureTextEntry={hidecreatpass}
          imgstyle={{ tintColor: color.brown, height: 16, width: 16 }}
          images={hidecreatpass == true ? images.eyeoff : images.eyeon}
          errormsg={passwordvisible == true ? passerror : null}
          broderstyle={{
            borderColor:
              passwordvisible == true
                ? color.errorcolor
                : color.inputebordercolor,
          }}
        />

        <Text style={styles.txtpassvelidation}>
          The password needs to be of 8 to 12 characters including 1 uppercase
          alphabet, 1 lowercase alphabet and 1 special symbol.
        </Text>

        <AppButton
          onpress={() => {
            validtion();
          }}
          title={"Register"}
          titlestyle={{ color: color.white, fontFamily: fontFamily.semibold }}
          boxstyle={{ backgroundColor: color.brown }}
        />
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Login");
          }}
          activeOpacity={Opacity}
        >
          <Text style={styles.txtalredyacc}>
            Already have an account? Log in
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </TouchableOpacity>
  );
};

export default Signup;

const styles = StyleSheet.create({
  txtalredyacc: {
    fontFamily: fontFamily.regular,
    color: color.black,
    fontSize: fontSize.size16,
    alignSelf: "center",
    marginTop: getHeight(-7),
    marginBottom: getHeight(35),
  },
  txtpassvelidation: {
    fontFamily: fontFamily.regular,
    color: "#28292F",
    fontSize: fontSize.size12,
    marginHorizontal: getWidth(18),
    lineHeight: 16,
    marginBottom: getHeight(24),
  },
  txtsignup: {
    marginTop: getHeight(16),
    marginLeft: getWidth(16),
    fontFamily: fontFamily.midium,
    color: color.black,
    fontSize: fontSize.size24,
    marginBottom: getHeight(16),
  },
  vwbackicon: {
    height: 30,
    width: 30,
    marginTop: getHeight(10),
    marginLeft: getWidth(16),
    backgroundColor: `${color.white}80`,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
});
