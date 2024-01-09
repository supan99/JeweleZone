import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { OnBoarding, Startup } from "@/screens";
import { useTheme } from "@/theme";

import type { ApplicationStackParamList } from "@/types/navigation";
import Signup from "@/screens/Signup/Signup";
import { screens } from "../index";

const Stack = createStackNavigator<ApplicationStackParamList>();

function ApplicationNavigator(props: any) {
  const { variant, navigationTheme } = useTheme();

  const addScreen1 = (name: string, component: any, options?: object) => {
    return (
      <Stack.Screen
        options={{
          header: () => false,
          statusBarColor: "transparent",
          statusBarStyle: "light",
          statusBarAnimation: "fade",
          // headerTransparent: false,
          // headerStyle: {backgroundColor: color.wh},
          // headerBackVisible: false,
          title: "",
          statusBarTranslucent: true,
          ...options,
        }}
        name={name}
        component={component}
      />
    );
  };

  const addScreen2 = (name: string, component: any, options?: object) => {
    return (
      <Stack.Screen
        options={{
          header: () => false,
          statusBarColor: "transparent",
          statusBarStyle: "light",
          statusBarAnimation: "fade",
          // headerTransparent: false,
          // headerStyle: {backgroundColor: color.wh},
          // headerBackVisible: false,
          title: "",
          statusBarTranslucent: true,
          ...options,
        }}
        name={name}
        component={component}
      />
    );
  };

  const addScreen3 = (name: string, component: any, options?: object) => {
    return (
      <Stack.Screen
        options={{
          statusBarColor: "transparent",
          statusBarStyle: "dark",
          statusBarTranslucent: true,
          headerShadowVisible: false,
          //   headerTransparent: true,
          headerBackVisible: false,
          title: "",
          ...options,
        }}
        name={name}
        component={component}
      />
    );
  };

  return (
    // 		<NavigationContainer theme={navigationTheme}>
    // 			{/* <Stack.Navigator initialRouteName='Signup' key={variant} screenOptions={{ headerShown: false }}> */}
    // 				{/* <Stack.Screen name="Onboarding" component={OnBoarding} />
    // 				<Stack.Screen name="Startup" component={Startup} />
    // 				<Stack.Screen name="Signup" component={Signup} /> */}

    // {addScreen2('Onboarding', screens.Onboarding)}
    //           {addScreen3('Login', screens.Login)}
    //           {addScreen3('Signup', screens.Signup)}
    //           {addScreen3('OtpVerification', screens.OtpVerification)}
    //           {addScreen3('ComplateProfile', screens.ComplateProfile)}
    // 			{/* </Stack.Navigator> */}
    // 		</NavigationContainer>

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={props.initialRoute}
        screenOptions={
          {
            // presentation: 'transparentModal',
            // animation: 'fade',
          }
        }
      >
        {addScreen2("Onboarding", screens.Onboarding)}
        {addScreen3("Login", screens.Login)}
        {addScreen3("Signup", screens.Signup)}
        {addScreen3("OtpVerification", screens.OtpVerification)}
        {addScreen3("ComplateProfile", screens.ComplateProfile)}

        {addScreen1("BottomTabView", screens.BottomTabView)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ApplicationNavigator;
