/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { commanStyles } from '../../assets/styles';
import { icons } from '../../../constants';
import { Formik } from 'formik';
import CommonButton from '../../components/CommonButton';
import * as yup from 'yup';
import { FONTS } from '../../../constants/Theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';

export default function BankDetailsKYC() {
    const navigation = useNavigation();

    const schema = yup.object().shape({
        email: yup
            .string()
            .email()
            .required()
    });

    const [open, setOpen] = useState(false);
    const [dropDownValue, setDropDownValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Savings', value: 'savings' },
        { label: 'Demat', value: 'demat' },
    ]);

    return (
        <ScrollView style={styles.container}>
            <View>
                {/* header icon */}
                <Image source={icons.wealthZiIcon} style={styles.headerImage} />
                {/* kyc text */}
                <Text style={[commanStyles.headerText, { alignSelf: 'center', marginTop: 50 }]}>
                    Bank Details
                </Text>
                <Text style={[commanStyles.normalText, { paddingHorizontal: 20, textAlign: 'center', fontSize: 14 }]}>
                    Currently, we are not supporting Join account holders. Please that the account details are of individual account
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
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 40 }}>
                                        <Text style={commanStyles.normalText}>
                                            IFSC Code*
                                        </Text>
                                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', }}>
                                            <Text style={[commanStyles.normalText, { fontSize: 10, color: '#848484', fontFamily: FONTS.proxima400, marginTop: 6 }]}>
                                                Check Supported Banks
                                            </Text>
                                            <Image source={icons.questionMark} style={{ width: 12, height: 12, marginLeft: 4 }} />
                                        </TouchableOpacity>
                                    </View>

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

                                    <Text style={[commanStyles.normalText, { fontSize: 12, paddingTop: 26, color: '#313B59' }]}>
                                        Currently, we are not supporting Join account holders. Please that the account details are of individual account
                                    </Text>

                                </View>

                                <View>
                                    <Text style={[commanStyles.normalText, { marginTop: 20 }]}>
                                        Account Number*
                                    </Text>
                                    <TextInput
                                        name='firstName'
                                        style={styles.textInputStyle}
                                        onChangeText={handleChange('firstName')}
                                        onBlur={handleBlur('firstName')}
                                        value={values.panCard}
                                        placeholder="Account Number"
                                        placeholderTextColor="#B4B4B4"
                                    />
                                    {errors.panCard && touched.panCard && (
                                        <Text style={styles.error}>Aadhar Card is Required.</Text>
                                    )}
                                </View>

                                <View>
                                    <Text style={[commanStyles.normalText, { marginTop: 20 }]}>
                                        Confirm Account Number*
                                    </Text>
                                    <TextInput
                                        name='firstName'
                                        style={styles.textInputStyle}
                                        onChangeText={handleChange('firstName')}
                                        onBlur={handleBlur('firstName')}
                                        value={values.panCard}
                                        placeholder="Confirm Account Number"
                                        placeholderTextColor="#B4B4B4"
                                    />
                                    {errors.panCard && touched.panCard && (
                                        <Text style={styles.error}>Aadhar Card is Required.</Text>
                                    )}
                                </View>

                                <View>
                                    <Text style={[commanStyles.normalText, { marginTop: 20 }]}>
                                        Account Type*
                                    </Text>
                                    <DropDownPicker
                                        open={open}
                                        value={dropDownValue}
                                        items={items}
                                        setOpen={setOpen}
                                        setValue={setDropDownValue}
                                        setItems={setItems}
                                        dropDownDirection="TOP"
                                        style={{ borderWidth: 0, elevation: 8 }}
                                        textStyle={commanStyles.normalText}
                                        dropDownContainerStyle={{
                                            backgroundColor: "#ffffff",
                                            elevation: 8,
                                            borderWidth: 0
                                        }}
                                        listMode="SCROLLVIEW"

                                    />
                                    {errors.panCard && touched.panCard && (
                                        <Text style={styles.error}>Aadhar Card is Required.</Text>
                                    )}
                                </View>

                            </View>

                            <CommonButton
                                label={'Save & Continue'}
                                // onPress={handleSubmit}
                                onPress={() => navigation.navigate('NominationDetails')}
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
