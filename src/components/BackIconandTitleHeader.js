/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import { FONTS, SIZES } from '../../constants/Theme';

export default function BackIconandTitleHeader({ title }) {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../assets/icons/Back.png')}
                    style={styles.backSize}
                />
            </TouchableOpacity>
            <Text style={styles.headerHeadingText}>
                {title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
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
})
