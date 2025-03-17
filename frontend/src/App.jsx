import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Row, Badge } from 'react-bootstrap';
import { styled } from 'styled-components';

function Myform() {
  return (
    <>
      <Container>
        <h1>폼</h1>
        <Form>
          <input type="text" />
          <button type="summit">검색</button>
        </Form>
      </Container>
    </>
  );
}

const MovieList = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  padding: 1rem;
`;

const MovieTitle = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
`;

const MovieInfo = styled.p`
  font-size: 0.75rem;
`;

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/movies');
        // const data = await response.json();
        console.log(response.data);
        setMovies(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    getMovies();
  }, []);

  if (!movies) {
    return <idv>loading...</idv>;
  }
  return (
    <Container>
      <Row>
        {movies.map((movie) => (
          <MovieList key={movie.id}>
            <img src={movie.poster} alt={movie.title} />
            <MovieTitle><Badge>제목</Badge>{movie.title}</MovieTitle>
            <p><Badge>개봉일</Badge>{movie.year}</p>
            <MovieInfo><Badge>출연진</Badge>
              {movie.actor.map((actor, i) => (
                <span key={i}>{actor}</span>
              ))}
            </MovieInfo>
            <MovieInfo><Badge>감독</Badge>{movie.producer}</MovieInfo>
          </MovieList>
        ))}
      </Row>
    </Container>
  );
}

export default App;
