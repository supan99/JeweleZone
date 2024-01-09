import { View, Text, TextInput, Dimensions } from "react-native";
import React, { forwardRef, useEffect } from "react";
import {
  color,
  fontFamily,
  fontSize,
  getHeight,
  getWidth,
} from "@/common/GConstants";

const dewidth = Dimensions.get("window").width;

const AppOtpTextInput = forwardRef((props: any, ref: any) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: getHeight(48),

        alignSelf: "center",
        gap: getWidth(10),
      }}
    >
      <TextInput
        style={{
          fontSize: fontSize.size14,
          color: color.black,
          fontFamily: fontFamily.midium,

          width: dewidth / 5.5,
          height: getWidth(44),

          borderColor: "#D7D7DB",
          borderWidth: 1,
          borderRadius: 8,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",

          fontWeight: "400",
        }}
        maxLength={1}
        ref={ref}
        placeholderTextColor={`${color.black}80`}
        placeholder="0"
        value={props.value}
        onChangeText={props.onChangeText}
        keyboardType="number-pad"
        onKeyPress={props.onKeyPress}
      />
    </View>
  );
});

export default AppOtpTextInput;
