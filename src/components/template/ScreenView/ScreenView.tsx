import { View } from 'react-native';

import { useTheme } from '@/theme';

import type { PropsWithChildren } from 'react';

function ScreenView({ children }: PropsWithChildren) {
	const { layout, navigationTheme } = useTheme();

	return (
		<View
			style={[
				layout.flex_1,
				{ backgroundColor: navigationTheme.colors.background },
			]}
		>
			{children}
		</View>
	);
}

export default ScreenView;
