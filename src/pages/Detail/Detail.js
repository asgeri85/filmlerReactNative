import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Detail.style';

const Detail = ({route}) => {
  const {film} = route.params;
  const url = `http://kasimadalan.pe.hu/filmler/resimler/${film.film_resim}`;

  return (
    <View style={styles.container}>
      <Image source={{uri: url}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text>{film.film_ad}</Text>
        <Text>{film.film_yil}</Text>
        <Text>{film.yonetmen.yonetmen_ad}</Text>
      </View>
    </View>
  );
};

export default Detail;
