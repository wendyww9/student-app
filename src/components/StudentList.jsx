import './StudentList.css';
import Student from './Student.jsx'

const StudentList = () => {
  return (
    <section>
      <h2>Student List</h2>
      <ul>
          <li><Student></Student></li>
          <li><Student></Student></li>
          <li><Student></Student></li>
      </ul>
    </section>
  )
}
export default StudentList;
