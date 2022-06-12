import {useState, useCallback} from 'react';
import axios from 'axios';
import qs from 'qs';

const useFetch = URL => {
  const [categoryList, setcategoryList] = useState();
  const [filmList, setFilmList] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCategory = useCallback(async () => {
    const categoryURl = `${URL}tum_kategoriler.php`;
    try {
      const {data: response} = await axios.get(categoryURl);
      setcategoryList(response.kategoriler);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, [URL]);

  const fetchFilm = useCallback(
    async id => {
      const filmUrl = `${URL}filmler_by_kategori_id.php`;
      try {
        const {data: response} = await axios.post(
          filmUrl,
          qs.stringify({
            kategori_id: id,
          }),
        );
        setFilmList(response.filmler);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    },
    [URL],
  );

  return {categoryList, loading, error, fetchCategory, filmList, fetchFilm};
};

export default useFetch;
