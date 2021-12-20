/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { commanStyles } from '../../assets/styles';
import { Color } from '../../utils/constants/Theme';
import DATA from '../../utils/CommonData';
import FundsItem from '../../components/FlatListItems/FundsItem';
import { useNavigation } from '@react-navigation/core';
import { useSelector } from 'react-redux';


const renderFunds = ({ item }) => (
    <FundsItem item={item} />
);

export default function InvestmentDetailsFunds(props) {
    const title = props.route.params.title
    const investmentDetails = useSelector(
        state => state.ExploreReducer.data.investmentDetails.data.data,
    );
    console.log(investmentDetails)
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FastImage style={{ width: 25, height: 25, flexDirection: 'column-reverse' }}
                        source={uri = require("../../assets/icons/Back.png")}
                        resizeMode={FastImage.resizeMode.contain} />
                </TouchableOpacity>
                <Text style={[commanStyles.navBarTitle, { marginLeft: 20 }]}>{title}</Text>

            </View>

            <View style={styles.mutualFundsFlatListContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30, marginTop: 20 }}>
                    <Text style={styles.allMutualFundsLabel}>1 yr return</Text>
                </View>
                <FlatList
                    data={investmentDetails}
                    style={{ padding: 10 }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderFunds}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
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
