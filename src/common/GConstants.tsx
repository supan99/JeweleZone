import React from "react";
import { Alert, Dimensions, Linking, Platform, Text, View } from "react-native";

//Static avatar
export const AvatarURL = "Avatar3x.png";

export const screenSize = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width,
};

export const fontFamily = {
  bold: "Inter-Black",
  interbold: "Inter-Bold",
  extrabold: "Inter-ExtraBold",
  extralight: "Inter-ExtraLight",
  light: "Inter-Light",
  midium: "Inter-Medium",
  regular: "Inter-Regular",
  semibold: "Inter-SemiBold",
  inerthem: "Inter-Thin",
  bolditalic: "LibreBaskerville-Bold",
  italic: "LibreBaskerville-Italic",
  regularitalic: "LibreBaskerville-Regular",
};

export const color = {
  white: "#FFFFFF",
  black: "#000000",
  blackfont: "#050506",
  brown: "#764800",
  inputetitle: "#28292F",
  inputebordercolor: "#ECEDEE",
  inputetext: "#656672",
  errorcolor: "#A50606",
  bordercolor: "#D7D7DB",
};
export const fontSize = {
  size8: getWidth(8),
  size9: getWidth(9),
  size10: getWidth(10),
  size11: getWidth(11),
  size12: getWidth(12),
  size13: getWidth(13),
  size14: getWidth(14),
  size15: getWidth(15),
  size16: getWidth(16),
  size17: getWidth(17),
  size18: getWidth(18),
  size19: getWidth(19),
  size20: getWidth(20),
  size21: getWidth(21),
  size22: getWidth(22),
  size23: getWidth(23),
  size24: getWidth(24),
  size25: getWidth(25),
  size26: getWidth(26),
  size27: getWidth(27),
  size28: getWidth(28),
  size36: getWidth(36),
  size42: getWidth(42),
  size34: getWidth(34),
  size50: getWidth(50),
  size30: getWidth(30),
  size38: getWidth(38),
  size32: getWidth(32),
};
export const Opacity = 0.6;

export const showError = (message: string) => {
  return Alert.alert("", message, [{ text: "Ok" }]);
};

//Global function
export function getWidth(size: number) {
  return (size / 375) * screenSize.width;
}

export function getHeight(size: number) {
  return (size / 812) * screenSize.height;
}

export const asyncStorageKey = {
  isWalkthroughVisisted: "isWalkthroughVisisted",
  isNotificationAccess: "isNotificationAccess",
  isLocationAccess: "isLocationAccess",
  isUserLoggedIn: "isUserLoggedIn",
  userData: "userData",
  deviceOSVersion: "DeviceOSVersion",
  deviceDeviceName: "DeviceDeviceName",
  userDefaultAddress: "UserDefaultAddress",
};

// Touchable opacity alpha
export const opacity = 0.6;

// Constants for keyboardType
export const keyboard_type = {
  email: "email-address",
  ascii_capable_numberpad: "ascii-capable-number-pad",
  ascii_capable: "ascii-capable",
};

export const currency = "$";
export const commonBottomMargin = getHeight(37);

//Const Values

export const constantInt = {
  phoneNumberLength: 8,
  minPhoneNumberLength: 5,
  maxPhoneNumberLength: 13,
  passwordLength: 8,
  nameLength: 3,
  otpLength: 4,
  zipcodeLength: 6,
  cvvLength: 3,
  cardNumberLength: 16,
  yearMaxLength: 4,
  monthLength: 2,
};

const staticURLLink = "http://";
export const staticURL = {
  aboutUs: staticURLLink + "/aboutus",
  termscondition: staticURLLink + "/termscondition",
  privacypolicy: staticURLLink + "/privacypolicy",
  view_faqs: staticURLLink + "/view_faqs",
  cancellationPolicy: staticURLLink + "/cancellationpolicy",
};

