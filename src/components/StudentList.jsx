import './StudentList.css';
import Student from './Student.jsx'

const StudentList = () => {
  const studentData = [
    {
      nameData: 'Ada',
      emailData: 'ada@dev.org'
    },
    {
      nameData: 'Soo-ah',
      emailData: 'sooah@dev.org'
    },
    {
      nameData: 'Chrissy',
      emailData: 'chrissy@dev.org'
    }
  ];

  const studentComponents = studentData.map(student => {
    return (
      <li><Student name={student.nameData} email={student.emailData}></Student></li>
    );
  });

  return (
    <section>
      <h2>Student List</h2>
      <ul>
        {studentComponents}
      </ul>
    </section>
  );
};

export default StudentList;
