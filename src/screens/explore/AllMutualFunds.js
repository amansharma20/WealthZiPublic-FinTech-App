/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    Modal
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { commanStyles } from '../../assets/styles';
import { Color } from '../../utils/constants/Theme';
import DATA from '../../utils/CommonData';
import FundsItem from '../../components/FlatListItems/FundsItem';
import { useNavigation } from '@react-navigation/core';
import FilterCardsModalSegments from './filters/FilterCardsModalSegments';
import { Responsive } from '../../utils/layouts/Layout';
import { useSelector } from 'react-redux';


const renderFunds = ({ item }) => (
    <FundsItem item={item} />
);

export default function AllMutualFunds() {
    const [showModal, setShowModal] = useState(false);
    const mutualFunds = useSelector(
        state => state.MutualFundsReducer.data.allMutualFunds.data,
    );
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <FastImage style={{ width: 25, height: 25, flexDirection: 'column-reverse' }}
                        source={uri = require("../../assets/icons/Back.png")}
                        resizeMode={FastImage.resizeMode.contain} />
                </TouchableOpacity>
                <Text style={commanStyles.navBarTitle}>All Mutual Funds</Text>
                <TouchableOpacity>
                    <FastImage style={{ width: 25, height: 25, flexDirection: 'column-reverse' }}
                        source={uri = require("../../assets/icons/Search.png")}
                        resizeMode={FastImage.resizeMode.contain} />
                </TouchableOpacity>
            </View>

            <View style={styles.mutualFundsFlatListContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30, marginTop: 20 }}>

                    <TouchableOpacity onPress={() => setShowModal(!showModal)}>
                        <Text style={styles.allMutualFundsLabel}>Filters-Sort</Text>
                    </TouchableOpacity>
                    <Text style={styles.allMutualFundsLabel}>1 y return</Text>
                </View>
                <FlatList
                    data={mutualFunds}
                    style={{ padding: 10 }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderFunds}
                    keyExtractor={item => item.id}
                />
            </View>
            {showModal && (
                <Modal
                    showModal={showModal}
                    onRequestClose={() => setShowModal(false)}
                    transparent={true}
                    statusBarTranslucent={true}
                    animationType="slide">
                    <View style={styles.modalBackground}>
                        <View style={styles.modalContainer}>
                            {/* HEADER  */}
                            <View style={styles.iconContainer}>
                                <Text style={styles.modalHeaderText}>Filter Cards</Text>
                                <TouchableOpacity
                                    onPress={() => setShowModal(false)}
                                    >
                                    <Text style={{fontWeight:"600", fontSize:11, marginRight:30}}>Close</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.modalBody}>
                                <View>
                                    <FilterCardsModalSegments />
                                </View>
                            </View>
                            <View style={styles.bottomButtonsContainer}>
                                <TouchableOpacity style={styles.clearAllButtonContainer}>
                                    <Text style={styles.clearAllText}>Clear All</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setShowModal(false)} style={styles.applyButtonContainer}>
                                    <Text style={styles.applyButtonText}>Apply</Text>
                                </TouchableOpacity>
                            </View>
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
    },
    modalContainer: {
        backgroundColor: '#ffffff',
        height: '64%',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        width: '100%',
    },
    iconContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 16,
        alignItems: 'center',
    },
    modalHeaderText: {
        fontSize: 20, color: '#060417',

    },
    modalBackground: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
    },
    modalBody: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#dfe0e4',
        height: '75%',
    },
    bottomButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
    },
    clearAllButtonContainer: {
        backgroundColor: '#ffffff',
        width: Responsive.width(160),
        height: Responsive.height(46),
        alignItems: 'center',
        justifyContent: 'center',
    },
    clearAllText: {
        color: Color.appColor,
         fontSize: 16,

    },
    applyButtonContainer: {
        backgroundColor: Color.appColor,
        width: Responsive.width(160),
        height: Responsive.height(46),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    applyButtonText: {
        color: '#ffffff', 
        fontSize: 16,

    },
   
})
