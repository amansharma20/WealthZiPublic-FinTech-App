/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { icons } from '../../../constants';
import { commanStyles } from '../../assets/styles';
import CommonButtonGreen from '../../components/CommonButtonGreen';
import DropDownPicker from 'react-native-dropdown-picker';
import { Formik } from 'formik';
import * as yup from 'yup';
import CommonButton from '../../components/CommonButton';
import KycHeader from '../../components/KycHeader';


export default function KycDrivingLicense() {
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
            <KycHeader />
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

                            <Text style={commanStyles.normalText}>
                                PAN Card*
                            </Text>
                            <CommonButtonGreen label={'UPLOAD'} />

                            <Text style={commanStyles.normalText}>
                                Cancelled Cheque*
                            </Text>
                            <CommonButtonGreen label={'UPLOAD'} />

                            {/* Dropdown Container */}
                            <Text style={[commanStyles.normalText, { marginTop: 10 }]}>
                                Select Document for Address Proof*
                            </Text>
                            <DropDownPicker
                                open={open}
                                value={dropDownValue}
                                items={items}
                                setOpen={setOpen}
                                setValue={setDropDownValue}
                                setItems={setItems}
                                dropDownDirection="BOTTOM"
                                style={{ borderWidth: 0, elevation: 8 }}
                                textStyle={commanStyles.normalText}
                                dropDownContainerStyle={{
                                    backgroundColor: "#ffffff",
                                    elevation: 8,
                                    borderWidth: 0
                                }}
                                listMode="SCROLLVIEW"

                            />


                            <View style={{ justifyContent: 'space-between', paddingBottom: 20 }}>
                                {
                                    dropDownValue === 'aadharCard' ?
                                        (

                                            <View>
                                                <Text style={[commanStyles.normalText, { marginTop: 20 }]}>
                                                    VoterID Number(epic number)*
                                                </Text>
                                                <TextInput
                                                    name='firstName'
                                                    style={styles.textInputStyle}
                                                    onChangeText={handleChange('firstName')}
                                                    onBlur={handleBlur('firstName')}
                                                    value={values.panCard}
                                                    placeholder="Aadhar UID"
                                                    placeholderTextColor="#B4B4B4"
                                                />
                                                {errors.panCard && touched.panCard && (
                                                    <Text style={styles.error}>Aadhar Card is Required.</Text>
                                                )}
                                                <Text style={[commanStyles.normalText, { marginTop: 20 }]}>
                                                    Upload Front Page*
                                                </Text>
                                                <CommonButtonGreen label={'UPLOAD'} />

                                                <Text style={commanStyles.normalText}>
                                                    Upload Back Page*
                                                </Text>
                                                <CommonButtonGreen label={'UPLOAD'} />
                                            </View>
                                        )
                                        :
                                        <View>

                                        </View>
                                }

                                {
                                    dropDownValue === 'drivingLicense' ?
                                        (
                                            <View>
                                                <Text style={[commanStyles.normalText, { marginTop: 20 }]}>
                                                    Driving License Issue Date*
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
                                                    <Text style={styles.error}>Pan Card is Required.</Text>
                                                )}

                                                <Text style={[commanStyles.normalText, { marginTop: 20 }]}>
                                                    Driving License Expiry Date*
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
                                                    <Text style={styles.error}>Pan Card is Required.</Text>
                                                )}

                                                <Text style={[commanStyles.normalText, { marginTop: 20 }]}>
                                                    Driving License Number*
                                                </Text>
                                                <TextInput
                                                    name='firstName'
                                                    style={styles.textInputStyle}
                                                    onChangeText={handleChange('firstName')}
                                                    onBlur={handleBlur('firstName')}
                                                    value={values.panCard}
                                                    placeholder="Driving License Number"
                                                    placeholderTextColor="#B4B4B4"
                                                />
                                                {errors.panCard && touched.panCard && (
                                                    <Text style={styles.error}>Pan Card is Required.</Text>
                                                )}
                                                <Text style={[commanStyles.normalText, { marginTop: 20 }]}>
                                                    Address Proof*
                                                </Text>
                                                <CommonButtonGreen label={'UPLOAD'} />

                                            </View>
                                        )
                                        :
                                        <View>

                                        </View>
                                }

                                {
                                    dropDownValue === 'passport' ?
                                        (
                                            <View>
                                                <Text style={[commanStyles.normalText, { marginTop: 20 }]}>
                                                    Passport Issue Date*
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
                                                    <Text style={styles.error}>Pan Card is Required.</Text>
                                                )}

                                                <Text style={[commanStyles.normalText, { marginTop: 20 }]}>
                                                    Passport Expiry Date*
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
                                                    <Text style={styles.error}>Pan Card is Required.</Text>
                                                )}

                                                <Text style={[commanStyles.normalText, { marginTop: 20 }]}>
                                                    Passport Number*
                                                </Text>
                                                <TextInput
                                                    name='firstName'
                                                    style={styles.textInputStyle}
                                                    onChangeText={handleChange('firstName')}
                                                    onBlur={handleBlur('firstName')}
                                                    value={values.panCard}
                                                    placeholder="Driving License Number"
                                                    placeholderTextColor="#B4B4B4"
                                                />
                                                {errors.panCard && touched.panCard && (
                                                    <Text style={styles.error}>Passport is Required.</Text>
                                                )}
                                                <Text style={[commanStyles.normalText, { marginTop: 20 }]}>
                                                    Upload Front Page*
                                                </Text>
                                                <CommonButtonGreen label={'UPLOAD'} />

                                                <Text style={commanStyles.normalText}>
                                                    Upload Back Page*
                                                </Text>
                                                <CommonButtonGreen label={'UPLOAD'} />

                                            </View>
                                        )
                                        :
                                        <View>

                                        </View>
                                }

                                {
                                    dropDownValue === 'voterId' ?
                                        (
                                            <View>
                                                <Text style={[commanStyles.normalText, { marginTop: 20 }]}>
                                                    VoterID Number(epic number)*
                                                </Text>
                                                <TextInput
                                                    name='firstName'
                                                    style={styles.textInputStyle}
                                                    onChangeText={handleChange('firstName')}
                                                    onBlur={handleBlur('firstName')}
                                                    value={values.panCard}
                                                    placeholder="VoterID Number(epic number)*"
                                                    placeholderTextColor="#B4B4B4"
                                                />
                                                {errors.panCard && touched.panCard && (
                                                    <Text style={styles.error}>Voter ID is Required.</Text>
                                                )}
                                                
                                                <Text style={[commanStyles.normalText, { marginTop: 20 }]}>
                                                    Upload Front Page*
                                                </Text>
                                                <CommonButtonGreen label={'UPLOAD'} />

                                                <Text style={commanStyles.normalText}>
                                                    Upload Back Page*
                                                </Text>
                                                <CommonButtonGreen label={'UPLOAD'} />

                                            </View>
                                        )
                                        :
                                        <View>

                                        </View>
                                }


                            </View>



                            <Text style={[commanStyles.normalText, { textAlign: 'center', fontSize: 12, marginTop: 0 }]}>
                                Joint accounts are not supported. Please make sure that the cancelled cheque is of individual account.
                            </Text>

                            <CommonButton
                                label={'Save & Continue'}
                                onPress={handleSubmit}
                                style={{ marginTop: 16, marginBottom: 24 }}
                                onPress={() => navigation.navigate('PrimaryDetails')}
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
