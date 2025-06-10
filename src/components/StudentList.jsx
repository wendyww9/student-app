import './StudentList.css';
import Student from './Student.jsx'

const StudentList = () => {
  const studentComponents = [
    <li><Student name="Ada" email="ada@dev.org"></Student></li>,
    <li><Student name="Soo-ah" email="sooah@dev.org"></Student></li>,
    <li><Student name="Chrissy" email="chrissy@dev.org"></Student></li>
  ];

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
