import { useNavigation } from '@react-navigation/core';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Modal} from 'react-native';
import { commanStyles } from '../../../assets/styles';
import CommonModalButtons from '../../../components/CommonModalButtons';
import { Color } from '../../../utils/constants/Theme';

export default function MutualFundDetails(props) {

    console.log(props.route.params.fund)

    const fund = props.route.params.fund;


    const [showSellFundModal, setShowSellFundModal] = useState(false)
    const [investMoreModal, setInvestMoreModal] = useState(false) 
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ScrollView style={styles.subContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.navHeader}>
                    <TouchableOpacity onPress={()=> navigation.goBack()}>
                        <Image source={require('../../../../src/assets/icons/Back.png')}
                            style={{ width: 24, height: 25, color: '#023373', resizeMode: 'contain' }} />
                    </TouchableOpacity>
                    <Text style={styles.fundDetails}>
                        Funds details
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 27, }}>
                    <Image source={require('../../../../src/assets/icons/icici.png')}
                        style={{ width: 40, height: 40, resizeMode: 'cover' }} />

                    <View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: '#023373', fontWeight: '400', fontSize: 18, paddingLeft: 7 }}>
                                ICICI Prudential Technology
                            </Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: '#023373', fontWeight: '400', fontSize: 18, marginRight: 40 }}>
                                    Fund - Growth
                                </Text>
                                <Text style={{ color: '#023373', fontWeight: '800', fontSize: 12, marginRight: 15 }}>
                                    Details
                                </Text>
                            </View>

                        </View>
                        {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 3, paddingRight: 70, paddingLeft: 10 }}> */}
                        <View style={{ flexDirection: 'row', paddingTop: 2}}>
                            <Text style={styles.smallCapTexts}>
                            {/* {item.asset_categroy} • {item.asset_sub_category} • {item.risk_profile} */}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.currentValBox, commanStyles.appShadow]}>
                    <View style={{ justifyContent: 'center' }}>
                        {/* view for image */}
                        <Image source={require('../../../../src/assets/icons/dollarHand.png')}
                            style={{ width: 150, height: 100, color: '#023373', resizeMode: 'contain' }} />
                    </View>
                    <View style={{ paddingRight: 11, alignItems: 'center', paddingBottom: 13 }}>
                        <Text style={{ color: '#023373', fontWeight: '700', fontSize: 14, paddingTop: 21 }}>
                            Current Value
                        </Text>
                        <Text style={{ color: '#313B59', fontWeight: '700', fontSize: 30 }}>
                            ₹20,000
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, }}>
                    <View style={[styles.investedBoxes, commanStyles.appShadow]}>
                        <Text style={styles.investedText}>
                            Invested
                        </Text>
                        <Text style={styles.investValue}>
                            ₹15,000
                        </Text>
                    </View>
                    <View style={[styles.investedBoxes, commanStyles.appShadow]}>
                        <Text style={styles.investedText}>
                            Absolute P & L
                        </Text>
                        <Text style={[styles.investValue, { color: '#1BB18B' }]}>
                            ₹5,000
                        </Text>
                    </View>
                    <View style={[styles.investedBoxes, commanStyles.appShadow]}>
                        <Text style={styles.investedText}>
                            Returns (XIRR)
                        </Text>
                        <Text style={[styles.investValue, { color: '#1BB18B' }]}>
                            25.21%
                        </Text>
                    </View>
                </View>
                <View style={styles.header2, { flexDirection: 'row', marginTop: 25 }}>
                    <Text style={styles.subheading}>
                        Folio Detail
                    </Text>
                </View>

                <View style={{ paddingTop: 25, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.folioNumUnits}>
                        Folio Number
                    </Text>
                    <Text style={[styles.folioNumUnits, { paddingRight: 18 }]}>
                        Total Units
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.folioNumVals}>
                            925875184351684
                        </Text>
                    </View>
                    <View>
                        <Text style={[styles.folioNumVals, { marginRight: 45 }]}>
                            5420
                        </Text>
                    </View>
                </View>

                <View style={styles.header2, { flexDirection: 'row', marginTop: 25 }}>
                    <Text style={styles.subheading}>
                        Transaction
                    </Text>
                </View>

                {
                    Array.from({ length: 3 }).map((_, index) => (
                        <View style={{ marginTop: 20 }}>
                            <View style={[styles.transCard, commanStyles.appShadow]}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                    <View>
                                        <Text style={{ color: '#000000', fontSize: 13, fontWeight: '400' }}>
                                            15 April 2020
                                        </Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity>
                                            <View style={{ backgroundColor: '#C7FFF166', width: 78, height: 27, borderWidth: 1, borderColor: '#1BB18B', fontWeight: '400', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ fontSize: 14, color: '#1BB18B' }}>
                                                    BUY
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text style={styles.transAmount}>
                                            ₹5,000
                                        </Text>
                                    </View>

                                    <View style={styles.unitbox}>
                                        <Text style={styles.amountVal}>
                                            Units
                                        </Text>
                                        <Text style={[styles.amountVal, { color: 'black' }]}>
                                            - 5420
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))
                }


            </ScrollView>

            <View style={[styles.buttonContainers, commanStyles.appShadow]}>
                <TouchableOpacity onPress={() => setShowSellFundModal(!showSellFundModal)}>
                    <View style={styles.investView}>
                        <Text style={styles.investNowText}>
                            SELL FUND
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setInvestMoreModal(!investMoreModal)}>
                    <View style={styles.investView}>
                        <Text style={styles.investNowText}>
                            INVEST MORE
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            

            {showSellFundModal && (
                <Modal
                    animationType='fade'
                    transparent={true}
                    showModal={showSellFundModal}
                    backgroundColor="black"
                    onRequestClose={() => setShowSellFundModal(false)}>
                    <View style={{ flex: 1, justifyContent: "flex-end", backgroundColor: 'rgba(0,0,0,0.9)', }}>
                        <View style={{ backgroundColor: Color.background, alignItems: "flex-end", paddingTop: 10 }}>
                            <TouchableOpacity onPress={() => setShowSellFundModal(!showSellFundModal)}>
                                <Image source={require('../../../../src/assets/icons/cross.png')}
                                    style={{ width: 24, height: 25, color: '#023373', resizeMode: 'contain', marginRight: 40, }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ backgroundColor: Color.background, alignItems: 'center', padding: 30 }}>

                            <CommonModalButtons title={'Withdraw to account'} 
                            onPress={()=> {
                                setShowSellFundModal(!showSellFundModal)
                                navigation.navigate('Withdraw')
                            }}
                            />
                            <CommonModalButtons title={'SWP to account'} 
                            onPress={()=> {
                                setShowSellFundModal(!showSellFundModal)
                                navigation.navigate('SWP')
                            }}
                            />
                            <CommonModalButtons title={'Switch to other fund'} 
                            onPress={()=> {
                                setShowSellFundModal(!showSellFundModal)
                                navigation.navigate('SwitchToOtherFunds')
                            }}
                            />
                            <CommonModalButtons title={'STP to other fund'} 
                             onPress={()=> {
                                setShowSellFundModal(!showSellFundModal)
                                navigation.navigate('STP')
                            }}
                            />

                        </View>
                    </View>

                </Modal>
            )}

            {investMoreModal && (
                <Modal
                    animationType='fade'
                    transparent={true}
                    showModal={investMoreModal}
                    backgroundColor="black"
                    onRequestClose={() => setInvestMoreModal(false)}>
                    <View style={{ flex: 1, justifyContent: "flex-end", backgroundColor: 'rgba(0,0,0,0.9)', }}>
                        <View style={{ backgroundColor: Color.background, alignItems: "flex-end", paddingTop: 10 }}>
                            <TouchableOpacity onPress={() => setInvestMoreModal(!investMoreModal)}>
                                <Image source={require('../../../../src/assets/icons/cross.png')}
                                    style={{ width: 24, height: 25, color: '#023373', resizeMode: 'contain', marginRight: 40, }} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ backgroundColor: Color.background, alignItems: 'center', padding: 30 }}>
                            <CommonModalButtons title={'SIP'} 
                             onPress={()=> {
                                setInvestMoreModal(!investMoreModal)
                                navigation.navigate('SIPPayment')
                            }}
                            />
                            <CommonModalButtons title={'ONE TIME'} 
                            onPress={()=> {
                                setInvestMoreModal(!investMoreModal)
                                navigation.navigate('OneTimePayment')
                            }}
                            />
                        </View>
                    </View>

                </Modal>
            )}
        </View>



    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.background
    },
    subContainer: {
        backgroundColor: Color.background,
        marginHorizontal: 28
    },
    navHeader: {
        flexDirection: 'row',
        marginTop: 35,
        padding: 3
    },
    fundDetails: {
        color: '#023373',
        fontWeight: 'bold',
        fontSize: 18,
        paddingLeft: 25
    },
    smallCapTexts: {
        fontSize: 11,
        fontWeight: '400',
        color: '#848484'
    },
    investedText: {
        fontWeight: 'bold',
        fontSize: 10,
        color: '#023373'
    },
    investValue: {
        color: '#313B59',
        fontWeight: '700',
        fontSize: 20
    },
    subheading: {
        fontSize: 20,
        fontWeight: '700',
        color: '#023373'
    },
    transCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        paddingLeft: 18,
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 18
    },
    amountVal: {
        color: '#848484',
        fontSize: 13,
        fontWeight: 'normal'
    },
    unitbox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: 15
    },
    transAmount: {
        color: '#023373',
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: 5
    },
    folioNumUnits: {
        fontWeight: 'normal',
        fontSize: 12,
        color: '#858585',
        paddingLeft: 18
    },
    folioNumVals: {
        fontWeight: "400",
        fontSize: 13,
        color: '#000000',
        paddingLeft: 18
    },
    currentValBox: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 20,
        marginTop: 21,
    },
    investedBoxes: {
        backgroundColor: 'white',
        width: 96,
        height: 85,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    buttonContainers: {
        width: '100%',
        height: 80,
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        backgroundColor: Color.background
    },
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

    addCartText: {
        color: '#1BB18B',
        fontSize: 15,
        fontWeight: '500',
    },
    sellFundMoadl: {
        fontWeight: 'bold',
        fontSize: 10,
        color: '#023373'
    }
})