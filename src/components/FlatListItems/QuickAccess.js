import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { commanStyles } from '../../assets/styles';
import FastImage from 'react-native-fast-image';
import { Color } from '../../utils/constants/Theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import { icons } from '../../../constants';

const QuickAccess = (props) => {
    const item = props.item
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => {
            if (item.id == 1) {
                navigation.navigate('AllMutualFunds')
            } else if (item.id == 2) {
                navigation.navigate('NewOfferList')
            }
        }}>
            <View style={[styles.quickAccessBox, commanStyles.appShadow,]}>
                <FastImage
                    style={{ width: 30, height: 30, justifyContent: 'center' }}
                    // source={{ uri: item.imageName }}
                    source={icons.transactions}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <Text style={{ fontSize: 12, fontWeight: '700', color: Color.blue, textAlign: 'center', marginTop: 10 }} numberOfLines={2}>
                    {item.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default QuickAccess;


const styles = StyleSheet.create({
    quickAccessBox: {
        width: 120,
        height: 120,
        backgroundColor: '#ffffff',
        marginLeft: 20,
        borderRadius: 20,
        marginTop: 10,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        padding: 10
    }

})
