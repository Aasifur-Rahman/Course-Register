import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from "prop-types";

const Courses = ({ handleCourseSelect }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className=" w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 m-10">
      {courses.map((course, idx) => (
        <Course
          handleCourseSelect={handleCourseSelect}
          key={idx}
          course={course}
        ></Course>
      ))}
    </div>
  );
};

Courses.propTypes = {
  handleCourseSelect: PropTypes.func,
};

export default Courses;
