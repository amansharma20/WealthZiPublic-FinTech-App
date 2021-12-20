/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CommonButtonGreen from '../../../components/CommonButtonGreen';
import CommonButton from '../../../components/CommonButton';
import BouncyCheckboxGroup, {
    ICheckboxButton,
} from "react-native-bouncy-checkbox-group";


export default function OneTimeCheckout() {
    const navigation = useNavigation();

    const [activeButton, setActiveButton] = useState(false);
    const [showBank, setShowBank] = useState(false);

    // const addBank = setActiveButton(true); setShowBank(true); 

    const verticalStaticData = [
        {
          id: 0,
        },
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
      ];
      

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../../assets/icons/Back.png')}
                            style={styles.backSize}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerHeadingText}>
                        ONE TIME
                    </Text>
                </View>
                <View style={styles.body}>
                    <Text style={styles.selectText}>
                        Select Bank
                    </Text>
                    <Text style={styles.subText}>
                        Please select the bank account you’d want to pay from
                    </Text>
                    <CommonButtonGreen onPress={() => { setActiveButton(!activeButton), setShowBank(!showBank) }} label='Add Bank +' />
                    <BouncyCheckboxGroup
                        data={verticalStaticData}
                        style={{ flexDirection: "column" }}
                        onChange={(selectedItem: ICheckboxButton) => {
                            console.log("SelectedItem: ", JSON.stringify(selectedItem));
                        }}
                    />

                </View>
            </View>
            <View style={{ paddingBottom: 20 }}>
                {(
                    activeButton === false
                        ?
                        <CommonButton label='Proceed to Pay' style={{ backgroundColor: '#1BB18B', width: '85%', alignSelf: 'center' }} />
                        :
                        <CommonButton label='Proceed to Pay' style={{ backgroundColor: '#000000', width: '85%', alignSelf: 'center' }} />
                )}
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 30,
    },
    backSize: {
        width: 24,
        height: 20,
        resizeMode: 'contain'
    },
    headerHeadingText: {
        color: '#023373',
        fontSize: 18,
        fontWeight: '700',
        paddingLeft: 28,
        lineHeight: 22
    },
    body: {
        paddingHorizontal: 20,
    },
    selectText: {
        color: '#023373',
        fontSize: 18,
        fontWeight: 'bold',
    },
    subText: {
        fontSize: 13,
        color: '#000000',
        paddingVertical: 30
    }
});
