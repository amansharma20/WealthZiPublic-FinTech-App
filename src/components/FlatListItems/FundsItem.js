import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { commanStyles } from '../../assets/styles';
import FastImage from 'react-native-fast-image';
import { Color } from '../../utils/constants/Theme';
import { Responsive } from '../../utils/layouts/Layout';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';



const FundsItem = (props) => {
    const item = props.item
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate('FundDetails',{
            fund: item
        })}>
            <View style={[styles.fundsItemBox, commanStyles.appShadow]}>
                <View style={styles.upperTextConatiner}>
                    <FastImage
                        style={{ width: 30, height: 30, marginLeft: 20 }}
                        source={uri = require("../../assets/icons/icici.png")}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                    <Text style={styles.fundName} numberOfLines={2}>{item.scheme_name}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '70%', paddingLeft: 20, marginTop: 20 }}>
                        <Text style={styles.smallCapTexts}>
                        {item.asset_sub_category}
                        </Text>
                        <Text style={styles.smallCapTexts}>
                        {item.asset_category}
                        </Text>
                        <Text style={styles.smallCapTexts}>
                        {item.risk_profile}
                        </Text>
                    </View>
                    <View style={{ width: '30%', justifyContent: 'flex-end', marginTop: 10 }}>
                        <Text style={[styles.smallCapTexts, { fontSize: 12, textAlign: 'center' }]}>Return</Text>
                        <Text style={[{ fontSize: 16, textAlign: 'center', color: Color.appColor, fontWeight: '400' }]}>{item && item.performance && item.performance['1Y']}%</Text>
                    </View>
                </View>


            </View>

        </TouchableOpacity>

    );
}

export default FundsItem;


const styles = StyleSheet.create({
    fundsItemBox: {
        width: Responsive.screenWidth() - 40,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        marginHorizontal: 10,
        paddingBottom: 20,
        marginVertical: 20
    },
    upperTextConatiner: {
        flexDirection: 'row',
        marginTop: 20
    },
    fundName: {
        fontWeight: '400',
        fontSize: 14,
        color: Color.blue,
        marginLeft: 20,
        height: 'auto',
        marginRight: Responsive.width(60),
        flexWrap: 'wrap'
    },
    smallCapTexts: {
        fontSize: 11,
        fontWeight: '400',
        color: '#000000'
    },

})
