import React from 'react';
import LottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <LottieView
      source={require('../../assets/loadingLottie.json')}
      autoPlay
      loop
    />
  );
};

export default Loading;
