

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { FONTS } from '../../constants/Theme';

function CommonButtonGreen({ label, style, labelStyle, ...rest }) {
    return (
        <TouchableOpacity {...rest} activeOpacity={0.8}>
            <View style={styles.buttonContainer}>
                <Text style={styles.headingText}>
                    {label}
                </Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 15,
        borderWidth: 2,
        width: '95%',
        height: 50,
        borderColor: '#1BB18B',
        elevation: 8,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        paddingHorizontal: 20,
        alignSelf: 'center',
        shadowColor: '#1BB18B'
    },
    headingText: {
        color: '#1BB18B',
        fontSize: 18,
        fontFamily: Platform.select({
            android: FONTS.proxima700,
            ios: '',
        }),
        lineHeight: 22,
    },
});
export default CommonButtonGreen;
