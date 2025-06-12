import './StudentList.css';
import Student from './Student.jsx';
import PropTypes from 'prop-types';

const StudentList = (props) => {

  const studentComponents = props.students.map((student,) => {
    return (
      <li key={student.id}>
        <Student 
          id={student.id}
          name={student.nameData} 
          email={student.emailData}
          isPresent={student.isPresentData}
        ></Student>
      </li>
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

StudentList.propTypes = {
  students: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    nameData: PropTypes.string.isRequired,
    emailData: PropTypes.string.isRequired,
    isPresentData: PropTypes.bool.isRequired,
  }))
};

export default StudentList;
