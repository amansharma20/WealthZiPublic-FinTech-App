/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { commanStyles } from '../../assets/styles';
import { icons } from '../../../constants';

export default function NominationDetails() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View>
                {/* header icon */}
                <Image source={icons.wealthZiIcon} style={styles.headerImage} />
                {/* kyc text */}
                <Text style={[commanStyles.headerText, { alignSelf: 'center', marginTop: 50 }]}>
                Nomination Details
                </Text>
                <Text style={[commanStyles.normalText, { paddingHorizontal: 20, textAlign: 'center', fontSize: 14, marginTop: 8 }]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, eget arcu in aliquam duis donec orci.
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    headerImage: { width: 175, height: 50, alignSelf: 'center', resizeMode: 'contain', marginTop: 50 },

});
