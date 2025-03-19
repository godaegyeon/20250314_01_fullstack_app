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
              <th>급여</th>
              <th>부서</th>
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
                <td>{emp.salary}</td>
                <td>{emp.department_id}</td>
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