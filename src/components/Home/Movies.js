import {Link} from "react-router-dom";
import {LoadingSpinner} from "../../UI/LoadingSpinnerStyle";
import {Container, Content, Wrap} from "./MoviesStyle";

const Movies = (props) => {
   return <Container>
      <h4>{props.text}</h4>
      {
         props.isLoading ?
            <LoadingSpinner />
            :
            <>
               {
                  props.movies
                  &&
                  <Content>
                     {props.movies.map((movie) => {
                        return <Wrap key={movie.id}>
                           <Link to={`/detail/${movie.id}`}>
                              <img src={movie.cardImg} alt={movie.title} />
                           </Link>
                        </Wrap>;
                     })}
                  </Content>
               }
            </>
      }

   </Container>;
}

export default Movies;
