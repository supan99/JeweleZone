import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TextInput({props}:any) {
  const [cont, setCont] = useState('');
  const [show, setShow] = useState(false);
  const [isSecureText, setIsSecureText] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(!show);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [show]);

  return (
    <View style={{ flex: 1 }}>
      {/* <FloatingLabelInput
        label={''}
        placeholder={props?.placeholder || ""}
        isPassword
        togglePassword={show}
        value={cont}
        onChangeText={value => setCont(value)}
        customShowPasswordComponent={isSecureText ? <EyeOn /> : <></>}
        customHidePasswordComponent={isSecureText ? <EyeOff /> : <></>}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});