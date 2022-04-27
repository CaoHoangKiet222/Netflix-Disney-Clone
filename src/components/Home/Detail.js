import {useEffect, useState} from "react";
import {Container, Background, ImageTitle, ContentMeta, Controls, Player, Trailer, AddList, GroupWatch, Subtitle, Description} from "./DetailStyle";
import {useParams} from 'react-router-dom';
import {useSelector} from "react-redux";

const Detail = () => {
   const params = useParams();
   const movies = useSelector(state => state.movies);
   const [movie, setMovie] = useState({});

   useEffect(() => {
      Object.values(movies)?.forEach(arrMovies => {
         arrMovies?.forEach(value => {
            if (value.id === params.id) {
               setMovie({...value});
            }
         })
      })
   }, [params.id])

   return <Container>
      <Background>
         <img src={movie.backgroundImg} alt={movie.title} />
      </Background>
      <ImageTitle>
         <img src={movie.titleImg} alt="" />
      </ImageTitle>
      <ContentMeta>
         <Controls>
            <Player>
               <img src="/images/play-icon-black.png" alt="" />
               <span>play</span>
            </Player>
            <Trailer>
               <img src="/images/play-icon-white.png" alt="" />
               <span>trailer</span>
            </Trailer>
            <AddList>
               <span />
               <span />
            </AddList>
            <GroupWatch>
               <div>
                  <img src="/images/group-icon.png" alt="" />
               </div>
            </GroupWatch>
         </Controls>
         <Subtitle>{movie.subTitle}</Subtitle>
         <Description>{movie.description}</Description>
      </ContentMeta>
   </Container>;
}

export default Detail;
