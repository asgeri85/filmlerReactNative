import {Dimensions, StyleSheet} from 'react-native';

const device = Dimensions.get('screen');

export default StyleSheet.create({
  image: {
    height: device.height / 3,
    width: device.width / 2,
    alignSelf: 'center',
    margin: 10,
  },
  textContainer: {
    margin: 5,
    padding: 5,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  container: {
    flex: 1,
  },
});
