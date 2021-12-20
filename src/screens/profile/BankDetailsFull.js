/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { icons } from '../../../constants';

const DATA = [
    {
        id: '1',
        mandateId: 'Mandate ID - 12345678 ',
        debtLimit: 'Max Debit Limit: ₹50,000',
    },
    {
        id: '2',
        mandateId: 'Mandate ID - 12345678 ',
        debtLimit: 'Max Debit Limit: ₹50,000',
    },
];

export default function BankDetailsFull() {
    const navigation = useNavigation();

    const Item = ({ mandateId, debtLimit }) => (
        <View onPress={() => navigation.navigate('BankDetailsFull')} style={styles.item}>
            <Text style={styles.title}>Mandate ID - 12345678 </Text>
            <Text style={styles.bankAccText}>Max Debit Limit: ₹50,000</Text>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item title={item.mandateId} bankAcc={item.debtLimit} />
    );

    return (
        <ScrollView style={styles.container}>
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

            <View style={{ paddingHorizontal: 24 }}>
                <View style={styles.detailContainer}>
                    <View>
                        <Text style={styles.titleText}>
                            Bank Name
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.mainText}>
                            Hdfc Bank
                        </Text>
                    </View>
                </View>

                <View style={styles.detailContainer}>
                    <View>
                        <Text style={styles.titleText}>
                            Account Number
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.mainText}>
                            1232XXXXXXXX789
                        </Text>
                    </View>
                </View>

                <View style={styles.detailContainer}>
                    <View>
                        <Text style={styles.titleText}>
                            Branch
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.mainText}>
                            Gurugram, Haryana
                        </Text>
                    </View>
                </View>

                <View style={styles.detailContainer}>
                    <View>
                        <Text style={styles.titleText}>
                            Account Type
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.mainText}>
                            Savings
                        </Text>
                    </View>
                </View>

                <Text style={[styles.headerHeadingText, { alignSelf: 'center', paddingTop: 28, paddingBottom: 16 }]}>
                    Bank Details
                </Text>

            </View>

            <View>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>

            <View>
                <TouchableOpacity>
                    <View style={styles.buttonContainer}>
                        <Text style={[styles.headerHeadingText, { color: '#1BB18B' }]}>
                            SETUP NEW MANDATE
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop:30
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
    detailContainer: {
        paddingBottom: 8,
    },
    titleText: {
        fontSize: 16,
        // fontFamily: FONTS.proxima500,
        color: '#8C8C8C',
    },
    mainText: {
        fontSize: 16,
        // fontFamily: FONTS.proxima500,
        color: '#313B59',
        paddingLeft: 20
    },
    title: {
        fontSize: 14,
        // fontFamily: FONTS.proxima700,
        color: '#023373',
    },
    bankAccText: {
        fontSize: 12,
        // fontFamily: FONTS.proxima500,
        color: '#023373',
        paddingTop: 24,
    },
    item: {
        width: '90%',
        elevation: 8,
        paddingVertical: 20,
        paddingHorizontal: 16,
        alignSelf: 'center',
        marginVertical: 8,
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom: 20
    },
    buttonContainer: {
        borderRadius: 15,
        borderWidth: 2,
        width: '90%',
        height: 50,
        borderColor: '#1BB18B',
        elevation: 8,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        paddingHorizontal: 20,
        alignSelf: 'center',
    },
});
