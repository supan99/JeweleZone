import React, { useEffect, useState } from "react";

import {
  Dimensions,
  Image,
  ImageBackground,
  Keyboard,
  LogBox,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import AppTextinput from "../../components/AppTextinput/Textinput";

import AppButton from "../../components/Button/AppButton";
import { validEmail } from "@/common/Validation";
import {
  Opacity,
  color,
  fontFamily,
  fontSize,
  getHeight,
  getWidth,
  showError,
} from "@/common/GConstants";
import { images } from "@/assets/images";

LogBox.ignoreAllLogs();

const dehight = Dimensions.get("window").height;
const dewidth = Dimensions.get("window").width;

const Login = (props: any) => {
  const [email, setemail] = useState("");
  const [emailvisible, setemailvisible] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordvisible, setpasswordvisible] = useState(false);

  const [hidecreatpass, setHidecreatpass] = useState(true);
  const [emaileror, setemailerror] = useState("");
  const [passerror, setpasserror] = useState("");

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
    } else if (password.trim() == "") {
      if (validEmail(email)) {
        setemailvisible(false);
        setpasserror("Please enter password");
        setpasswordvisible(true);
      } else {
      }
    } else {
      showError("success");
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
          style={{
            height: 30,
            width: 30,
            marginTop: getHeight(10),
            marginLeft: getWidth(16),
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

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        Keyboard.dismiss();
      }}
      style={{ flex: 1, backgroundColor: color.white }}
    >
      <Text style={styles.txtlogin}>Login</Text>

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

      <Text
        style={[
          styles.txtforgotpass,
          { marginTop: passwordvisible != false ? getHeight(10) : null },
        ]}
      >
        Forgot Password?
      </Text>

      <AppButton
        onpress={() => {
          validtion();
        }}
        title={"Login"}
        titlestyle={{ color: color.white, fontFamily: fontFamily.semibold }}
        boxstyle={{ backgroundColor: color.brown }}
      />

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Signup");
          console.log("hello");
        }}
        activeOpacity={Opacity}
      >
        <Text style={styles.txtsignup}>Don’t have an account? Sign up</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Login;

const styles = StyleSheet.create({
  txtlogin: {
    marginTop: getHeight(35),
    marginLeft: getWidth(16),
    fontFamily: fontFamily.midium,
    color: color.black,
    fontSize: fontSize.size24,
    marginBottom: getHeight(16),
  },
  txtforgotpass: {
    fontFamily: fontFamily.midium,
    color: color.black,
    fontSize: fontSize.size12,
    marginLeft: getWidth(17),
    lineHeight: 16,
    marginBottom: getHeight(24),
  },
  txtsignup: {
    fontFamily: fontFamily.regular,
    color: color.black,
    fontSize: fontSize.size16,
    alignSelf: "center",
  },
});
