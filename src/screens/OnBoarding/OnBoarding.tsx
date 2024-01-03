import { useState } from 'react';
import {
	ImageBackground,
	StatusBar,
	TouchableOpacity,
	Text,
	SafeAreaView,
	View,
	StyleSheet,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { useTheme } from '@/theme';
import { fetchOne } from '@/services/users';
import { ApplicationScreenProps } from '@/types/navigation';

import OnBoardImage from '@/theme/assets/images/Onboarding.png';
import ScreenView from '@/components/template/ScreenView/ScreenView';


function OnBoarding({ navigation }: ApplicationScreenProps) {
	const { t } = useTranslation(['example', 'welcome']);

	const { fonts } = useTheme();

	const [currentId, setCurrentId] = useState(-1);

	const { isSuccess, data, isFetching } = useQuery({
		queryKey: ['example', currentId],
		queryFn: () => {
			return fetchOne(currentId);
		},
		enabled: currentId >= 0,
	});

	const handleNavigation = () => {
		navigation.navigate("Signup")
	}

	return (
		<ScreenView>
			<StatusBar barStyle={'light-content'} />
			<ImageBackground source={OnBoardImage} style={styles.backGroundImage}>
				<SafeAreaView style={styles.safeAreaContainer}>
					<View style={styles.titleView}>
						{/* Title */}
						<Text
						style={[
						fonts.libreBaskerville, 
						fonts.size_32, 
						fonts.bold700, 
						fonts.white
						]}
						>{t("welcome:title")}</Text>

						{/* Sub Title */}
						<Text
						style={[{ lineHeight: 24 }, 
						fonts.interMedium, 
						fonts.size_18, 
						fonts.medium, 
						fonts.white
						]}
						>{t("welcome:subtitle")}</Text>

					</View>

					{/* Button Get started View */}
					<TouchableOpacity style={{
						paddingVertical: 12,
						justifyContent :"center",
						alignItems: "center",
						backgroundColor: "#FFFF",
						borderRadius: 4
						}}
						activeOpacity={0.6}
						onPress={() => handleNavigation()}
						>
						<Text style={[
							fonts.size_16,
							fonts.inter,
							fonts.brown100,
							fonts.medium
				]}>{t('welcome:buttonTitle')}</Text>
					</TouchableOpacity>
				</SafeAreaView>		
			</ImageBackground>
		</ScreenView>
	);
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,    
	  paddingHorizontal: 25,
	  gap:20,
	  alignSelf:'stretch'
	},
	safeAreaContainer: {
		marginHorizontal: 20, 
		flex:1, 
		justifyContent: "flex-end", 
		bottom: 34
	},
	backGroundImage: {
		height: "100%"
	},
	titleView: {
		marginHorizontal: 16,
		marginBottom: 32,
		gap: 12
	},
  });


export default OnBoarding;
