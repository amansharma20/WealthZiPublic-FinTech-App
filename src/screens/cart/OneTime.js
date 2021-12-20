/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CartOneTimeFlatlistItem from '../../components/FlatListItems/CartOneTimeFlatlist';

export default function OneTime() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
                <FlatList
                    data={[{}, {}, {}]}
                    keyExtractor={item => item.id}
                    renderItem={() => (
                        <CartOneTimeFlatlistItem />
                    )}
                    contentContainerStyle={{paddingHorizontal: 20, paddingTop: 35}}
                />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
});
