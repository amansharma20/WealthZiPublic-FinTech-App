/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';
import CommonButton from '../../components/CommonButton';
import PagerView from 'react-native-pager-view';
import Dots from 'react-native-dots-pagination';
import { useState } from 'react';
import MyAsyncStorage from '../../persistence/storage/MyAsyncStorage';
import { AsyncStorageConstant } from '../../utils/constants/Theme';
import { useNavigation } from '@react-navigation/core';

export default function Onboarding() {

    const [index, setIndex] = useState(0)
    const imageUrl = '../../assets/illustration/dummy.jpg';

    const navigation = useNavigation();

    useEffect(() => {
        return () => MyAsyncStorage.storeData(AsyncStorageConstant.isFirstLaunch, 'false');
    })

    return (
        <View style={styles.container}>
            <View style={{ flex: 4 }}>
                <PagerView style={{ flex: 1 }} initialPage={0} onPageSelected={(e) => {
                    setIndex(e.nativeEvent.position)
                }}>
                    <View key="1" style={styles.onboardingView}>
                        <Image source={require(imageUrl)}
                            style={styles.imageStyle}
                        />
                        <Text style={styles.title}>Track Mutual Funds Portfolio</Text>
                        <Text style={styles.subtitle}>Track your existing mutual fund portfolio, review and get recommendations.</Text>
                    </View>
                    <View key="2" style={styles.onboardingView}>
                        <Image source={require(imageUrl)}
                            style={styles.imageStyle}
                        />
                        <Text style={styles.title}>Invest in Top Mutual Funds</Text>
                        <Text style={styles.subtitle}>Invest in top mutual funds recommended by our proprietary Zi Score Algorithms.</Text>
                    </View>
                    <View key="3" style={styles.onboardingView}>
                        <Image source={require(imageUrl)}
                            style={styles.imageStyle}
                        />
                        <Text style={styles.title}>Start an SIP and Build Wealth</Text>
                        <Text style={styles.subtitle}>Open your mutual funds investment account for free and start building wealth.</Text>
                    </View>
                </PagerView>
                <Dots length={3} active={index} />
            </View>
            <View style={styles.continueContainer}>
                <CommonButton label={'Continue'} style={{ marginBottom: 40 }} onPress={() => navigation.navigate('Login')} />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    title: {
        fontWeight: "500",
        fontSize: 18,
        color: '#000000',
        marginTop: 30
    },
    subtitle: {
        fontWeight: "100",
        fontSize: 18,
        color: '#8C8C8C',
        marginTop: 10
    },
    onboardingView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        width: '70%',
        height: '50%',
        resizeMode: 'cover'
    },
    continueContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginHorizontal: 40
    }
})

