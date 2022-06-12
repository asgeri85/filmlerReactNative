import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import FilmCard from '../../components/cards/FilmCard';
import Loading from '../../components/Loading/Loading';

const URL = 'http://kasimadalan.pe.hu/filmler/';

const Films = ({route, navigation}) => {
  const {filmList, loading, error, fetchFilm} = useFetch(URL);
  const {id} = route.params;

  useEffect(() => {
    fetchFilm(id);
  }, [fetchFilm, id]);

  const onClickFilm = film => {
    navigation.navigate('DetailScreen', {film});
  };

  const renderFilm = ({item}) => (
    <FilmCard film={item} onPress={() => onClickFilm(item)} />
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <View>
      <FlatList data={filmList} renderItem={renderFilm} numColumns="2" />
    </View>
  );
};

export default Films;
