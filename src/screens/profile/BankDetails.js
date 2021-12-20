
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { icons } from '../../../constants';
import { commanStyles } from '../../assets/styles';

const DATA = [
    {
        id: '1',
        title: 'HDFC Bank',
        bankAcc: '1232XXXXXXXX789',
    },
    {
        id: '2',
        title: 'ICICI Bank',
        bankAcc: '1232XXXXXXXX789',
    },
];



export default function BankDetails() {
    const navigation = useNavigation();

    const Item = ({ title }) => (
        <TouchableOpacity onPress={() => navigation.navigate('BankDetailsFull')} style={[styles.item, commanStyles.appShadow]}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.bankAccText}>1232XXXXXXXX789</Text>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    const footerItem = () => (
        <TouchableOpacity style={styles.addItem}>
            <Image source={icons.add}
                style={styles.addIcon}
            />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icons.backIcon}
                        style={styles.backSize}
                    />
                </TouchableOpacity>
                <Text style={styles.headerHeadingText}>
                    Bank Details
                </Text>
                <View>
                </View>
            </View>
            <View>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    contentContainerStyle={{ alignSelf: 'center' }}
                    ListFooterComponent={footerItem}
                    ListFooterComponentStyle={{ flexDirection: 'row' }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 30
    },
    header: {
        flexDirection: 'row',
        paddingVertical: 20,
        justifyContent: 'space-between',
        paddingBottom: 40,
        paddingHorizontal: 24,
    },
    backSize: {
        width: 24,
        height: 20,
        resizeMode: 'contain',
        tintColor: '#023271',
    },
    headerHeadingText: {
        color: '#023373',
        fontSize: 18,
        // fontFamily: FONTS.proxima700,
        lineHeight: 22,
    },
    item: {
        backgroundColor: '#ffffff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: '40%',
        alignSelf: 'center',
        height: 160,
        borderRadius: 15,
    },
    addItem: {
        backgroundColor: '#ffffff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: '40%',
        alignSelf: 'center',
        height: 160,
        elevation: 8,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 14,
        // fontFamily: FONTS.proxima700,
        color: '#023373',
    },
    addIcon: {
        width: 60, height: 60, alignSelf: 'center',
    },
    bankAccText: {
        fontSize: 12,
        // fontFamily: FONTS.proxima500,
        color: '#023373',
        paddingTop: 24,
    },
});
