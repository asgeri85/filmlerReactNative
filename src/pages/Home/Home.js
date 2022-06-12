import React, {useCallback, useEffect} from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import useFetch from '../../hooks/useFetch';
import CategoryCard from '../../components/cards/CategoryCard';
import Loading from '../../components/Loading/Loading';

const URL = 'http://kasimadalan.pe.hu/filmler/';

const Home = ({navigation}) => {
  const {categoryList, loading, error, fetchCategory} = useFetch(URL);

  useEffect(() => {
    fetchCategory();
  }, [fetchCategory]);

  const renderCategory = ({item}) => (
    <CategoryCard
      category={item}
      onPress={() => onClickCard(item.kategori_id)}
    />
  );

  const onClickCard = id => {
    navigation.navigate('FilmsScreen', {id});
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <View>
      <FlatList data={categoryList} renderItem={renderCategory} />
    </View>
  );
};

export default Home;
