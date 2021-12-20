import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Responsive } from '../utils/layouts/Layout';
import { Color } from '../utils/constants/Theme';
import { FONTS } from '../../constants/Theme';

function CommonButton({ label, style, labelStyle, ...rest }) {
    return (
        <TouchableOpacity style={[styles.container, style]} {...rest}>
            <Text style={[{ fontSize: Responsive.font(18), letterSpacing: 1, color:'#ffffff',
             fontFamily: FONTS.proxima700}, 
             labelStyle]}>{label}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.button,
        width: '100%',
        height: Responsive.height(50),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Responsive.width(15)
    }
});
export default CommonButton;
