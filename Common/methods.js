import {ToastAndroid} from 'react-native';
export const showToast = (msg, duration) => {
    if (typeof duration !== 'string') duration = '';
    duration = duration.toLowerCase() === 'short' ? 'SHORT' : 'LONG';
    ToastAndroid.showWithGravityAndOffset(
      msg,
      ToastAndroid[duration],
      ToastAndroid.BOTTOM,
      25,
      200,
    );
  };
  