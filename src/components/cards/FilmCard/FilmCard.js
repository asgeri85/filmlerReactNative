import React from 'react';
import {View, TouchableWithoutFeedback, Text, Image} from 'react-native';
import styles from './FilmCard.style';

const FilmCard = ({film, onPress}) => {
  const url = `http://kasimadalan.pe.hu/filmler/resimler/${film.film_resim}`;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image source={{uri: url}} style={styles.image} />
        <Text style={styles.title}>{film.film_ad}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FilmCard;
