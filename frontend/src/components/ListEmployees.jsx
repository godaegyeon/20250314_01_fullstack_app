import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import ModifyEmployee from '../components/ModifyEmployee';

function ListEmployees() {
  const [employees, setEmployees] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const getEmployees = async () => {
      const data = await axios.get('http://localhost:3000/employees');
      // fetch() : json parse 직접 ==> response.json() 호출
      // axios() : json parse 직접 ==> state에 담의면 됨
      setEmployees(data.data);
    };
    getEmployees();
  }, []);

  const handleEdit = () => {
    setIsVisible((prevState) => !prevState);
    setFullscreen('breakpoint');
    setShow(true);
  };

  const handleDelete = async (e) => {
    console.log(e.currentTarget.dataset.empId);
    if (confirm('정말로 삭제하시겠슴니까?')) {
      console.log('삭제요청을 진행합니다');
      await axios
        .delete(
          `http://localhost:3000/employees/${e.currentTarget.dataset.empId}`
        )
        .then((Response) => console.log(Response))
        .catch((e) => console.log(e));
    }
  };
  return (
    <>
      {isVisible && (
        <ModifyEmployee fullscreen={fullscreen} show={show} setShow={setShow} />
      )}
      <Container>
        <Row>
          <Col>
            <h1 className="text-center my-3">사원 목록</h1>
            <Table striped bordered hover className="text-center">
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
                  <th>매니져</th>
                  <th>관리</th>
                </tr>
              </thead>
              <tbody className="fs-75">
                {employees.map((emp, i) => (
                  <tr key={i}>
                    <td>{emp.employee_id}</td>
                    <td>
                    {emp.lsat_name} {emp.first_name}
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
                    <td className="d-flex justify-content-center gap-2">
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={
                          handleEdit
                        } /*employees={(emp.id)=>{employees.find()} targetEmp}*/
                      >
                        수정
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={handleDelete}
                        data-emp-id={emp._id}
                      >
                        삭제
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ListEmployees;
