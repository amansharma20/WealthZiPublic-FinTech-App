/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native';
import { FONTS } from '../../constants/Theme';
import { commanStyles } from '../assets/styles';
import { Color } from '../utils/constants/Theme';

export default function FundHeader({ title, ...rest }) {
    return (
        <View style={styles.iciciSaveContainer}>
            <View style={styles.innerContainer}>
                <View style={[styles.iconContainer, commanStyles.appShadow, {...rest}] }>
                    <Image source={require('../assets/icons/iciciLogo.png')}
                        style={styles.iciciSize} />
                </View>
                <View style={{ width: '80%' }}>
                    <Text style={styles.iciciText} {...rest}>
                        {/* ICICI Prudential Technology {"\n"} Fund - Growth */}
                        {title}
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    iciciSaveContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: 55,
        height: 53,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    iciciSize: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    iciciText: {
        color: Color.blue,
        fontFamily: FONTS.proxima500,
        fontSize: 18,
        paddingLeft: 7,
    },

})
