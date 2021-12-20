/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Responsive } from '../utils/layouts/Layout';
import BouncyCheckbox from 'react-native-bouncy-checkbox';


export default function CommonFilterItems(props) {

    const value = props.value
    const customStyle = props.style
    const [checkboxState, setCheckboxState] = useState(false);

    return (
        <View style={styles.checkBoxContainerStyle}>
            <BouncyCheckbox
                style={styles.checkBoxContainer}
                isChecked={checkboxState}
                disableBuiltInState
                onPress={(val) => {
                    setCheckboxState(!checkboxState)
                }}
                size={20}
                iconStyle={styles.checkBoxIconStyle}
                fillColor={checkboxState ? '#000000' : '#f1f1f1'}
                unfillColor={checkboxState ? '#000000' : '#f1f1f1'}
            />
            <Text style={[styles.bankName, customStyle]}>
                {value}
            </Text>
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
