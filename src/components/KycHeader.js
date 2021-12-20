
import React, { } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { icons } from '../../constants';
import { commanStyles } from '../assets/styles';

export default function KycHeader(props) {
    return (
        <View>
            {/* header icon */}
            <Image source={icons.wealthZiIcon} style={{ width: 175, height: 50, alignSelf: 'center', resizeMode: 'contain', marginTop: 50 }} />
            {/* kyc text */}
            <Text style={[commanStyles.headerText, { alignSelf: 'center', marginTop: 50 }]}>
                KYC Details
            </Text>
            <Text style={[commanStyles.normalText, { paddingHorizontal: 20, textAlign: 'center', fontSize: 14 }]}>
                Please upload the correct documents.Any mismatch in the information will result into rejection
            </Text>
            <Text style={[commanStyles.headerText, { fontSize: 14, textAlign: 'center', marginBottom: 36 }]}>
                Max. doc size: 4MB.{'\n'}
                File type accepted: jpg, png, jpeg
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({

})