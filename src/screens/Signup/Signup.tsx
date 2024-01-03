import { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import { useTheme } from '@/theme';
import { SafeScreen } from '@/components/template';
import type { ApplicationScreenProps } from '@/types/navigation';

import CheckCircle from "@/theme/assets/images/checkCircle.svg";
import EmptyCircle from "@/theme/assets/images/emptyCircle.svg";
import TextInput from '@/components/template/TextInput/TextInput';

function Signup({ navigation }: ApplicationScreenProps) {
    const [isWholeSaller, setIsWholeSaller] = useState(false);

	const { layout, gutters, fonts } = useTheme();
	const { t } = useTranslation(['signUp']);

	const { isSuccess, isFetching, isError } = useQuery({
		queryKey: ['startup'],
		queryFn: () => {
			return Promise.resolve(true);
		},
	});

	useEffect(() => {
		// navigation.reset({
		// 	index: 0,
		// 	routes: [{ name: 'Example' }],
		// });
	}, [isSuccess]);

    const consumerView = (wholesaler: Boolean, title: String) => {
        return (
            <TouchableOpacity 
                style={[
                    layout.row,
                    layout.itemsCenter,
                    {
                        gap: 10,
                    },
                ]}
                activeOpacity={0.6}
                onPress={() => {
                    setIsWholeSaller(!isWholeSaller)
                }}
            >
                {
                    wholesaler ? 
                        <CheckCircle height={20} width={20}/> 
                    :   <EmptyCircle height={20} width={20}/>
                }
                <Text style={[
                    fonts.inter,
                    fonts.size_14,
                    fonts.medium,{
                        lineHeight: 18
                    }
                ]}>{title}</Text>
            </TouchableOpacity>
        )
    }

	return (
		<SafeScreen>
			<View
				style={[
					layout.flex_1
				]}
			>
				<ScrollView style={{
                        paddingHorizontal: 20,
                    }}>

                    {/* Title and subtitle View */}
                    <>
                        <Text style={[
                            fonts.inter,
                            fonts.size_24,
                            fonts.medium,
                            fonts.titleColor
                        ]}>{t('title')}</Text>

                        <Text style={[
                            fonts.inter,
                            fonts.size_14,
                            fonts.titleColor,{
                                marginTop: 40,
                                lineHeight: 18
                            }
                        ]}>{t('subtitle')}</Text>
                    </>

                    {/* Radio Button View */}

                    <View style={[
                        layout.row,{
                            gap: 24,
                            paddingTop: 14
                        }
                    ]}>
                        {
                            consumerView(isWholeSaller, t("wholesaler"))
                        }
                        {
                           consumerView(!isWholeSaller, t("retailer"))
                        }
                    </View>
                    
                    <Text style={[
                        fonts.inter,
                        fonts.size_12,
                        fonts.secondaryColor,
                        {
                            marginTop: 20,
                            lineHeight: 16
                        }
                    ]}>{t("businessEmailAddress")}</Text>

                    <TextInput 
                        placeholder={"Input Text here.."}
                    />
                </ScrollView>
			</View>
		</SafeScreen>
	);
}

export default Signup;


const Styles = StyleSheet.create({
    container: {
        flex: 1,    
        paddingHorizontal: 25,
        gap:20,
        alignSelf:'stretch'
      },
})