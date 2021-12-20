/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, SIZES } from '../../../../../../constants/Theme';
import { commanStyles } from '../../../../../assets/styles';
import { Color } from '../../../../../utils/constants/Theme';
import FundHeader from '../../../../../components/FundHeader';

export default function SwitchSuccess() {
    const navigation = useNavigation();
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../../../assets/icons/Back.png')}
                        style={styles.backSize}
                    />
                </TouchableOpacity>
                <Text style={styles.headerHeadingText}>
                    SWP
                </Text>
            </View>
            <View style={styles.body}>

                <View style={{ alignItems: 'center', paddingBottom: '10%' }}>
                    <Image source={require('../../../../../assets/images/success.png')}
                        style={{
                            width: '100%',
                            height: 150,
                        }} />
                    <Text style={{fontSize: 14, alignSelf: 'center', color: Color.blue, fontFamily: FONTS.proxima500}}>
                    Some error ocurred, Please try again
                    </Text>
                </View>

                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={commanStyles.greyTextSmall}>
                            Units for SWP
                        </Text>
                        <Text style={commanStyles.greyTextSmall}>
                            Amount
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={commanStyles.numberBold}>
                            5420
                        </Text>
                        <Text style={commanStyles.numberBold}>
                            ₹5000
                        </Text>
                    </View>
                </View>

                <View style={styles.fundHeaderContainer}>
                    <FundHeader title={'ICICI Prudential Technology Fund - Growth'} />
                </View>

                <Text style={styles.fundBottomText}>
                    To
                </Text>

                <View style={styles.fundHeaderContainer}>
                    <FundHeader title={'ICICI Prudential Technology Fund - Growth'} />
                </View>


            </View>
            <View style={styles.footer}>
                <Text style={styles.termsText} numberOfLines={2}>
                    By continuing, I agree with the Disclaimer and T&C of Wealthzi
                </Text>
                <View style={[styles.bottomIconContainer, commanStyles.appShadow]}>
                    <TouchableOpacity onPress={() => navigation.navigate('SWPSuccess')} style={[styles.investView, commanStyles.appShadow]}>
                        <Text style={styles.investNowText}>
                            CONFIRM
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    body: {
        padding: SIZES.padding4,
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: SIZES.padding4,
    },
    backSize: {
        width: 24,
        height: 20,
        resizeMode: 'contain',
    },
    headerHeadingText: {
        color: '#023373',
        fontSize: 18,
        paddingLeft: 28,
        lineHeight: 22,
        fontFamily: FONTS.proxima700,
    },
    footer: {
        justifyContent: 'flex-end',
    },
    termsText: {
        fontSize: 14,
        color: Color.blue,
        fontFamily: FONTS.proxima500,
        textAlign: 'center',
        marginBottom: 10
    },
    bottomIconContainer: {
        paddingVertical: 25,
        backgroundColor: Color.background,
        alignItems: 'center',
        elevation: 8,
    },
    investNowText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontFamily: FONTS.proxima700,
    },
    investView: {
        borderRadius: 15,
        height: 50,
        width: "80%",
        backgroundColor: '#1BB18B',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
    },
    fundHeaderContainer: {
        paddingVertical: 40,
    },
    fundBottomText: {
        fontSize: 18,
        fontFamily: FONTS.proxima700,
        color: COLORS.black,
        alignSelf: 'center'
    },
});
