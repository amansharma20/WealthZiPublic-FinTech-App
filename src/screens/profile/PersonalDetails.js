/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { icons } from '../../../constants';
import { FONTS } from '../../../constants/Theme';

export default function PersonalDetails() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={icons.backIcon}
            style={styles.backSize}
          />
        </TouchableOpacity>
        <Text style={styles.headerHeadingText}>
          Personal Details
        </Text>
        <View>
        </View>
      </View>
      <View style={styles.detailContainer}>
        <View>
          <Text style={styles.titleText}>
            Name
          </Text>
        </View>
        <View>
          <Text style={styles.mainText}>
            Charanjeet Singh
          </Text>
        </View>
      </View>

      <View style={styles.detailContainer}>
        <View>
          <Text style={styles.titleText}>
            Email
          </Text>
        </View>
        <View>
          <Text style={styles.mainText}>
            xample@example.com
          </Text>
        </View>
      </View>

      <View style={styles.detailContainer}>
        <View>
          <Text style={styles.titleText}>
            Mobile
          </Text>
        </View>
        <View>
          <Text style={styles.mainText}>
            999999999
          </Text>
        </View>
      </View>

      <View style={styles.detailContainer}>
        <View>
          <Text style={styles.titleText}>
            D.O.B.
          </Text>
        </View>
        <View>
          <Text style={styles.mainText}>
            28/03/1990
          </Text>
        </View>
      </View>

      <View style={styles.detailContainer}>
        <View>
          <Text style={styles.titleText}>
            Father’s Name
          </Text>
        </View>
        <View>
          <Text style={styles.mainText}>
            Bachitar Singh
          </Text>
        </View>
      </View>

      <View style={styles.detailContainer}>
        <View>
          <Text style={styles.titleText}>
            Mother’s Name
          </Text>
        </View>
        <View>
          <Text style={styles.mainText}>
            Balbeer Kaur
          </Text>
        </View>
      </View>

      <View style={styles.detailContainer}>
        <View>
          <Text style={styles.titleText}>
            PAN Number
          </Text>
        </View>
        <View>
          <Text style={styles.mainText}>
            bdjdsfnedfkje
          </Text>
        </View>
      </View>

      <View style={styles.detailContainer}>
        <View>
          <Text style={styles.titleText}>
            Residential Status
          </Text>
        </View>
        <View>
          <Text style={styles.mainText}>
            Owned
          </Text>
        </View>
      </View>

      <Text style={[styles.headerHeadingText, { alignSelf: 'center', paddingTop: 28, paddingBottom: 16 }]}>
        Address Details
      </Text>

      <View style={styles.detailContainer}>
        <View>
          <Text style={styles.titleText}>
            Residential
          </Text>
        </View>
        <View>
          <Text style={styles.mainText}>
            B-4/99 Paschim Vihar
            New Delhi -110063
          </Text>
        </View>
      </View>

      <Text style={[styles.headerHeadingText, { alignSelf: 'center', paddingTop: 28, paddingBottom: 16 }]}>
        Nominee Details
      </Text>

      <Text style={[styles.headerHeadingText, {
        alignSelf: 'center',
        // fontFamily: FONTS.proxima400
      }]}>
        No Nominee Added
      </Text>

      <View>
        <TouchableOpacity>
          <View style={styles.buttonContainer}>
            <Text style={[styles.headerHeadingText, { color: '#1BB18B' }]}>
              Add nominee
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <View style={[styles.buttonContainer, { backgroundColor: '#023373', borderWidth: 0, marginBottom: 40 }]}>
            <Text style={[styles.headerHeadingText, { color: '#ffffff' }]}>
              Save
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 28,
    paddingTop: Platform.select({
      android: 0,
      ios: 30,
    }),
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'space-between',
    paddingBottom: 40
  },
  backSize: {
    width: 24,
    height: 20,
    resizeMode: 'contain',
    tintColor: '#023271',
  },
  headerHeadingText: {
    color: '#023373',
    fontSize: 18,
    fontFamily: Platform.select({
      android: FONTS.proxima700,
      ios: '',
    }),
    lineHeight: 22,
  },
  detailContainer: {
    paddingBottom: 8,
  },
  titleText: {
    fontSize: 16,
    fontFamily: Platform.select({
      android: FONTS.proxima500,
      ios: '',
    }),
    color: '#8C8C8C',
  },
  mainText: {
    fontSize: 16,
    fontFamily: Platform.select({
      android: FONTS.proxima500,
      ios: '',
    }),
    color: '#313B59',
    paddingLeft: 20
  },
  buttonContainer: {
    borderRadius: 15,
    borderWidth: 2,
    width: '95%',
    height: 50,
    borderColor: '#1BB18B',
    elevation: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
});
