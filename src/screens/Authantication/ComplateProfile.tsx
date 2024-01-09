import { images } from "@/assets/images";
import {
  Opacity,
  color,
  fontFamily,
  fontSize,
  getHeight,
  getWidth,
  opacity,
} from "@/common/GConstants";
import AppButton from "@/components/Button/AppButton";
import React, { useEffect, useState } from "react";

import {
  Dimensions,
  Image,
  ImageBackground,
  Keyboard,
  LogBox,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const dehight = Dimensions.get("window").height;
const dewidth = Dimensions.get("window").width;

const ComplateProfile = (props: any) => {
  useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => <View></View>,
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            props.navigation.pop();
          }}
          activeOpacity={Opacity}
          style={styles.vwcloseicon}
        >
          <Image style={styles.imgcloseicon} source={images.closeicon} />
        </TouchableOpacity>
      ),
      headerTitle: () => <View></View>,
      headerTitleAlign: "center",
    });
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: color.white }}>
      <Text style={styles.txtcomplateprofile}>Complete your Profile</Text>

      <View style={styles.vwgallery}>
        <Image source={images.gallaryicon} />

        <Text style={styles.txtaddlogo}>Add Your Logo</Text>
      </View>

      <AppButton
        onpress={() => {}}
        title={"Save"}
        titlestyle={{ color: color.white, fontFamily: fontFamily.semibold }}
        boxstyle={{ backgroundColor: color.brown }}
      />

      <TouchableOpacity
        activeOpacity={opacity}
        onPress={() => {
          props.navigation.navigate("BottomTabView");
        }}
      >
        <Text style={styles.txtskip}>Skip for Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ComplateProfile;

const styles = StyleSheet.create({
  vwcloseicon: {
    height: 30,
    width: 30,

    marginRight: getWidth(16),
    backgroundColor: `${color.white}80`,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  imgcloseicon: { height: 24, width: 24, tintColor: color.black },
  txtcomplateprofile: {
    fontFamily: fontFamily.midium,
    color: color.black,
    fontSize: fontSize.size24,
    marginLeft: getWidth(16),
    marginTop: getHeight(16),
  },
  vwgallery: {
    height: getHeight(184),
    marginHorizontal: getWidth(16),
    borderWidth: 1,
    borderStyle: "dashed",
    marginTop: getHeight(40),
    borderRadius: 1,
    borderColor: color.bordercolor,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: getHeight(24),
  },
  txtaddlogo: {
    fontFamily: fontFamily.regular,
    color: color.black,
    fontSize: fontSize.size14,
  },
  txtskip: {
    fontFamily: fontFamily.midium,
    color: color.black,
    fontSize: fontSize.size16,
    alignSelf: "center",
    marginTop: getHeight(-10),
  },
});
