/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { icons } from '../../../constants';
import { commanStyles } from '../../assets/styles';
import { Formik } from 'formik';
import * as yup from 'yup';
import CommonButton from '../../components/CommonButton';
import BouncyCheckboxGroup, {
    ICheckboxButton,
} from "react-native-bouncy-checkbox-group";
import { FONTS } from '../../../constants/Theme';

const genders = [
    {
        id: 0,
        text: 'Male',
        style: { marginRight: 0, width: '50%' },
        fillColor: '#1BB18B',
        textStyle: { textDecorationLine: 'none', color: '#023373', fontFamily: FONTS.proxima500 },
        iconStyle: { borderColor: '#1BB18B' }
    },
    {
        id: 1,
        text: 'Female',
        style: { marginRight: 0, width: '50%' },
        iconStyle: { borderColor: '#1BB18B', },
        fillColor: '#1BB18B',
        textStyle: { textDecorationLine: 'none', color: '#023373', fontFamily: FONTS.proxima500 },
    },
];

const politicallyExposed = [
    {
        id: 0,
        text: 'Yes',
        style: { marginRight: 0, width: '50%' },
        fillColor: '#1BB18B',
        textStyle: { textDecorationLine: 'none', color: '#023373', fontFamily: FONTS.proxima500 },
        iconStyle: { borderColor: '#1BB18B' }
    },
    {
        id: 1,
        text: 'No',
        style: { marginRight: 0, width: '50%' },
        iconStyle: { borderColor: '#1BB18B' },
        fillColor: '#1BB18B',
        textStyle: { textDecorationLine: 'none', color: '#023373', fontFamily: FONTS.proxima500 },
    },
];

const maritalStatus = [
    {
        id: 0,
        text: 'Single',
        style: { marginRight: 0, width: '50%' },
        fillColor: '#1BB18B',
        textStyle: { textDecorationLine: 'none', color: '#023373', fontFamily: FONTS.proxima500 },
        iconStyle: { borderColor: '#1BB18B' }
    },
    {
        id: 1,
        text: 'Married',
        style: { marginRight: 0, width: '50%' },
        iconStyle: { borderColor: '#1BB18B' },
        fillColor: '#1BB18B',
        textStyle: { textDecorationLine: 'none', color: '#023373', fontFamily: FONTS.proxima500 },
    },
];


