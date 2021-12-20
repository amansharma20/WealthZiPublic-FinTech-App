/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Margin } from '../utils/constants/Theme';

const CommonHeader = () => {
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <FastImage style={{ width: 35, height: 35, marginLeft: Margin.left, flexDirection: 'column-reverse', marginTop: 40 }}
                    source={uri = require("../assets/icons/Back.png")}
                    resizeMode={FastImage.resizeMode.contain} />
            </TouchableOpacity>
        </View>
    );

}

export default CommonHeader;

const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: 'green'
    }

})
