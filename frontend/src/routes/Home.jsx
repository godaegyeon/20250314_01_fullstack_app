import React from 'react';
import { Outlet, Link } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <>
      <header>
        <Container fluid='xl'>
          <Row>
            <Col className="col-lg-4">
              <div className="logo">한울ERP</div>
            </Col>
            <Col className="col-lg-8">
              <nav>
                <ul
                  className="d-flex justify-content-between gap-3"
                  style={{ listStyle: 'none' }}
                >
                  <li>
                    <Link to="./home">처음으로</Link>
                  </li>
                  <li>
                    <Link to="./list">사원목록</Link>
                  </li>
                  <li>
                    <Link to="./add">사원등록</Link>
                  </li>
                  <li>
                    <Link to="./0">새소식</Link>
                  </li>
                </ul>
              </nav>
            </Col>
          </Row>
        </Container>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Container>
          <Row>
            <Col>
              <p>&copy; 한울ERP</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Home;
