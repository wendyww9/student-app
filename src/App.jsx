import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';
import { useState } from 'react';
import { kInitialStudentData } from './data/studentData';
import NewStudentForm from './components/NewStudentForm';

function App() {
  const [studentData, setStudentData] = useState(kInitialStudentData);
  const toggleStudentPresence = (studentId) => {
    // const students = studentData.map(student => {
    //   if (student.id === studentId) {
    //     return { ...student, isPresentData: !student.isPresentData };
    //   } else {
    //     return student;
    //   }
    // });

    // setStudentData(students);
    setStudentData(students => {
      return students.map(student => {
        if (student.id === studentId) {
          return { ...student, isPresentData: !student.isPresentData };
        } else {
          return student;
        }
      });
    });
  };

  const deleteStudents = () => {
    setStudentData([]);
  };
  const addStudentData = (newStudent) => {
    const newId = Math.max(0, ...studentData.map(s => s.id)) + 1;
    const newStudentList = [...studentData];
    newStudentList.push({
      id: newId,
      nameData: newStudent.nameData,
      emailData: newStudent.emailData,
      isPresentData: false,
    });
    setStudentData(newStudentList);
  };

  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo memberCount={studentData.length}></ClassInfo>
      <button onClick={() => deleteStudents()}>Delete All Students!</button>
      <StudentList 
        students={studentData}
        onStudentPresenceToggle={toggleStudentPresence}
      ></StudentList>
      <NewStudentForm onStudentAdd={addStudentData}></NewStudentForm>
    </main>
  );
}

export default App;
