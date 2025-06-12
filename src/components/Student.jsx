import './StudentList.css';
import PropTypes from "prop-types";
import { useState } from 'react';

const Student = (props) => {
  const nameColor = isPresent ? 'green' : 'red';
  return (
    <div>
      <ul>
        <li className={nameColor}>Nickname: {props.name}</li>
        <li>Email: {props.email}</li>
      </ul>
      <button onClick={/*togglePresence*/}>Toggle if {props.name} is present</button>
    </div>
  );
};

Student.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  isPresent: PropTypes.bool.isRequired,
  onPresenceToggle: PropTypes.func.isRequired,
};
export default Student;