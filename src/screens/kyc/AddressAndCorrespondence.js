/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { icons } from '../../../constants';
import { commanStyles } from '../../assets/styles';
import { Formik } from 'formik';
import * as yup from 'yup';
import CommonButton from '../../components/CommonButton';

export default function AddressAndCorrespondence() {
    const navigation = useNavigation();

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
                <Image source={icons.wealthZiIcon} style={styles.headerImage} />
                {/* kyc text */}
                <Text style={[commanStyles.headerText, { alignSelf: 'center', marginTop: 50 }]}>
                    Address & Correspondence
                </Text>
                <Text style={[commanStyles.normalText, { paddingHorizontal: 20, textAlign: 'center', fontSize: 14 }]}>
                    We are supporting Indian citizens as of now. Please reach out to us at support@wealthzi.com in case you are non-resident of India
                </Text>
            </View>
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
                                        Address Line 1*
                                    </Text>
                                    <TextInput
                                        name='firstName'
                                        style={styles.textInputStyle}
                                        onChangeText={handleChange('firstName')}
                                        onBlur={handleBlur('firstName')}
                                        value={values.panCard}
                                        placeholder="Address Line 1"
                                        placeholderTextColor="#B4B4B4"
                                    />
                                    {errors.panCard && touched.panCard && (
                                        <Text style={styles.error}>Aadhar Card is Required.</Text>
                                    )}
                                </View>

                                <View>
                                    <Text style={[commanStyles.normalText, { marginTop: 20 }]}>
                                        Address Line 2*
                                    </Text>
                                    <TextInput
                                        name='firstName'
                                        style={styles.textInputStyle}
                                        onChangeText={handleChange('firstName')}
                                        onBlur={handleBlur('firstName')}
                                        value={values.panCard}
                                        placeholder="Address Line 2"
                                        placeholderTextColor="#B4B4B4"
                                    />
                                    {errors.panCard && touched.panCard && (
                                        <Text style={styles.error}>Aadhar Card is Required.</Text>
                                    )}
                                </View>

                                <View>
                                    <Text style={[commanStyles.normalText, { marginTop: 20 }]}>
                                        Postal Code*
                                    </Text>
                                    <TextInput
                                        name='firstName'
                                        style={styles.textInputStyle}
                                        onChangeText={handleChange('firstName')}
                                        onBlur={handleBlur('firstName')}
                                        value={values.panCard}
                                        placeholder="Pincode"
                                        placeholderTextColor="#B4B4B4"
                                    />
                                    {errors.panCard && touched.panCard && (
                                        <Text style={styles.error}>Aadhar Card is Required.</Text>
                                    )}
                                </View>

                                <View>
                                    <Text style={[commanStyles.normalText, { marginTop: 20 }]}>
                                        City*
                                    </Text>
                                    <TextInput
                                        name='firstName'
                                        style={styles.textInputStyle}
                                        onChangeText={handleChange('firstName')}
                                        onBlur={handleBlur('firstName')}
                                        value={values.panCard}
                                        placeholder="Central Delhi"
                                        placeholderTextColor="#B4B4B4"
                                    />
                                    {errors.panCard && touched.panCard && (
                                        <Text style={styles.error}>Aadhar Card is Required.</Text>
                                    )}
                                </View>

                                <View>
                                    <Text style={[commanStyles.normalText, { marginTop: 20 }]}>
                                        State*
                                    </Text>
                                    <TextInput
                                        name='firstName'
                                        style={styles.textInputStyle}
                                        onChangeText={handleChange('firstName')}
                                        onBlur={handleBlur('firstName')}
                                        value={values.panCard}
                                        placeholder="Delhi"
                                        placeholderTextColor="#B4B4B4"
                                    />
                                    {errors.panCard && touched.panCard && (
                                        <Text style={styles.error}>Aadhar Card is Required.</Text>
                                    )}
                                </View>

                                <View>
                                    <Text style={[commanStyles.normalText, { marginTop: 20 }]}>
                                        Country*
                                    </Text>
                                    <TextInput
                                        name='firstName'
                                        style={styles.textInputStyle}
                                        onChangeText={handleChange('firstName')}
                                        onBlur={handleBlur('firstName')}
                                        value={values.panCard}
                                        placeholder="India"
                                        placeholderTextColor="#B4B4B4"
                                    />
                                    {errors.panCard && touched.panCard && (
                                        <Text style={styles.error}>Aadhar Card is Required.</Text>
                                    )}
                                </View>

                            </View>

                            <CommonButton
                                label={'Save & Continue'}
                                // onPress={handleSubmit}
                                onPress={() => navigation.navigate('BankDetailsKYC')}
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
    headerImage: { width: 175, height: 50, alignSelf: 'center', resizeMode: 'contain', marginTop: 50 },
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
