import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Color } from '../../../../../utils/constants/Theme';
import { commanStyles } from '../../../../../assets/styles';
import CommonFilterItems from '../../../../../components/CommonFilterItems';


export default function SwitchToOtherFunds() {

    const [showModal, setShowModal] = useState(false);
    const [date, setDate] = useState(new Date());
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <View style={styles.upperConatiner}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../../../../assets/icons/Back.png')}
                            style={styles.backSize}
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerHeadingText}>
                        Switch
                    </Text>
                </View>

                <View style={styles.iciciSaveContainer}>
                    <View style={styles.innerContainer}>
                        <Image source={require('../../../../../assets/icons/icici.png')}
                            style={styles.iciciSize} />
                        <View>
                            <Text style={styles.iciciText}>
                                ICICI Prudential Technology {"\n"} Fund - Growth
                            </Text>
                        </View>
                    </View>
                </View>



                <View style={{ width: '100%', marginTop: 10 }}>
                    <Text>Amount Available for withdraw</Text>
                    <Text style={commanStyles.rupeeTitle}>₹20,000.84</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <View>
                        <Text style={{ fontWeight: '300', fontSize: 13, color: Color.smallTitleColor }}>Total Units</Text>
                        <Text style={{
                            fontWeight: '700',
                            fontSize: 15
                        }}>5410</Text>
                    </View>
                    <View>
                        <Text
                            style={{ fontWeight: '300', fontSize: 13, color: Color.smallTitleColor }}>
                            Units for redemption
                        </Text>
                        <Text style={{
                            fontWeight: '700',
                            fontSize: 15
                        }}>5420</Text>
                    </View>
                </View>
                
                <Text style={styles.enterAmount}>
                    Would like to switch
                </Text>

                <Text style={styles.enterAmount}>
                    By Amount
                </Text>

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


                <View style={{ width: "100%", height: 40, alignItems: "center" }}>
                    <CommonFilterItems value={'Switch all units'} style={{ fontSize: 16, fontWeight: '700' }} />
                </View>


            </View>


            <View style={styles.footer}>
                <Text style={styles.terms}
                    numberOfLines={2}>
                    By continuing, I agree with the Disclaimer and T&C of Wealthzi
                </Text>
                <View style={[styles.bottomIconContainer, commanStyles.appShadow]}>
                    <TouchableOpacity onPress={() => navigation.navigate('SearchSwitchToFund')} style={styles.investView}>
                        <Text style={styles.investNowText}>
                            PROCEED
                        </Text>
                    </TouchableOpacity>
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

    calenderIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },

    iciciText: {
        color: Color.blue,
        fontWeight: '400',
        fontSize: 18,
        paddingLeft: 7
    },
    enterAmount: {
        color: Color.blue,
        fontWeight: '400',
        fontSize: 18,
        paddingLeft: 7,
        textAlign: 'center',
        marginTop: 20
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
        color: Color.blue,
        fontWeight: '700',
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
        alignItems: 'center',
        elevation: 8
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
        width: "80%",
        backgroundColor: '#1BB18B',
        alignItems: 'center',
        justifyContent: 'center',
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
    },
    datePicker: {
        backgroundColor: '#ffffff',
        marginTop: 200,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 0,
        width: 360,
        height: 500,
    },
    dateSubmitContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    submitDateButtonText: {
        fontSize: 16, color: '#4D2D8F',
    },
    amountToBe: {
        textAlign: 'left',
        color: Color.blue,
        fontWeight: '700',
        fontSize: 18
    },
    bigSizeBankIcon: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    },
    accountNumber: {
        fontSize: 12,
        color: Color.blue,
        fontWeight: '400'
    },
    terms: {
        fontSize: 14,
        color: Color.blue,
        fontWeight: '400',
        textAlign: 'center',
        marginBottom: 10
    }

})