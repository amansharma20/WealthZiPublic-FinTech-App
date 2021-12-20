/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackIconandTitleHeader from '../../../../../components/BackIconandTitleHeader';
import FundHeader from '../../../../../components/FundHeader';
import { COLORS, FONTS, SIZES } from '../../../../../../constants/Theme';
import { commanStyles } from '../../../../../assets/styles';
import { Color } from '../../../../../utils/constants/Theme';
import { TextInput } from 'react-native-gesture-handler';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const DATA = [
  {
    id: "0",
    title: "First Item",
  },
  {
    id: "1",
    title: "Second Item",
  },
  {
    id: "2",
    title: "Third Item",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <View style={[styles.item, commanStyles.appShadow]}>
    <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between' }}>
      <FundHeader title={'ICICI Prudential Technology Fund - Growth'} style={{ width: '60%', fontSize: 14, fontFamily: FONTS.proxima500, marginLeft: 10, elevation: 0 }} />
      <BouncyCheckbox iconStyle={{ borderRadius: 4, width: 18, height: 18, borderColor: '#1BB18B' }} style={{ backgroundColor: 'red', flex: 1, width: 25, backgroundColor: 'red' }} onPress={onPress} />
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
      <Text style={styles.smallText}>
        Equity
      </Text>
      <Text style={styles.smallText}>
        Small Cap
      </Text>
      <Text style={styles.smallText}>
        High Risk
      </Text>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.smallText}>
          Return
        </Text>
        <Text style={{ color: '#1bb18b', fontSize: 14, fontFamily: FONTS.proxima500 }}>
          30%
        </Text>
      </View>
    </View>
  </View>
);

export default function SearchSwitchToFund() {
  const navigation = useNavigation();
  const fundHeader = 'ICICI Prudential Technology Fund - Growth';

  const [checkboxState, setCheckboxState] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const onCardClick = () => {
    setCheckboxState(!checkboxState);
  };
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id) || onCardClick}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        checkboxState={checkboxState}
      />
    );
  };


  return (
    <ScrollView style={styles.container}>
      <BackIconandTitleHeader title={'Switch'} />
      <View style={styles.body}>
        <FundHeader title={fundHeader} />
        <View style={{ paddingVertical: 20 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={commanStyles.greyTextSmall}>
              Units for SWP
            </Text>
            <Text style={commanStyles.greyTextSmall}>
              Amount
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={commanStyles.numberBold}>
              5420
            </Text>
            <Text style={commanStyles.numberBold}>
              ₹5000
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Text style={styles.switchText}>
            Funds you want to choose to
          </Text>
          <Text style={[styles.switchText, { fontFamily: FONTS.proxima700, marginLeft: 2.5 }]}>
            Switch
          </Text>
        </View>
        <Text style={styles.switchToText}>
          Switch To
        </Text>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder='Search a mutual fund'
            style={styles.searchBar}
            placeholderTextColor={'#8C8C8C'}
          />
          <View>
            <Image source={require('../../../../../assets/icons/Search.png')} style={{ width: 24, height: 24 }} />
          </View>
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </View>
      <View style={[styles.bottomIconContainer, commanStyles.appShadow]}>
        <TouchableOpacity onPress={() => navigation.navigate('ConfirmSwitchToOtherFund')} style={styles.investView}>
          <Text style={styles.investNowText}>
            CONTINUE
          </Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  body: {
    paddingHorizontal: SIZES.padding4
  },
  switchText: { fontSize: 18, fontFamily: FONTS.proxima500, color: Color.blue },
  switchToText: {
    fontSize: 18,
    color: Color.blue,
    fontFamily: FONTS.proxima700,
    marginLeft: 2.5,
    marginVertical: 16,
    alignSelf: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderRadius: 15,
    elevation: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  searchBar: {
    backgroundColor: '#fff',
    flex: 1,
    fontFamily: FONTS.proxima500,
    color: '#8C8C8C',
    fontSize: 18,
    alignSelf: 'center',
  },
  item: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#ffffff',
    elevation: 8,
    borderRadius: 20,
    paddingVertical: 20
  },
  title: {
    fontSize: 32,
  },
  smallText: {
    fontSize: 11,
    color: '#000000',
    fontFamily: FONTS.proxima500
  },
  bottomIconContainer: {
    paddingVertical: 25,
    backgroundColor: Color.background,
    alignItems: 'center',
    elevation: 8
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
});
