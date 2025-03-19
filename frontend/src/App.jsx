import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const getEmployees = async () => {
      const data = await axios.get('http://localhost:3000/employees');
      // fatch() : json parse 직접 ==> response.json() 호출
      // axios() : json parse 직접 ==> state에 담의면 됨
      setEmployees(data.data);
    };
    getEmployees();
  }, []);
  return (
    <>
        <table>
          <thead>
            <tr>
              <th>사번</th>
              <th>이름</th>
              <th>email</th>
              <th>전화번호</th>
              <th>입사일</th>
              <th>업무</th>
              <th>부서</th>
              <th>급여</th>
              <th>커미션요율</th>
              <th>관리자</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, i) => (
              <tr key={i}>
                <td>{emp.employee_id}</td>
                <td>
                  {emp.first_name} {emp.last_name}
                </td>
                <td>{emp.email}</td>
                <td>{emp.phone_number}</td>
                <td>{emp.hire_date}</td>
                <td>{emp.job_id}</td>
                <td>{emp.department_id}</td>
                <td>{emp.salary}</td>
                <td>{emp.commission_pct}</td>
                <td>{emp.manager_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </>
  );
}

export default App;

/* import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Row, Badge, Col } from 'react-bootstrap';
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
  padding: 1rem;
`;

const MovieTitle = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

const MovieInfo = styled.p`
  font-size: 0.75rem;
`;

const PosterBox = styled.div`
  width: 350px;
  height: 500px;
  overflow: hidden;
`

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
        {movies.map((movie, i) => (
          <MovieList key={i} className='col-sm-12 col-md-6 col-lg-4 col-xxl-3'>
            <PosterBox>
              {movie.poster && <img src={movie.poster} alt={movie.title} />}
              {!movie.poster && <img src='https://upload.wikimedia.org/wikipedia/ko/b/b8/1917%EC%98%81%ED%99%94_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg' alt={movie.title} />}
            </PosterBox>
            <MovieTitle>
              <Badge className='me-3'>제목</Badge>
              {movie.title}
            </MovieTitle>
            <MovieInfo>
              <Badge className='me-3'>개봉일</Badge>
              {movie.year}
            </MovieInfo>
            <div className='d-flex'>
              <MovieInfo>
                <Badge className='me-3'>출연진</Badge>
              </MovieInfo>
              <MovieInfo>
                {movie.cast.map((cast, i) => (
                  <span key={i} className='d-block'>{cast}</span>
                ))}
              </MovieInfo>
            </div>
            <div className='d-flex'>
              <MovieInfo>
                <Badge className='me-3'>감독</Badge>
              </MovieInfo>
              <MovieInfo>
                {movie.directors.map((directors, i) => (
                  <span key={i} className='d-block'>{directors}</span>
                ))}
              </MovieInfo>
            </div>
          </MovieList>
        ))}
      </Row>
    </Container>
  );
}

export default App;
 */
