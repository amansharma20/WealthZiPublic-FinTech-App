/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import {
  View,
  LogBox,
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import FastImage from 'react-native-fast-image';
import { Color, Margin } from '../../utils/constants/Theme';
import CommonButton from '../../components/CommonButton';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import { useSelector } from 'react-redux';
import QuickAccess from '../../components/FlatListItems/QuickAccess'
import { commanStyles } from '../../assets/styles';
import DATA from '../../utils/CommonData';
import WealthziCuratedFunds from '../../utils/data/WealthziCuratedData';
import CuratedFundsItem from '../../components/FlatListItems/CuratedFundsItem';
import NumberFormat from 'react-number-format';

export default function Home() {

  const navigation = useNavigation();
  const mutualfunds = useSelector(state => state.MutualFundsReducer.data);

  useEffect(() => {
    Platform.OS === 'ios' ? 200 : SplashScreen.hide();
    //dispath(MutualFundsAction.getPortfolioSummary('manual-investments/portfolio-summary'));
    LogBox.ignoreLogs(['VirtualizedLists should never be nested', 'Warning: Each', 'Warning: Failed'])
  }, [mutualfunds]);


  const renderCuratedFunds = ({ item }) => (
    <CuratedFundsItem item={item} />
  );

  const renderItem = ({ item }) => (
    <QuickAccess item={item} />
  );

  function getIndianFormat(str) {
    str = str.split(".");
    return str[0].replace(/(\d)(?=(\d\d)+\d$)/g, "$1,") + (str[1] ? ("." + str[1]) : "");
  }


  return (
    <ScrollView style={styles.container}>
      <FastImage
        style={{ width: 120, height: 40, marginLeft: Margin.left, marginTop: 50 }}
        source={uri = require("../../assets/images/logo.png")}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={{ flexDirection: 'row-reverse' }}>
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
          <FastImage
            style={{ width: 30, height: 20, marginRight: Margin.right, flexDirection: 'column-reverse' }}
            source={uri = require("../../assets/icons/shopping.png")}
            resizeMode={FastImage.resizeMode.contain}
          />
        </TouchableOpacity>
      </View>

      <Text style={{ fontWeight: '700', fontSize: 26, color: Color.blue, marginLeft: Margin.left }}>Hello, </Text>
      <View style={{ flexDirection: 'row', flex: 1, marginTop: Margin.top, justifyContent: 'space-around', alignItems: 'center' }}>
        <TouchableHighlight style={{ flex: 1, padding: 20 }} onPress={() => navigation.navigate('MyMutualFunds')}>
          <View style={[styles.nameContainer, commanStyles.appShadow]}>
            <Text style={{ fontSize: 13, fontWeight: '600', color: Color.blue }}>
              My Mutual Funds
            </Text>
            <Text style={{ fontSize: 19, fontWeight: '800', color: '#313B59', width: 150 }}>
              ₹ {mutualfunds && mutualfunds.mutualfunds && mutualfunds.mutualfunds.current_value}
              {/* ₹ {getIndianFormat()} */}
            </Text>
          </View>
        </TouchableHighlight>
        <View style={[styles.updateContainer, commanStyles.appShadow]}>
          <Text style={{ fontSize: 9, fontWeight: '700', color: Color.appColor, textAlign: 'center', }} numberOfLines={2}>
            Update Investment
          </Text>
        </View>
      </View>


      <View style={styles.completeKYC}>
        <Text style={{ fontSize: 18, fontWeight: '700', color: Color.blue, textAlign: 'center', marginTop: 20 }} numberOfLines={2}>
          Complete Your KYC
        </Text>
        <Text style={{ fontSize: 14, fontWeight: '400', color: 'black', textAlign: 'center', marginTop: 10 }} numberOfLines={2}>
          Your investment Account is not ready yet
        </Text>
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <CommonButton label={'Complete KYC'} style={{ width: '60%' }} />
        </View>
      </View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: Color.blue, marginTop: Margin.top, marginLeft: Margin.left }} numberOfLines={2}>
        Quick Access
      </Text>
      <FlatList
        data={DATA}
        style={{ padding: 10 }}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        horizontal
        keyExtractor={item => item.id}
      />
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: Color.blue, marginTop: Margin.top, marginLeft: Margin.left }} numberOfLines={2}>
        Wealthzi Curated Funds
      </Text>
      <FlatList
        data={WealthziCuratedFunds}
        style={{ padding: 10 }}
        showsHorizontalScrollIndicator={false}
        renderItem={renderCuratedFunds}
        horizontal
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background
  },
  nameContainer: {
    backgroundColor: '#fff',
    height: 100,
    width: '100%',
    borderRadius: 20,
    padding: 15,
  },
  updateContainer: {
    backgroundColor: '#fff',
    height: 80,
    width: '30%',
    marginRight: Margin.right,
    borderRadius: 20,
    justifyContent: 'center',
    padding: 15,

  },
  completeKYC: {
    width: '90%',
    height: 160,
    backgroundColor: '#FFD8D8',
    marginVertical: Margin.vertical,
    marginHorizontal: Margin.horizontal,
    borderRadius: 20
  },
  quickAccessBox: {
    width: 120,
    height: 120,
    backgroundColor: '#ffffff',
    marginLeft: 20,
    borderRadius: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    padding: 10
  }

})
