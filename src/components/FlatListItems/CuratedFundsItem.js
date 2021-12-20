import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { commanStyles } from '../../assets/styles';
import FastImage from 'react-native-fast-image';
import { Color } from '../../utils/constants/Theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import { useDispatch } from 'react-redux';
import { ExploreAction } from '../../persistence/actions/ExploreAction';
import { icons } from '../../../constants';


const CuratedFundsItem = (props) => {
    const item = props.item
    const navigation = useNavigation();
    const dispatch = useDispatch();

    return (
        <TouchableOpacity onPress={() => {
            dispatch(ExploreAction.getInvestmentDetails(`investments/detail/${item.slug}`, {})).then(response => {
                navigation.navigate('InvestmentDetailsFunds', {
                    title: item.title
                })
            })
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

export default CuratedFundsItem;


const styles = StyleSheet.create({
    quickAccessBox: {
        width: 120,
        height: 120,
        backgroundColor: '#ffffff',
        marginLeft: 20,
        borderRadius: 20,
        marginVertical: 10,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        padding: 10
    }

})
