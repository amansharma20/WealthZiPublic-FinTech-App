/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Responsive } from '../../../utils/layouts/Layout';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import _ from 'lodash';
import CommonFilterItems from '../../../components/CommonFilterItems';
import { ScrollView } from 'react-native-gesture-handler';


const AssestData = [
   'Rs. 500',
   'Rs. 1000',
   'Rs. 5000'
]

export default function Investment() {
    const navigation = useNavigation();



    return (
        <View style={styles.container}>
            <ScrollView style={styles.body}>
                {
                    _.map(AssestData, (value, index) => {
                        return (
                            <CommonFilterItems value={value} />
                        );
                    })
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingBottom: Responsive.height(20),
    },
    body: {
        marginLeft: -70,
        padding: 12,
    },
    flatlistContainer: {
        paddingHorizontal: 10,
    },
    headerText: {
        fontSize: 10,
    },
    checkBoxContainer: { marginTop: 0, width: 24, height: 24, borderRadius: 4 },
    checkBoxIconStyle: { borderRadius: 4, borderWidth: 0 },
    checkBoxContainerStyle: { alignItems: 'center', flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 8 },
    bankName: { fontSize: 15, color: '#172B4D', paddingLeft: 4 },
});
