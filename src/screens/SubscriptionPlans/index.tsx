import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { COLORS, FONTS, SIZES } from '../../constants';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ToastManager, { Toast } from 'toastify-react-native';

import Iconicons from 'react-native-vector-icons/Ionicons';
import { CustomButton } from '../../components';
import SubscriptionModal from './SubscriptionModal';
import axiosInstance from '../../config/axiosInterceptor';
import ErrorPageComponent from '../../components/ErrorComponent';
import { useNavigation } from '@react-navigation/native';
import PaystackWebView from './PaystackWebView';
import { GlobalContext } from '../../context/provider';

const SubscriptionPlans = () => {
  const navigation = useNavigation;

  const { getSubDispatch } = useContext(GlobalContext);

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [fetchPlansLoading, setFetchPlansLoading] = useState<boolean>(false);
  const [fetchPlansError, setFetchPlansError] = useState<boolean>(false);
  const [fetchPaystackIntentLoading, setFetchPaystackIntentLoading] =
    useState<boolean>(false);
  const [processPaystack, setProcessPaystack] = useState<boolean>(false);
  const [paystackAuthorizationUrl, setPaystackAuthorizationUrl] =
    useState<string>('');
  const [refresh, setRefresh] = useState(false);

  const refreshComp = () => setRefresh(!refresh);

  const [plans, setPlans] = useState([]);

  const toggleModal = () => setIsModalVisible(!isModalVisible);

  const fetchSubscriptionPlans = async () => {
    setFetchPlansLoading(true);
    setFetchPlansError(false);

    try {
      const response = await axiosInstance.get('/subscription-plans');
      setPlans(response.data.data.plans);
    } catch (error) {
      setFetchPlansError(true);
    } finally {
      setFetchPlansLoading(false);
    }
  };

  // Fetch paystack intent
  const fetchPaystackPaymentIntent = async () => {
    if (!selectedPlan) {
      return Toast.error('Please select a plan before proceeding!');
    }

    setFetchPaystackIntentLoading(true);

    let planObj = {
      // @ts-ignore
      plan_id: selectedPlan?.id,
    };

    // const formData = new FormData();
    // formData.append('plan_id', selectedPlan?.id);
    try {
      const response = await axiosInstance.post('/payment-intent', planObj);

      setPaystackAuthorizationUrl(
        response?.data?.data?.payment_intent?.authorization_url,
      );
      setProcessPaystack(true);
    } catch (error) {
      setProcessPaystack(false);
      Toast.error('An error occurred, try agaun later!');
    } finally {
      setFetchPaystackIntentLoading(false);
    }
  };

  const closePaystackWebview = () => setProcessPaystack(false);

  useEffect(() => {
    fetchSubscriptionPlans();
  }, [refresh]);

  return (
    <>
      {fetchPlansError ? (
        <ErrorPageComponent
          text="Ops! Please check your internet connection and try again."
          refreshComp={refreshComp}
        />
      ) : fetchPlansLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={COLORS.primary} size="large" />
        </View>
      ) : (
        <>
          <View style={styles.container}>
            <ToastManager width={wp('80%')} positionValue={hp('0%')} />
            {processPaystack && (
              <TouchableOpacity
                onPress={closePaystackWebview}
                activeOpacity={0.5}
                style={{
                  width: wp('100%'),
                  height: hp('100%'),
                  position: 'absolute',
                  backgroundColor: 'rgba(0,0,0,0.8)',
                }}
              />
            )}

            <View style={styles.wrapper}>
              <Text style={styles.title}>
                Select a Subscription plan and proceed to checkout
              </Text>

              <TouchableOpacity
                onPress={toggleModal}
                activeOpacity={0.5}
                style={styles.selectBtn}>
                <Text style={{ color: COLORS.light, ...FONTS.h4 }}>
                  Select Plan
                </Text>
                <Iconicons
                  name="ios-caret-down"
                  style={{ fontSize: hp('2.5%') }}
                  color={COLORS.light}
                />
              </TouchableOpacity>

              {selectedPlan && (
                <View>
                  <View style={styles.textWrapper}>
                    <Text style={{ color: COLORS.dark, ...FONTS.body4 }}>
                      Selected plan:{' '}
                    </Text>
                    <Text style={{ color: COLORS.dark, ...FONTS.h4 }}>
                      {
                        // @ts-ignore
                        selectedPlan?.name
                      }
                    </Text>
                  </View>

                  <View style={styles.textWrapper}>
                    <Text style={{ color: COLORS.dark, ...FONTS.body4 }}>
                      Price:{' '}
                    </Text>
                    <Text style={{ color: COLORS.dark, ...FONTS.h4 }}>
                      ₦
                      {
                        // @ts-ignore
                        selectedPlan?.price
                      }
                    </Text>
                  </View>

                  <View style={styles.textWrapper}>
                    <Text style={{ color: COLORS.dark, ...FONTS.body4 }}>
                      Duration:{' '}
                    </Text>
                    <Text style={{ color: COLORS.dark, ...FONTS.h4 }}>
                      {
                        // @ts-ignore
                        selectedPlan?.days
                      }{' '}
                      days
                    </Text>
                  </View>
                </View>
              )}

              <SubscriptionModal
                setSelectedPlan={setSelectedPlan}
                isModalVisible={isModalVisible}
                toggleModal={toggleModal}
                data={plans}
              />

              <View
                style={{ position: 'absolute', bottom: 0, width: wp('80%') }}>
                <CustomButton
                  text="Checkout"
                  disabled={fetchPaystackIntentLoading}
                  onPress={fetchPaystackPaymentIntent}
                />
              </View>
            </View>
          </View>
          {processPaystack && (
            <PaystackWebView
              authorization_url={paystackAuthorizationUrl}
              navigation={navigation}
              closePaystackWebview={closePaystackWebview}
              getSubDispatch={getSubDispatch}
            />
          )}
        </>
      )}
    </>
  );
};

export default SubscriptionPlans;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyItem: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('7.5%'),
    backgroundColor: COLORS.light,
  },

  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: wp('30%'),
    width: wp('100%'),
    backgroundColor: COLORS.light,
  },

  wrapper: {
    flex: 1,
    width: wp('80%'),
  },

  title: {
    textAlign: 'center',
    color: COLORS.dark,
    ...FONTS.h4,
  },

  textWrapper: {
    flexDirection: 'row',
    marginVertical: SIZES.base,
  },

  selectBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    padding: SIZES.base,
    borderRadius: SIZES.base / 2,
    marginVertical: SIZES.margin,
  },
});
