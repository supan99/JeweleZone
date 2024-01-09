import React, { useEffect, useState } from "react";

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
import { CurvedBottomBarExpo } from "react-native-curved-bottom-bar";
import {
  Dimensions,
  Image,
  LogBox,
  TouchableOpacity,
  View,
} from "react-native";

LogBox.ignoreAllLogs();

const dehight = Dimensions.get("window").height;
const dewidth = Dimensions.get("window").width;

const Home = (props: any) => {
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
  return <View style={{ flex: 1, backgroundColor: "ksyblue" }}></View>;
};

export default Home;
