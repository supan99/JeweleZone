import 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MMKV } from 'react-native-mmkv';

import { ThemeProvider } from '@/theme';

import ApplicationNavigator from './navigators/Application';
import './translations';
import { useState } from 'react';

const queryClient = new QueryClient();

export const storage = new MMKV();

function App() {

	const [initialRoute, setinitialRoute] = useState('');
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider storage={storage}>
				<ApplicationNavigator initialRoute={initialRoute} />
			</ThemeProvider>
		</QueryClientProvider>
	);
}

export default App;
