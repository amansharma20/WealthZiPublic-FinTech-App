/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  LogBox,
  Platform,
  Modal,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { icons } from '../../../constants/';
import Images from '../../../constants/Images';
import { COLORS, SIZES } from '../../../constants/Theme';
import { AuthContext } from '../../navigation/StackNavigator';
import { useNavigation } from '@react-navigation/core';
import { ProfileAction } from '../../persistence/actions/ProfileAction';
import { ProfileReducer } from '../../persistence/reducers/ProfileReducer';
import { useDispatch, useSelector } from 'react-redux';


export default function Profile() {

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { signOut } = useContext(AuthContext);
  useEffect(() => {
    Platform.OS === 'ios' ? 200 : SplashScreen.hide();
  });

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested', 'Warning: Each', 'Warning: Failed'])
  }, [])

  const profileDetails = useSelector(state => state.ProfileReducer.data.profileDetails);

  useEffect(() => {
  }, []);

  console.log('profileDetails')
  console.log(profileDetails)
  console.log('profileDetails')

  const [modalVisible, setModalVisible] = useState(false);

  return (

    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 20 }}>
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            <Image source={icons.editProfile} style={styles.editProfile} />
          </TouchableOpacity>
        </View>
        <Image source={Images.pfpGallant} style={styles.profilePicture} />

        <Text style={styles.nameText}>
          {profileDetails.first_name} {profileDetails.last_name} 
        </Text>
        <Text style={styles.locationText}>
          example@example.com
        </Text>
      </View>
      <View style={styles.mainContainer}>

        <TouchableOpacity onPress={() => navigation.navigate('PersonalDetails')} style={styles.mainContainerBody}>
          <TouchableOpacity>
            <Image source={icons.profileIcon} style={styles.nextButton} />
          </TouchableOpacity>
          <Text style={styles.itemText}>
            Profile
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('BankDetails')} style={styles.mainContainerBody}>
          <TouchableOpacity>
            <Image source={icons.bank} style={styles.nextButton} />
          </TouchableOpacity>
          <Text style={styles.itemText}>
            Bank Accounts
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.mainContainerBody}>
          <TouchableOpacity>
            <Image source={icons.sip} style={styles.nextButton} />
          </TouchableOpacity>
          <Text style={styles.itemText}>
            My SIPs
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.mainContainerBody}>
          <TouchableOpacity>
            <Image source={icons.portfolio} style={styles.nextButton} />
          </TouchableOpacity>
          <Text style={styles.itemText}>
            Portfolio
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.mainContainerBody}>
          <TouchableOpacity>
            <Image source={icons.transactions} style={styles.nextButton} />
          </TouchableOpacity>
          <Text style={styles.itemText}>
            Transactions
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.mainContainerBody}>
          <TouchableOpacity>
            <Image source={icons.cart} style={styles.nextButton} />
          </TouchableOpacity>
          <Text style={styles.itemText}>
            Cart
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          // onPress={() => {
          //   signOut();
          // }} 
          onPress={() => setModalVisible(true)}
          style={styles.mainContainerBody}>
          <TouchableOpacity>
            <Image source={icons.logout} style={styles.nextButton} />
          </TouchableOpacity>
          <Text style={styles.itemText}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={async () => {
          signOut();
        }}>
          <Text style={[styles.footerText, { marginTop: 20 }]}>
            Log Out
          </Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        statusBarTranslucent={true}
      >
        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', height: '100%', justifyContent: 'flex-end' }}>
          <View style={{ backgroundColor: 'white', height: '30%' }}>
            <View style={{ paddingVertical: 30, flex: 1, justifyContent: 'space-around' }}>
              <Text style={styles.headerHeadingText}>
                Are you sure you want to Log Out?
              </Text>
              <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
                <View>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <View style={{ backgroundColor: 'white', borderRadius: 15, borderColor: '#1BB18B', borderWidth: 2, width: 150 }}>
                      <Text style={[styles.headerHeadingText, { paddingVertical: 14, alignSelf: 'center', fontSize: 18, color: '#1BB18B' }]}>
                        CANCEL
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      signOut();
                    }}
                  >
                    <View style={{ backgroundColor: '#1BB18B', borderRadius: 15, width: 150 }}>
                      <Text style={[styles.headerHeadingText, { paddingVertical: 14, alignSelf: 'center', fontSize: 18, color: '#ffffff' }]}>
                        LOG OUT
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

          </View>
        </View>

      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  profilePicture: { width: 134, height: 134, borderRadius: 99, borderWidth: 2, borderColor: '#DB3E6F' },
  editProfile: { width: 30, height: 30, resizeMode: 'contain' },
  imageContainer: {
    alignItems: 'center',
    paddingVertical: SIZES.paddingLarge,
  },
  nameText: {
    paddingTop: 10,
    // fontFamily: FONTS.proxima700,
    fontSize: 24,
    color: '#023373'
  },
  locationText: {
    fontSize: 14,
    // fontFamily: FONTS.proxima500,
    color: '#023373'
  },
  mainContainer: {
    paddingHorizontal: SIZES.padding6,
  },
  mainContainerBody: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    height: 46,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  itemText: {
    fontSize: 18,
    // fontFamily: FONTS.proxima500,
    color: '#023373',
    paddingLeft: 24
  },
  nextButton: { width: 18, height: 18, resizeMode: 'contain', },
  footerContainer: {
    paddingLeft: SIZES.paddingExtraLarge,
    paddingBottom: 40
  },
  footerText: {
    fontSize: 18,
    // fontFamily: FONTS.proxima500,
    color: COLORS.white,
  },
  headerHeadingText: {
    color: '#023373',
    fontSize: 24,
    // fontFamily: FONTS.proxima700,
    lineHeight: 22,
    alignSelf: 'center',
    textAlign: 'center',
    width: '80%',
  },
});