/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    ScrollView
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { commanStyles } from '../../assets/styles';
import { Color } from '../../utils/constants/Theme';
import DATA from '../../utils/CommonData';
import FundsItem from '../../components/FlatListItems/FundsItem';
import CuratedFundsItem from '../../components/FlatListItems/CuratedFundsItem';
import { useNavigation } from '@react-navigation/core';
import { useDispatch, useSelector } from 'react-redux';
import WealthziCuratedFunds from '../../utils/data/WealthziCuratedData';
import EquityFundsData from '../../utils/data/EquityFundsData';
import DebtFundsData from '../../utils/data/DebtFundsData';
import EquityFundsItem from '../../components/FlatListItems/EquityFundsItem';
import DebtFundsItem from '../../components/FlatListItems/DebtFundsItem';

const renderFunds = ({ item }) => (
    <FundsItem item={item} />
);

const renderCuratedFunds = ({ item }) => (
    <CuratedFundsItem item={item} />
);

const renderDebtFunds = ({ item }) => (
    <DebtFundsItem item={item} />
);

const renderEquityFunds = ({ item }) => (
    <EquityFundsItem item={item} />
);

export default function ExploreTab(props) {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const mutualFunds = useSelector(
        state => state.MutualFundsReducer.data.allMutualFunds.data,
    );

    const nfoList = useSelector(
        state => state.MutualFundsReducer.data.nfoList.data,
    );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={commanStyles.navBarTitle}>Explore</Text>
                <TouchableOpacity>
                    <FastImage style={{ width: 25, height: 25, flexDirection: 'column-reverse' }}
                        source={uri = require("../../assets/icons/Search.png")}
                        resizeMode={FastImage.resizeMode.contain} />
                </TouchableOpacity>
            </View>
            <View style={styles.mutualFundsFlatListContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30, marginTop: 20, }}>
                    <Text style={styles.newFundsOffer}>New Funds Offer</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('AllMutualFunds')}>
                        <Text style={styles.allMutualFundsLabel}>All Mutual Funds</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={nfoList}
                    style={{ padding: 10 }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderFunds}
                    horizontal
                    keyExtractor={item => item.id}
                />
            </View>
            <Text style={commanStyles.flatListTitle}>
                Wealthzi Curated Funds
            </Text>
            <FlatList
                data={WealthziCuratedFunds}
                style={{ padding: 10, }}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={renderCuratedFunds}
                keyExtractor={item => item.id}
            />
            <View>
                <Text style={commanStyles.flatListTitle}>
                    Equity Funds
                </Text>
                <FlatList
                    data={EquityFundsData}
                    style={{ padding: 10, }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderEquityFunds}
                    keyExtractor={item => item.id}
                />
            </View>
            <View>
                <Text style={commanStyles.flatListTitle}>
                    Debt Funds
                </Text>
                <FlatList
                    data={DebtFundsData}
                    style={{ padding: 10, }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderDebtFunds}
                    keyExtractor={item => item.id}
                />
            </View>
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.background
    },
    header: {
        marginTop: 40,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    mutualFundsFlatListContainer: {
        paddingBottom: 10,
    },
    newFundsOffer: {
        fontSize: 18,
        fontWeight: '700',
        color: Color.blue
    },
    allMutualFundsLabel: {
        fontSize: 14,
        fontWeight: '700',
        color: Color.appColor
    }

})
