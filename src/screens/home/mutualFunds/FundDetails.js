import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, } from 'react-native';
import { Color } from '../../../utils/constants/Theme';
import {
    LineChart
} from "react-native-chart-kit";
import { commanStyles } from '../../../assets/styles';


export default function FundDetails(props) {
    const fund = props.route.params.fund;
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ScrollView style={{ marginHorizontal: 20 }} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <View style={styles.header1}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={require('../../../../src/assets/icons/Back.png')}
                                style={{ width: 24, height: 25, color: '#023373', resizeMode: 'contain' }} />
                        </TouchableOpacity>
                        <Text style={styles.headerHeadingText}>
                            Mutual Funds Details
                        </Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image source={require('../../../../src/assets/icons/share.png')}
                                style={styles.shareIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.iciciSaveContainer}>
                    <View style={styles.innerContainer}>
                        <Image source={require('../../../../src/assets/icons/icici.png')}
                            style={styles.iciciSize} />
                        <View style={styles.textContainer}>
                            <Text style={styles.iciciText}>
                                {fund.scheme_name}
                            </Text>
                            <View style={styles.equityContainer}>
                                <Text style={styles.equityText}>
                                    {fund.asset_category}
                                </Text>
                                <Text style={styles.equityText}>
                                    {fund.asset_sub_category}
                                </Text>
                                <Text style={styles.equityText}>
                                    {fund.risk_profile}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.saveContainer}>
                            <Image source={require('../../../../src/assets/icons/bookmark.png')}
                                style={styles.bookmarkStyle}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.dateContainer}>
                    <View>
                        <Text style={styles.dateText}>
                            NAV
                        </Text>
                        <Text style={styles.rupeeText}>
                            ₹{fund.fund_size}
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.dateText}>
                            3Y Returns
                        </Text>
                        <Text style={styles.percentText}>
                            {fund && fund.performance && fund.performance['3Y']}%
                        </Text>
                    </View>
                </View>

                <View>
                    <LineChart
                        data={{
                            labels: ["January", "February", "March", "April", "May", "June"],
                            datasets: [
                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100
                                    ]
                                }
                            ]
                        }}
                        width={Dimensions.get("window").width} // from react-native
                        height={220}
                        chartConfig={{
                            backgroundGradientFrom: "#ffffff",
                            backgroundGradientFromOpacity: 0,
                            backgroundGradientTo: "#ffffff",
                            backgroundGradientToOpacity: 0.5,
                            color: (opacity = 1) => `rgba(63, 154, 224, ${opacity})`,
                            barPercentage: 0.5,
                            useShadowColorFromDataset: false,
                            backgroundColor: "#ffffff",
                            strokeWidth: 4,
                            decimalPlaces: 2, // optional, defaults to 2dp
                            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            style: {
                                borderRadius: 16,
                            },

                        }}
                        bezier
                        withInnerLines={false}
                        withOuterLines={false}
                        withDots={false}
                        style={{
                            marginVertical: 8,
                            borderRadius: 16
                        }}
                        withHorizontalLabels={false}
                    />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#F0F0F0', height: 30, alignContent: 'center' }}>
                    <Text style={styles.graphYearText}>1m</Text>
                    <Text style={styles.graphYearText}>3m</Text>
                    <Text style={styles.graphYearText}>6m</Text>
                    <Text style={styles.graphYearText}>1y</Text>
                    <Text style={styles.graphYearText}>3y</Text>
                    <Text style={[styles.graphYearText,{ backgroundColor: Color.appColor }]}>5y</Text>
                    <Text style={styles.graphYearText}>max</Text>
                </View>

                <View style={styles.ratioContainer}>
                    <View style={styles.ratioContainerLeft}>
                        <View>
                            <Text style={styles.ratioText}>
                                Expense Ratio
                            </Text>
                            <Text style={styles.numberText}>
                                {fund.expense_ratio} %
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.ratioText}>
                                Min SIP
                            </Text>
                            <Text style={styles.numberText}>
                                ₹ {fund.min_sip_amount}
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.ratioText}>
                                Inception Date
                            </Text>
                            <Text style={styles.numberText}>
                                11 March 2013(*)
                            </Text>
                        </View>
                    </View>

                    <View style={styles.ratioContainerRight}>
                        <View>
                            <Text style={styles.ratioText}>
                                Fund Size
                            </Text>
                            <Text style={styles.numberText}>
                                ₹ {fund.fund_size}
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.ratioText}>
                                Min Lumpsum
                            </Text>
                            <Text style={styles.numberText}>
                                ₹{fund.max_sip_installments}
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.ratioText}>
                                Fund Manager
                            </Text>
                            <Text style={styles.numberText}>
                                {fund.amc_name}
                            </Text>
                        </View>
                    </View>

                </View>
                <View>
                    <Text style={styles.ratioText}>
                        Exit Load
                    </Text>
                    <Text style={styles.numberText}>
                        {fund.exit_load_rate}% if redeemed before {fund.exit_load_period_remark} year, Nil after that
                    </Text>
                </View>
            </ScrollView>


            <View style={[styles.buttonCotainers, commanStyles.appShadow]}>
                <TouchableOpacity onPress={() => navigation.navigate('SIPPayment',{
                    fund: fund
                })}>
                    <View style={styles.investView}>
                        <Text style={styles.investNowText}>
                            SIP
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('OneTimePayment',{
                    fund: fund
                })}>
                    <View style={styles.investView}>
                        <Text style={styles.investNowText}>
                            ONE TIME
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

    },
    subContainer: {
        backgroundColor: Color.background,
        marginHorizontal: 28,
        paddingHorizontal: 30
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: (Platform.OS === 'ios') ? 40 : 0,
        paddingVertical: 20
    },

    header1: {
        flexDirection: 'row',
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

    shareIcon: {
        width: 25,
        height: 26,
        resizeMode: 'contain'
    },

    iciciSaveContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    innerContainer: {
        flexDirection: 'row'
    },

    textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between'
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

    equityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingRight: 50
    },

    equityText: {
        fontSize: 11,
        fontWeight: '400',
        color: '#848484'
    },

    saveContainer: {
        paddingTop: 5
    },

    bookmarkStyle: {
        width: 12,
        height: 16,
        resizeMode: 'contain',
    },

    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 30
    },

    dateText: {
        color: '#023373',
        fontWeight: '400',
        fontSize: 12,
    },

    rupeeText: {
        color: '#023373',
        fontSize: 24,
        fontWeight: '700',
    },

    percentText: {
        color: '#1BB18B',
        fontWeight: '400',
        fontSize: 18,
    },

    fakeView: {
        width: '100%',
        height: 225,
        backgroundColor: 'black',
    },

    ratioContainer: {
        flexDirection: 'row',
        marginTop: 20
    },

    ratioContainerLeft: {
        justifyContent: 'space-between',
        width: '50%',
    },

    ratioContainerRight: {

    },

    ratioText: {
        color: '#858585',
        fontSize: 12,
        fontWeight: '400',
    },

    numberText: {
        color: '#000000',
        fontWeight: '400',
        fontSize: 13,
        paddingTop: 10,
        paddingBottom: 15
    },

    graphYearText: {
        textAlign: "center",
        fontSize: 12,
        fontWeight: '400',
        padding: 10
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 40

    },

    bottomIconContainer: {
        paddingVertical: 25,
        backgroundColor: '#FFFFFF'
    },

    bottomIconContainer2: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',

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
    buttonCotainers: {
        width: '100%',
        height: 80,
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        backgroundColor: Color.background
    }

})
