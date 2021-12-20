import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { commanStyles } from '../../../assets/styles';
import { Color } from '../../../utils/constants/Theme';

export default function OneTimePayment() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.upperConatiner}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Image source={require('../../../../src/assets/icons/Back.png')}
                        style={styles.backSize}
                    />
                      </TouchableOpacity>
                    <Text style={styles.headerHeadingText}>
                        ONE TIME
                    </Text>
                </View>

                <View style={styles.iciciSaveContainer}>
                    <View style={styles.innerContainer}>
                        <Image source={require('../../../../src/assets/icons/icici.png')}
                            style={styles.iciciSize} />
                        <View>
                            <Text style={styles.iciciText}>
                                ICICI Prudential Technology {"\n"} Fund - Growth
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.enterView]}>
                    <Text style={styles.iciciText}>
                        Enter Investment Amount
                    </Text>
                </View>

                <View style={styles.buttonContainer}>
                    <View style={[styles.iconContainer, commanStyles.appShadow]}>
                        <TextInput
                            placeholder="₹ 5000"
                            //textAlign= 'center'
                            style={styles.input}
                            keyboardType="numeric"
                            maxLength={10}
                            placeholderTextColor="#023373"
                        />
                    </View>
                </View>
                <View style={styles.amountsContainer}>
                    <View style={styles.amountsContainer2}>
                        <TouchableOpacity>
                            <View style={styles.amountView}>
                                <Text style={styles.amountRupeeText}>
                                    + ₹1000
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.amountView}>
                                <Text style={styles.amountRupeeText}>
                                    + ₹2000
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.amountView}>
                                <Text style={styles.amountRupeeText}>
                                    + ₹5000
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={[styles.bottomIconContainer, commanStyles.appShadow]}>
                    <View style={styles.bottomIconContainer2}>
                        <TouchableOpacity>
                            <View style={styles.cartView}>
                                <Text style={styles.addCartText}>
                                    ADD TO CART
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.investView}>
                                <Text style={styles.investNowText}>
                                    INVEST NOW
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.background,
    },

    upperConatiner: {
        paddingHorizontal: 30,
        paddingTop: 35,
    },

    header: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 20
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

    iciciSaveContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    innerContainer: {
        flexDirection: 'row'
    },

    iciciSize: {
        width: 55,
        height: 53,
        resizeMode: 'contain'
    },

    iciciText: {
        color: '#023373',
        fontWeight: '400',
        fontSize: 18,
        paddingLeft: 7
    },

    enterView: {
        alignItems: 'center',
        paddingTop: 16,

    },

    buttonContainer: {
        paddingVertical: 10,
    },

    iconContainer: {
        height: 47,
        borderRadius: 15,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },

    input: {
        height: 58,
        color: '#023373',
        borderRadius: 15,
        fontSize: 24,
    },

    amountsContainer: {
        paddingVertical: 54,
    },

    amountsContainer2: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },

    amountRupeeText: {
        color: '#1BB18B',
        fontWeight: '700',
        fontSize: 14,
    },

    amountView: {
        borderRadius: 10,
        height: 27,
        width: 78,
        backgroundColor: '#C7FFF166',
        borderWidth: 1,
        borderColor: '#1BB18B',
        alignItems: 'center',
        justifyContent: 'center'
    },

    footer: {
        flex: 1,
        justifyContent: 'flex-end',
    },

    bottomIconContainer: {
        paddingVertical: 25,
        backgroundColor: Color.background,
    },

    bottomIconContainer2: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    },

    cartView: {
        borderRadius: 15,
        height: 40,
        width: 140,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#1BB18B',
        alignItems: 'center',
        justifyContent: 'center'
    },

    investView: {
        borderRadius: 15,
        height: 40,
        width: 140,
        backgroundColor: '#1BB18B',
        alignItems: 'center',
        justifyContent: 'center'
    },

    investNowText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '700',
    },

    addCartText: {
        color: '#1BB18B',
        fontSize: 14,
        fontWeight: '700',
    }

})