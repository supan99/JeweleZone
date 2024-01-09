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
import {
  Opacity,
  color,
  fontFamily,
  fontSize,
  getHeight,
  getWidth,
} from '@/common/GConstants';
import {images} from '../../assets/images';

const AppButton = forwardRef((props: any, ref: any) => {
  return (
    <TouchableOpacity
      onPress={props?.onpress}
      activeOpacity={Opacity}
      style={[
        {
          marginBottom: getHeight(40),
          marginHorizontal: getWidth(16),

          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
        },
        {...props?.boxstyle},
      ]}>
      <Text
        style={[
          {
            marginVertical: getHeight(12),

            fontSize: fontSize.size16,
          },
          {...props?.titlestyle},
        ]}>
        {props?.title}
      </Text>
    </TouchableOpacity>
  );
});

export default AppButton;
