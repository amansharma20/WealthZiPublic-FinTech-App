/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Color } from '../../utils/constants/Theme';
import MyCartTopTab from '../../navigation/MyCartTopTab';

export default function CartScreen() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../assets/icons/Back.png')}
                            style={styles.backSize}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerHeadingText}>
                        STP
                    </Text>
                </View>
                <View style={styles.body}>
                    <MyCartTopTab />
                </View>
            </View>
            <View style={{
                backgroundColor: 'white', height: 80, elevation: 8, flexDirection: 'row', justifyContent: 'space-between',
                paddingHorizontal: 30, alignItems: 'center'
            }}>
                <View>
                    <Text style={{ fontSize: 14, color: '#848484', textAlign: 'center' }}>
                        Amount to be paid
                    </Text>
                    <Text style={{ fontSize: 24, color: '#1BB18B', textAlign: 'center' }}>
                        ₹10,000
                    </Text>
                </View>
                <TouchableOpacity>
                    <View style={{ borderRadius: 15, width: 150, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#1BB18B' }}>
                        <Text>
                            PAY NOW
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.background,
        paddingTop: Platform.select({
            ios: 40,
            android: 0
        })
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
        flex: 1

    }
});
