import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './CategoryCard.style';

const CategoryCard = ({category, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{category.kategori_ad} </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryCard;
