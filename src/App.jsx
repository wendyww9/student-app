import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';
import { useState } from 'react';
import { kInitialStudentData } from './data/studentData';

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

  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo memberCount={studentData.length}></ClassInfo>
      <StudentList 
        students={studentData}
        onStudentPresenceToggle={toggleStudentPresence}
      ></StudentList>
    </main>
  );
}

export default App;
