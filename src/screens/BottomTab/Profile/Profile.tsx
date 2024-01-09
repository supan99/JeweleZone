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
import { Dimensions, LogBox, View } from "react-native";

LogBox.ignoreAllLogs();

const dehight = Dimensions.get("window").height;
const dewidth = Dimensions.get("window").width;

const Profile = (props: any) => {
  return <View style={{ flex: 1, backgroundColor: "blue" }}></View>;
};

export default Profile;
