import React, { useEffect, useState } from "react";

import {
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  Keyboard,
  LogBox,
  Platform,
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
import { CurvedBottomBarExpo } from "react-native-curved-bottom-bar";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import Animated from "react-native-reanimated";

LogBox.ignoreAllLogs();

const dehight = Dimensions.get("window").height;
const dewidth = Dimensions.get("window").width;

const BottomTabView = (props: any) => {
  const Screen1 = () => {
    return <Home />;
  };

  const Screen2 = () => {
    return <Profile />;
  };
  const _renderIcon = (routeName: any, selectedTab: any) => {
    let icon = "";

    switch (routeName) {
      case "Home":
        icon = images.backarrow;
        break;
      case "Account":
        icon = images.closeicon;
        break;
    }

    return <Image tintColor={color.blackfont} source={icon} />;
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <CurvedBottomBarExpo.Navigator
        type="DOWN"
        style={{}}
        shadowStyle={{
          shadowColor: "#DDDDDD",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 1,
          shadowRadius: 5,
        }}
        height={60}
        circleWidth={60}
        bgColor="white"
        initialRouteName="Home"
        // borderTopLeftRight
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "brown",
              bottom: 30,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,
              elevation: 1,
            }}
          >
            <TouchableOpacity
              style={{ flex: 1, justifyContent: "center" }}
              onPress={() => Alert.alert("Click Action")}
            >
              <Image
                style={{
                  height: 30,
                  width: 30,
                  backgroundColor: "gray",
                  borderRadius: 30,
                }}
                source={images.gallaryicon}
              />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}
      >
        <CurvedBottomBarExpo.Screen
          name="Home"
          position="LEFT"
          component={() => <Screen1 />}
        />
        <CurvedBottomBarExpo.Screen
          name="Account"
          component={() => <Screen2 />}
          position="RIGHT"
        />
      </CurvedBottomBarExpo.Navigator>
    </View>
  );
};

export default BottomTabView;
