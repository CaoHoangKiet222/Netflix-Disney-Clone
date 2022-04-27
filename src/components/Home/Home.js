import React, { useEffect, useState } from "react";
import { Container } from "./HomeStyle";
import ImageSlide from "./ImageSlide";
import Movies from "./Movies";
import Viewers from "./Viewers";
// import disneyMoviesData from '../../disneyPlusMoviesData.json';
import { useDispatch, useSelector } from "react-redux";
import { moviesActions } from "../../features/moviesSlice";
import { v4 as uuid } from "uuid";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.name);
  const movies = useSelector((state) => state.movies);
  let recommend = [],
    newDisney = [],
    original = [],
    trending = [];

  useEffect(() => {
    (async function () {
      const response = await fetch(
        "https://disney-plus-clone-2f023-default-rtdb.firebaseio.com/disneyPlusMoviesData.json"
      );
      const data = await response.json();
      const movies = data.filter((dt) => dt);
      Object.values(movies).forEach((value) => {
        const id = uuid();
        switch (value.type) {
          case "recommend":
            recommend = [...recommend, { id, ...value }];
            break;
          case "new":
            newDisney = [...newDisney, { id, ...value }];
            break;
          case "trending":
            trending = [...trending, { id, ...value }];
            break;
          case "original":
            original = [...original, { id, ...value }];
            break;
        }
      });
      dispatch(
        moviesActions.setMovies({ recommend, newDisney, original, trending })
      );
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    })();
  }, [userName]);

  return (
    <Container>
      <ImageSlide />
      <Viewers />
      <Movies
        movies={movies.recommend}
        isLoading={isLoading}
        text="Recommended For You"
      />
      <Movies
        movies={movies.newDisney}
        isLoading={isLoading}
        text="New to Disney+"
      />
      <Movies movies={movies.original} isLoading={isLoading} text="Originals" />
      <Movies movies={movies.trending} isLoading={isLoading} text="Trending" />
    </Container>
  );
};

export default Home;
