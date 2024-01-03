import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { OnBoarding, Startup } from '@/screens';
import { useTheme } from '@/theme';

import type { ApplicationStackParamList } from '@/types/navigation';
import Signup from '@/screens/Signup/Signup';

const Stack = createStackNavigator<ApplicationStackParamList>();

function ApplicationNavigator() {
	const { variant, navigationTheme } = useTheme();

	return (
		<NavigationContainer theme={navigationTheme}>
			<Stack.Navigator initialRouteName='Signup' key={variant} screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Onboarding" component={OnBoarding} />
				<Stack.Screen name="Startup" component={Startup} />
				<Stack.Screen name="Signup" component={Signup} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default ApplicationNavigator;
