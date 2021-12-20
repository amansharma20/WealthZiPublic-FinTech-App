/* eslint-disable prettier/prettier */
import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Image
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Responsive } from '../../../constants/Layout';
import { COLORS, FONTS, icons, images, SIZES } from '../../../constants';
import Icons from '../../../constants/Icons';
import Images from '../../../constants/Images';

const CartOneTimeFlatlistItem = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <View style={{
                    flexDirection: 'row', width: '100%', justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={require('../../assets/icons/iciciLogo.png')} style={{ width: 30, height: 30, marginRight: 10 }} />
                        <Text style={{ width: '70%' }}>
                            ICICI Prudential Technology Fund - Growth
                        </Text>
                    </View>

                    <TouchableOpacity>
                        <Image source={require('../../assets/icons/delete.png')} style={{ width: 13, height: 16, marginRight: 10 }} />
                    </TouchableOpacity>


                </View>

            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        width: '100%',
        elevation: 8,
        backgroundColor: 'white',
        marginBottom: 20,
        height: 120,
        borderRadius: 20,
        padding: 20
    }
});

export default CartOneTimeFlatlistItem;
