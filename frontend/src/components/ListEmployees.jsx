import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function ListEmployees() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const getEmployees = async () => {
      const data = await axios.get('http://localhost:3000/employees');
      // fetch() : json parse 직접 ==> response.json() 호출
      // axios() : json parse 직접 ==> state에 담의면 됨
      setEmployees(data.data);
    };
    getEmployees();
  }, []);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center my-3">사원 목록</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>사번</th>
                  <th>이름</th>
                  <th>email</th>
                  <th>전화번호</th>
                  <th>입사일</th>
                  <th>업무코드</th>
                  <th>급여</th>
                  <th>부서</th>
                  <th>커미션</th>
                  <th>관리자</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody className='fs-75'>
                {employees.map((emp, i) => (
                  <tr key={i}>
                    <td>{emp.employee_id}</td>
                    <td>
                      {emp.first_name} {emp.last_name}
                    </td>
                    <td>{emp.email}</td>
                    <td>{emp.phone_number}</td>
                    <td>{new Date(emp.hire_date).toLocaleDateString()}</td>
                    <td>{emp.job_id}</td>
                    <td>{emp.salary}</td>
                    <td>
                      {emp.department_id == 10 && '행정 (Administration)'}
                      {emp.department_id == 20 && '마케팅 (Marketing)'}
                      {emp.department_id == 30 && '구매 (Purchasing)'}
                      {emp.department_id == 40 && '인사 (Human Resources)'}
                      {emp.department_id == 50 && '배송 (Shipping)'}
                      {emp.department_id == 60 && '정보기술 (IT)'}
                      {emp.department_id == 70 && '경영진 (Executive)'}
                      {emp.department_id == 80 && '홍보 (Public Relations)'}
                      {emp.department_id == 90 && '영업 (Sales)'}
                      {emp.department_id == 100 && '재무 (Finance)'}
                      {emp.department_id == 110 && '회계 (Accounting)'}
                    </td>
                    <td>{emp.commission_pct ? emp.commission_pct : '-'}</td>
                    <td>{emp.manager_id ? emp.manager_id : '-'}</td>
                    <td>
                      <Button variant="primary" size='sm'>수정</Button>
                    </td>
                    <td>
                      <Button variant="danger" size='sm'>삭제</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ListEmployees