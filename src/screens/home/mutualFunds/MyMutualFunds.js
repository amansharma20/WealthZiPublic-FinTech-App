import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, Modal } from 'react-native';
import { useSelector } from 'react-redux';
import { commanStyles } from '../../../assets/styles';
import { Color } from '../../../utils/constants/Theme';
import _ from 'lodash';
import CommonModalButtons from '../../../components/CommonModalButtons';





export default function MyMutualFunds() {
    const navigation = useNavigation();

    const [showSellFundModal, setShowSellFundModal] = useState(false)
    const [investMoreModal, setInvestMoreModal] = useState(false)

    const xirReport = useSelector(state => state.MutualFundsReducer.data.xirReport.data[0]);
    const consolidatedFunds = useSelector(state => state.MutualFundsReducer.data.consolidatedFunds.data);

    useEffect(() => {

        
    }, [xirReport])


    const RenderFunds = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('MutualFundDetails',{
            fund : item
        })} activeOpacity={0.23}>
            <View style={{ marginTop: 20 }} >
                <View style={[styles.fundsBox, commanStyles.appShadow]}>
                    <View style={{ flexDirection: 'row', paddingLeft: 20 }}>
                        <Image source={require('../../../../src/assets/icons/icici.png')}
                            style={{ width: 28, height: 30, resizeMode: 'contain' }} />
                        <View style={{ marginRight: 30 }}>
                            <Text style={styles.fundNameLabel} numberOfLines={2}>
                                {item.scheme_name}
                            </Text>
                            <View style={{ flexDirection: 'row', paddingTop: 2}}>
                                <Text style={styles.equitySmallCapText}>
                                {item.asset_categroy} • {item.asset_sub_category} • {item.risk_profile}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingTop: 24, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={[styles.currentValLabel, {
                            paddingLeft: 18
                        }]}>
                            Current Value
                        </Text>
                        <Text style={styles.currentValLabel}>
                            Invested
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 4 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.currentValueInvestedValueText, { paddingLeft: 18 }]}>
                                ₹{item.current_value.toFixed(0)}
                            </Text>

                            <Text style={{ fontWeight: "400", fontSize: 10, color: '#1BB18B', paddingLeft: 8, paddingTop: 5 }}>
                                ₹{item.gain_or_loss.toFixed(0)} ({item.xirr}%)
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.currentValueInvestedValueText}>
                                ₹{item.net_cost.toFixed(0)}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );


    return (
        <View style={styles.container}>
            <ScrollView style={styles.subContainer}>
                <View style={styles.navContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../../../src/assets/icons/Back.png')}
                            style={{ width: 24, height: 25, color: '#023373', resizeMode: 'contain' }} />
                    </TouchableOpacity>
                    <Text style={styles.mutualFundText}>
                        My Mutual Funds
                    </Text>
                </View>

                <View>
                    <Text style={styles.overview}>
                        Overview
                    </Text>
                    <View style={{ paddingTop: 21 }}>
                        <View style={[styles.fundDetailsBoxes, commanStyles.appShadow]}>
                            <View style={{ justifyContent: 'center' }}>
                                <Image source={require('../../../../src/assets/icons/dollarHand.png')}
                                    style={{ width: 140, height: 120, color: '#023373', resizeMode: 'contain' }} />
                            </View>
                            <View style={{ alignItems: 'center', marginRight: 13, }}>
                                <Text style={{ color: '#023373', fontWeight: '700', fontSize: 14, paddingTop: 21 }}>
                                    Current Value
                                </Text>
                                <Text style={{ color: '#313B59', fontWeight: '700', fontSize: 19 }}>
                                    ₹ {xirReport.CurrentValue.toFixed(0)}
                                </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, }}>

                            <View style={[styles.investBox, commanStyles.appShadow]}>
                                <Text style={styles.investedText}>
                                    Invested
                                </Text>
                                <Text style={[styles.investeAmountText]}>
                                    ₹ {xirReport.Net_Investments.toFixed(0)}
                                </Text>
                            </View>

                            <View style={[styles.investBox, commanStyles.appShadow]}>
                                <Text style={styles.investedText}>
                                    Absolute P & L
                                </Text>
                                <Text style={[styles.investeAmountText, { color: Color.appColor }]}>
                                    ₹ {xirReport.net_gain_or_loss.toFixed(0)}
                                </Text>
                            </View>

                            <View style={[styles.investBox, commanStyles.appShadow]}>
                                <Text style={styles.investedText}>
                                    Returns (XIRR)
                                </Text>
                                <Text style={[styles.investeAmountText, { color: Color.appColor }]}>
                                    {xirReport.live_xirr_percent}%
                                </Text>
                            </View>
                        </View>
                        <Text style={styles.overview}>
                            All Funds
                        </Text>
                        <View style={{ paddingBottom: 40 }}>
                            {
                                _.map(consolidatedFunds, (value, index) => {
                                    return (
                                        <RenderFunds item={value} />
                                    );
                                })
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>
            
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.background
    },
    subContainer: {
        paddingHorizontal: 30,
        backgroundColor: Color.background
    },
    navContainer: {
        flexDirection: 'row',
        marginTop: 35,
        padding: 3,
    },
    overview: {
        fontSize: 24,
        color: '#023373',
        fontWeight: '700',
        marginTop: 10
    },
    mutualFundText: {
        color: '#023373',
        fontWeight: 'bold',
        fontSize: 18,
        paddingLeft: 25
    },
    fundDetailsBoxes: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 20
    },
    investedText: {
        fontWeight: 'bold',
        fontSize: 10,
        color: '#023373'
    },
    investeAmountText: {
        color: '#313B59',
        fontWeight: '700',
    },
    investBox: {
        backgroundColor: Color.background,
        width: 96,
        height: 85,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    equitySmallCapText: {
        fontSize: 11,
        fontWeight: '400',
        color: '#848484',
        alignItems:'flex-start',
        paddingHorizontal:10 
    },
    fundNameLabel: {
        color: '#023373',
        fontWeight: '400',
        fontSize: 14,
        marginLeft: 10
    },
    currentValueInvestedValueText: {
        fontWeight: "700",
        fontSize: 14,
        color: '#000000',
        paddingRight: 18
    },
    currentValLabel: {
        fontWeight: 'normal',
        fontSize: 11,
        color: '#8C8C8C',
        paddingRight: 18
    },
    fundsBox: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        borderRadius: 20,
        paddingTop: 20,
        paddingBottom: 14
    }, buttonCotainers: {
        width: '100%',
        height: 80,
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 40,
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
}
)