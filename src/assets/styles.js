import { StyleSheet, } from 'react-native';
import { COLORS, FONTS } from '../../constants/Theme';
import { Color, Margin } from '../utils/constants/Theme';


export const commanStyles = StyleSheet.create({
    appShadow: {
        shadowColor: '#333333',
        shadowOpacity: 0.3,
        shadowRadius: 10,
        shadowOffset: {
            height: 2,
            width: 4
        },
        elevation: 8,
    },
    navBarTitle: {
        fontWeight: '700',
        color: Color.blue,
        fontSize: 21,
    },
    flatListTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Color.blue,
        marginTop: Margin.top,
        marginLeft: Margin.left
    },
    rupeeTitle: {
        color: Color.appColor,
        fontWeight: '700',
        fontSize: 21
    },
    numberBold: {
        fontSize: 18,
        fontFamily: FONTS.proxima700,
    },
    greyTextSmall: {
        fontSize: 14,
        fontFamily: FONTS.proxima500,
        color: '#858585',
    },
    headerText: {
        fontSize: 18,
        fontFamily: FONTS.proxima700,
        color: '#023373',
    },
    normalText: {
        fontSize: 16,
        fontFamily: FONTS.proxima500,
        color: '#023373',
        marginBottom: 8,
    }
})