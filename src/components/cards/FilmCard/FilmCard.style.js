import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  image: {
    margin: 5,
    height: 200,
    width: 150,
    resizeMode: 'contain',
  },
  container: {
    width: '45%',
    margin: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'red',
  },
});
