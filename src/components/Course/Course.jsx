import PropTypes from "prop-types";
import { LuDollarSign } from "react-icons/lu";
import { LuBookOpen } from "react-icons/lu";

const Course = ({ course, handleCourseSelect }) => {
  const { title, image, price, details, credit_time } = course;
  return (
    <div className="mb-10 shadow-3 rounded-xl shadow-lg p-6">
      {/* Image */}
      <img
        className=" rounded-lg w-full "
        src={image}
        alt={`Image for ${title}`}
      />
      {/* Title & Details */}
      <h1 className="text-2xl font-semibold text-center mt-3">{title}</h1>
      <p className="mt-5 text-gray-400">{details}</p>

      {/* price tags and credit time */}
      <div className="flex justify-between items-center mt-5 text-gray-500">
        <p className="flex items-center">
          <LuDollarSign className="mr-1"></LuDollarSign> Price: {price}
        </p>
        <span className="flex items-center">
          <LuBookOpen className="mr-1"></LuBookOpen> Credit: {credit_time} hours
        </span>
      </div>

      {/* Button */}
      <button
        onClick={() => handleCourseSelect(course, credit_time, price)}
        className="bg-blue-500 w-full text-white rounded-xl pt-2 pb-2 mt-5"
      >
        Select
      </button>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object,
  handleCourseSelect: PropTypes.func,
};

export default Course;
