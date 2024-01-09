import React, {forwardRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';

import {images} from '../../assets/images';
import { Opacity, color, fontFamily, fontSize, getHeight, getWidth } from '@/common/GConstants';

const AppTextinput = forwardRef((props: any, ref: any) => {
  return (
    <View>
      <Text
        style={{
          fontSize: fontSize.size12,
          marginLeft: getWidth(17),
          marginBottom: getHeight(8),
          fontFamily: fontFamily.regular,
          color: color.inputetitle,
        }}>
        {props?.title}
      </Text>
      <View
        style={[
          {
            flexDirection: 'row',
            borderWidth: 1,
            marginHorizontal: getWidth(16),
            borderRadius: 8,
          },
          {...props?.broderstyle},
        ]}>
        <TextInput
          editable={props?.editable}
          placeholder={props?.placeholder}
          value={props?.value}
          onSubmitEditing={props?.onSubmitEditing}
          onKeyPress={props?.onKeyPress}
          keyboardType={props?.keyboardType}
          maxLength={props?.maxLength}
          ref={ref}
          placeholderTextColor={color.inputetext}
          cursorColor={color.black}
          secureTextEntry={props?.secureTextEntry}
          onChangeText={props?.onChangeText}
          autoCapitalize={props?.autoCapitalize}
          style={{
            fontFamily: fontFamily.regular,
            fontSize: fontSize.size14,
            color: color.black,
            marginVertical:
              Platform.OS === 'ios' ? getHeight(15) : getHeight(2),
            marginLeft: getWidth(10),
            flex: 0.95,
          }}
        />
        <TouchableOpacity
          hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
          style={{
            alignSelf: 'center',
          }}
          onPress={props?.imgpress}
          activeOpacity={Opacity}>
          <Image style={{...props?.imgstyle}} source={props?.images} />
        </TouchableOpacity>
      </View>
      <Text
        style={[
          {
            fontFamily: fontFamily.regular,
            fontSize: fontSize.size12,
            color: color.errorcolor,
            marginLeft: getWidth(17),
            marginTop: getHeight(8),
          },
          {...props?.errormsgstyle},
        ]}>
        {props?.errormsg}
      </Text>
    </View>
  );
});

export default AppTextinput;
