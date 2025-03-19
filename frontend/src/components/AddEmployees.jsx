import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function AddEmployees() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center my-3">사원 등록</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddEmployees;
