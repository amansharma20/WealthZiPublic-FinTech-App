
import React, { } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Color } from '../utils/constants/Theme';

export default function CommonModalButtons(props) {
    return (
        <View style={[styles.investView, { backgroundColor: Color.background, borderColor: Color.appColor, borderWidth: 1, width: '90%' }]}>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={[styles.investNowText, { color: Color.appColor }]}>
                    {props.title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    investView: {
        borderRadius: 15,
        height: 40,
        width: 140,
        backgroundColor: '#1BB18B',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginTop: 10
    },

    investNowText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '500',
    },
}
)