// Validation messages
export const messages = {
  enterName: "Please enter name",
  enterMin3CharacterName: "Please enter minimum 3 character for ",
  validName: "Please enter valid name",
  blankPhone: "Please enter phone number",
  enterMinPhone: "Please enter minimum 10 digits for phone number",
  validPhone: "Please enter valid phone number",
  blankEmail: "Please enter email",
  validEmail: "Please enter valid email",
  blankPassword: "Please enter password",
  enterMinPassword: "Please enter minimum 8 characters for ",
  validPassword:
    "Password must use upper case, lower case, special character and digit",
  blankConfirmPassword: "Please enter confirm password",
  passwordMismatch: "Password mismatch",
  checkAgree: "Please agree with terms and conditions",
  checkPrivacy: "Please agree with privacy and policy",
  blankOTP: "Please enter OTP",
  validOTP: "Please enter valid OTP",
  blankAddress: "Please enter address",
  blankTitle: "Please enter title",
  blankStreetAddress: "Please enter street address",
  blankPostalCode: "Please enter postal/zipcode",
  enterMinPostalCode: "Please enter minimum 6 digit for zipcode",
  validPostalCode: "Please enter valid postal code",
  blankNewPassword: "Please enter new password",
  newPassword: "new password",
  blankCardHolderName: "Please enter card holder name",
  blankCardNumber: "Please enter card number",
  enterMinCardNumber: "Please enter minimum 16 digit for ",
  validCardNumber: "Please enter valid card number",
  blankMonth: "Please enter month for expiry date",
  validMonth: "Please enter valid month for expiry date",
  blankYear: "Please enter year for expiry date",
  enterMinYear: "Please enter minimum  4 digit for year in expiry date",
  validYear: "Please enter valid year for expiry date",
  blankCVV: "Please enter Cvv",
  enterMinCVV: "Please enter minimum 3 digit for cvv",
  blankNotes: "Please enter notes",

  deleteAddressPopUp: "Are you sure you want to delete this address?",
  deleteAddressSuccess: "Your address has been deleted successfully",
  deleteAccount: "Are you sure you want to delete this account?",

  logoutUser: "Are you sure you want to logout from app?",

  cameraPermission:
    "This allows you to choose photos from library within the app (e.g for your profile photo)",
  galleryPermission:
    "This allows you to choose photos from library within the app (e.g for your profile photo)",
  locationPermission: "This allows you to access your location within the app",
  calenderPermission:
    "This allows you to access your calender. (e.g for Add event into Calender)",
};

// Error Function

// export function showError(message: string) {
//   Alert.alert(appName, message, [{text: 'Ok'}]);
// }

//Dailog Function
// export function showConfirmDialog(message: string, onPressYes: any, yes: string, no: string) {
//   return Alert.alert(
//     appName,
//     message,
//     [
//       // The "Yes" button
//       {
//         text: yes,
//         onPress: onPressYes,
//       },
//       // The "No" button
//       {
//         text: no,
//       },
//     ],
//     {cancelable: true},
//   );
// }
// Empty message

// export const emptyComponent = (message: string) => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: 50,
//         alignSelf: 'center',
//       }}>
//       <Text
//         style={{
//           fontFamily: fontFamily.bold,
//           fontSize: fontSize.size16,
//           color: color.themeBlack,
//         }}>
//         {msg}
//       </Text>
//     </View>
//   );
// };

// Permissions

// export const cameraPermission = Platform.select({
//   ios: PERMISSIONS.IOS.CAMERA,
//   android: PERMISSIONS.ANDROID.CAMERA,
// });

// export const galleryPermission = Platform.select({
//   ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
//   android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
// });

// export const locationWhenInUsePermission = Platform.select({
//   ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
//   android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
// });

// export const locationPermission = Platform.select({
//   ios: PERMISSIONS.IOS.LOCATION_ALWAYS,
//   android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
// });

// Permission popup
// export function checkPermission(permission: any, message: string) {
//   console.log('permission ===> ', permission);
//   return new Promise(callback => {
//     checkMultiple([permission]).then((status:any) => {
//       console.log('status ===> ', status);
//       if (
//         status[permission] == RESULTS.DENIED ||
//         status[permission] == RESULTS.UNAVAILABLE
//       ) {
//         requestMultiple([permission]).then((status:any) => {
//           console.log('status1 ===> ', status);
//           if (
//             status[permission] === RESULTS.BLOCKED ||
//             status[permission] === RESULTS.UNAVAILABLE
//           ) {
//             Alert.alert(
//               appName,
//               message,
//               [
//                 {
//                   text: I18n.t('dontAllowed'),
//                   // onPress: () => openSettings(),
//                   style: 'cancel',
//                 },
//                 {text: I18n.t('allow'), onPress: () => openSettings()},
//               ],
//               {cancelable: false},
//             );

