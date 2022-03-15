import React from 'react';
import {View, Text, Modal, Dimensions} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Section from './Section';
import ButtonBar from './ButtonBar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector,useDispatch } from 'react-redux';
import { toggleCOSuccessModal } from '../features/Modal/modalSlice';

const CheckOutSuccessModal = props => {
  const dispatch = useDispatch();
  const co_success_vissible = useSelector(state=>state.modalReducer.co_success_vissible); 
  const continueShopping = () => {
    dispatch(toggleCOSuccessModal());
  }
  return (
    <Modal animationType='none' transparent={true} visible={co_success_vissible}>
      <View
        style={tw.style(
          'flex-1 items-center justify-center bg-black bg-opacity-50',
        )}>
        <Section>
          <View
            style={[
              {width: Dimensions.get('window').width * 0.8},
              tw.style('items-center'),
            ]}>
            <View style={tw.style('mb-5 mt-3')}>
              <Text>
                <Icon
                  name={'check-circle'}
                  size={45}
                  color={tw.color('yellow-600')}
                />
              </Text>
            </View>
            <View style={tw.style('mb-3')}>
              <Text style={tw.style('text-lg font-bold')}>Congrats</Text>
            </View>
            <View>
              <Text style={tw.style('text-sm')}>
                Your order ID-xxxxxxxx was placed successfully!
              </Text>
            </View>
            <View>
              <Text style={tw.style('text-sm')}>
                Stay tuned because your item will be
              </Text>
            </View>
            <View>
              <Text style={tw.style('text-sm')}>shipped shorty.</Text>
            </View>
            <View style={tw.style('w-3/4 mt-5')}>
              <ButtonBar
                label={'Continue Shopping'}
                style={tw.style('ml-0 mr-0')}
                onPress={continueShopping}
              />
            </View>
          </View>
        </Section>
      </View>
    </Modal>
  );
};

export default CheckOutSuccessModal;
