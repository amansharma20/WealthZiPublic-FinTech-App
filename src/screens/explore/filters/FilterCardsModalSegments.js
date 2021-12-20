/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { Color } from '../../../utils/constants/Theme';
import { Responsive } from '../../../utils/layouts/Layout';
import AMC from './AMC';
import AssetClass from './AssetClass';
import FundCategory from './FundCategory';
import Investment from './Investment';


export default function FilterCardsModalSegments() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSingleIndexSelect = index => {
    setSelectedIndex(index);

  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <ScrollView vertical style={styles.container}>
        <SegmentedControlTab
          values={['Assest Class', 'Fund Category','AMC','Min. Investment']}
          selectedIndex={selectedIndex}
          tabStyle={styles.tabStyle}
          tabsContainerStyle={styles.tabsContainerStyle}
          activeTabStyle={styles.activeTabStyle}
          onTabPress={handleSingleIndexSelect}
          tabTextStyle={styles.tabTextStyle}
          activeTabTextStyle={styles.activeTabTextStyle}
          firstTabStyle={styles.firstTabStyle}
        />
      </ScrollView>
      {selectedIndex === 0 ? <AssetClass /> : <></>}
      {selectedIndex === 1 ? <AMC /> : <></>}
      {selectedIndex === 2 ? <FundCategory /> : <></>}
      {selectedIndex === 3 ? <Investment /> : <></>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  tabStyle: {
    alignItems: 'center',
    backgroundColor: '#f1f3f7',
    paddingVertical: Responsive.height(18),
    borderBottomWidth: 1,
    borderColor: '#dfe0e4',
  },
  firstTabStyle: {
    borderTopWidth: 0,
  },
  tabsContainerStyle: {
    flexDirection: 'column',
    width: '65%',
  },
  activeTabStyle: {
    backgroundColor: Color.appColor,
  },
  tabTextStyle: {
    color: '#172B4D',
    fontSize: 14,
  },
  activeTabTextStyle: {
    color: '#ffff',
    fontSize: 14,
    fontWeight:"700"
  },
});