export default function PrimaryDetails() {
    const navigation = useNavigation();

    const [open, setOpen] = useState(false);
    const [dropDownValue, setDropDownValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Aadhar Card', value: 'aadharCard' },
        { label: 'Driving license', value: 'drivingLicense' },
        { label: 'Passport', value: 'passport' },
        { label: 'Voter Id', value: 'voterId' },
    ]);

    const schema = yup.object().shape({
        email: yup
            .string()
            .email()
            .required()
    });

    return (
        <ScrollView style={styles.container}>
            <View>
                {/* header icon */}
                <Image source={icons.wealthZiIcon} style={{ width: 175, height: 50, alignSelf: 'center', resizeMode: 'contain', marginTop: 50 }} />
                {/* kyc text */}
                <Text style={[commanStyles.headerText, { alignSelf: 'center', marginTop: 50 }]}>
                    Primary Details
                </Text>
            </View>
            {/* upload pan card */}
            <View style={styles.body}>

                <Formik
                    validationSchema={schema}
                    initialValues={{
                        panCard: '',
                    }}
                // onSubmit={console.log(values)}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        touched,
                    }) => (
                        <>
                            <View style={{ justifyContent: 'space-between', paddingBottom: 20 }}>

                                <View>
                                    <Text style={[commanStyles.normalText, { marginTop: 20 }]}>
                                        Father’s Name
                                    </Text>
                                    <TextInput
                                        name='firstName'
                                        style={styles.textInputStyle}
                                        onChangeText={handleChange('firstName')}
                                        onBlur={handleBlur('firstName')}
                                        value={values.panCard}
                                        placeholder="Father’s Name"
                                        placeholderTextColor="#B4B4B4"
                                    />
                                    {errors.panCard && touched.panCard && (
                                        <Text style={styles.error}>Aadhar Card is Required.</Text>
                                    )}
                                </View>

                                <View>
                                    <Text style={[commanStyles.normalText, { marginTop: 20 }]}>
                                        Mother’s Name
                                    </Text>
                                    <TextInput
                                        name='firstName'
                                        style={styles.textInputStyle}
                                        onChangeText={handleChange('firstName')}
                                        onBlur={handleBlur('firstName')}
                                        value={values.panCard}
                                        placeholder="Mother’s Name"
                                        placeholderTextColor="#B4B4B4"
                                    />
                                    {errors.panCard && touched.panCard && (
                                        <Text style={styles.error}>Aadhar Card is Required.</Text>
                                    )}
                                </View>

                                <View>
                                    <Text style={[commanStyles.normalText, { marginTop: 20 }]}>
                                        Occupation
                                    </Text>
                                    <TextInput
                                        name='firstName'
                                        style={styles.textInputStyle}
                                        onChangeText={handleChange('firstName')}
                                        onBlur={handleBlur('firstName')}
                                        value={values.panCard}
                                        placeholder="Occupation"
                                        placeholderTextColor="#B4B4B4"
                                    />
                                    {errors.panCard && touched.panCard && (
                                        <Text style={styles.error}>Aadhar Card is Required.</Text>
                                    )}
                                </View>

                                <View>
                                    <Text style={[commanStyles.normalText, { marginTop: 20 }]}>
                                        Salary Range
                                    </Text>
                                    <TextInput
                                        name='firstName'
                                        style={styles.textInputStyle}
                                        onChangeText={handleChange('firstName')}
                                        onBlur={handleBlur('firstName')}
                                        value={values.panCard}
                                        placeholder="Salary Range"
                                        placeholderTextColor="#B4B4B4"
                                    />
                                    {errors.panCard && touched.panCard && (
                                        <Text style={styles.error}>Aadhar Card is Required.</Text>
                                    )}
                                </View>

                                <View>
                                    <Text style={[commanStyles.normalText, { marginTop: 20 }]}>
                                        D.O.B.
                                    </Text>
                                    <TextInput
                                        name='firstName'
                                        style={styles.textInputStyle}
                                        onChangeText={handleChange('firstName')}
                                        onBlur={handleBlur('firstName')}
                                        value={values.panCard}
                                        placeholder="dd/mm/yyyy"
                                        placeholderTextColor="#B4B4B4"
                                    />
                                    {errors.panCard && touched.panCard && (
                                        <Text style={styles.error}>Aadhar Card is Required.</Text>
                                    )}
                                </View>

                                <View style={{ marginTop: 20 }}>
                                    <Text style={[commanStyles.normalText, { marginTop: 0 }]}>
                                        Gender
                                    </Text>
                                    <BouncyCheckboxGroup
                                        data={genders}
                                        onChange={(selectedItem: ICheckboxButton) => {
                                            console.log("SelectedItem: ", JSON.stringify(selectedItem));
                                        }}
                                    />
                                    <Text style={[commanStyles.normalText, { marginTop: 20 }]}>
                                        Politically Exposed?
                                    </Text>
                                    <BouncyCheckboxGroup
                                        data={politicallyExposed}
                                        onChange={(selectedItem: ICheckboxButton) => {
                                            console.log("SelectedItem: ", JSON.stringify(selectedItem));
                                        }}
                                    />
                                    <Text style={[commanStyles.normalText, { marginTop: 20 }]}>
                                        Marital Status
                                    </Text>
                                    <BouncyCheckboxGroup
                                        data={maritalStatus}
                                        onChange={(selectedItem: ICheckboxButton) => {
                                            console.log("SelectedItem: ", JSON.stringify(selectedItem));
                                        }}
                                    />
                                </View>

                            </View>



                            <Text style={[commanStyles.normalText, { textAlign: 'center', fontSize: 12, marginTop: 0 }]}>
                                Joint accounts are not supported. Please make sure that the cancelled cheque is of individual account.
                            </Text>

                            <CommonButton
                                label={'Save & Continue'}
                                // onPress={handleSubmit}
                                onPress={() => navigation.navigate('AddressAndCorrespondence')}
                                style={{ marginTop: 16, marginBottom: 24 }}
                            />
                        </>
                    )}
                </Formik>
            </View>


        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    body: {
        paddingHorizontal: 24,
    },
    textInputStyle: {
        height: 56,
        borderRadius: 15,
        fontSize: 16,
        paddingLeft: 10,
        color: '#A7A7A7',
        backgroundColor: 'white',
        elevation: 8
    },
    error: {
        marginLeft: 10,
        color: '#cc0000',
        width: '90%',
        marginTop: 10
    },
});
