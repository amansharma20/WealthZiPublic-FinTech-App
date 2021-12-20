import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { commanStyles } from '../../assets/styles';
import FastImage from 'react-native-fast-image';
import { Color } from '../../utils/constants/Theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import { useDispatch } from 'react-redux';
import { MutualFundsAction } from '../../persistence/actions/MutualFundsAction';
import { icons } from '../../../constants';


const DebtFundsItem = (props) => {
    const item = props.item
    const navigation = useNavigation();
    const dispatch = useDispatch();

    return (
        <TouchableOpacity onPress={() => {
            if (item.slug === "") {
                alert('Under Developement');
            } else {
                const data =
                {
                    "per_page": 1000,
                    "min_initial_investment": null,
                    "min_sip_amount": null,
                    "risk_profile": "",
                    "amc_code": "",
                    "plan_name": "broker",
                    "option_name": "growth",
                    "asset_category": "Fixed Income",
                    "asset_sub_category": item.slug,
                    "search_text": "",
                    "scheme_code": "",
                    "holding_period": "5Y",
                    "returns_perc": null,
                    "sort_by": "",
                    "sort_order": ""
                };
                dispatch(MutualFundsAction.getFundsScreener(`mutual-funds/fund-screener?page=0`, data)).then(response => {
                    navigation.navigate('FundsScreenerDetails', {
                        title: item.title
                    });
                })
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

export default DebtFundsItem;


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