//             callback(false);
//           } else {
//             console.log('CALLED');
//             let data = Object.values(status);
//             if (data.length > 0) {
//               callback(data[0] == 'granted');
//             } else {
//               callback(false);
//             }
//           }
//         });
//         callback(false);
//       } else if (status[permission] == RESULTS.BLOCKED) {
//         if (Platform.OS == 'ios') {
//           Alert.alert(
//             appName,
//             message,
//             [
//               {
//                 text: I18n.t('dontAllowed'),
//                 // onPress: () => Linking.openSettings(),
//                 style: 'cancel',
//               },
//               {text: I18n.t('allow'), onPress: () => openSettings()},
//             ],
//             {cancelable: false},
//           );
//         } else {
//           Alert.alert(
//             appName,
//             message,
//             [
//               {
//                 text: I18n.t('dontAllowed'),
//                 // onPress: () => Linking.openSettings(),
//                 style: 'cancel',
//               },
//               {text: I18n.t('allow'), onPress: () => openSettings()},
//             ],
//             {cancelable: false},
//           );
//         }
//         callback(false);
//       } else {
//         console.log('Permission printe here: ', status[permission]);
//         callback(true);
//       }
//     });
//   });
// }

// export async function getLocationPermissions() {
//   const granted = await request(
//     Platform.select({
//       android:
//         PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION ||
//         PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
//       ios:
//         PERMISSIONS.IOS.LOCATION_WHEN_IN_USE || PERMISSIONS.IOS.LOCATION_ALWAYS,
//     }),
//     {
//       title: appName,
//       message: '`{$appname}` would like access to your location ',
//     },
//   );
//   console.log('Granted ===> ', granted);
//   return granted === RESULTS.GRANTED;
// }

// // Set value in encrypted storage
// export async function setData(key: string, value: any) {
//   try {
//     await AsyncStorage.setItem(key, JSON.stringify(value));
//   } catch (error) {
//     console.log('[Async Storage] Error in set data : ', error);
//   }
// }

// // Get value from Encrypted storage
// export async function getData(key: string, callback: any) {
//   try {
//     var value = await AsyncStorage.getItem(key);

//     callback(JSON.parse(value));
//   } catch (error) {
//     console.log('[Async Storage] Error in get data : ', error);
//   }
// }

// export const getInitialData = (date: string) => {
//   return moment(date, 'hh:mm:ss').format('h:mm A');
// };

// export const getSectionDate = (date: string) => {
//   return moment(date).format('YYYY-MM-DD');
// };

// export const getTime = (date: string) => {
//   return moment.utc(date).local().format('hh:mm A');
// };

// export const getTitle = (title: string) => {
//   var start = moment(title);
//   var end = moment().format('YYYY-MM-DD');
//   let days = moment.duration(start.diff(end)).asDays();
//   if (days < -1) {
//     return moment(title).format('DD MMM, YYYY');
//   } else if (days == -1) {
//     return 'Yesterday';
//   } else {
//     return 'Today';
//   }
// };

// export const getDateTime = (date: string) => {
//   return moment.utc(date).local().format('DD, MMM YYYY [,] hh:mm A');
// };

//Notification type constant

export const notification_type = {
  status_update: {
    name: "status_update",
  },
  other_alert: {
    name: "other_alert",
  },
};

//Login Types
export const Login_Type = {
  apple: "A",
  faceBook: "F",
  google: "G",
  simple: "S",
};

export const User_Type = {
  user: "U",
  provider: "P",
};

//Caller Open
export const openCaller = (phone: string) => {
  console.log("callNumber ----> ", phone);
  let phoneNumber = phone;
  if (Platform.OS !== "android") {
    phoneNumber = `telprompt:${phone}`;
  } else {
    phoneNumber = `tel:${phone}`;
  }
  Linking.canOpenURL(phoneNumber)
    .then((supported) => {
      if (!supported) {
        Alert.alert("Phone number is not available");
      } else {
        return Linking.openURL(phoneNumber);
      }
    })
    .catch((err) => console.log(err));
};
