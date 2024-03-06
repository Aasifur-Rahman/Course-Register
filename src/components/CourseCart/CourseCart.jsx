import PropTypes from "prop-types";

const CourseCart = ({ carts, courseTime, creditHour, coursePrice }) => {
  return (
    <div className="lg:w-3/12 h-2/5 shadow-2 shadow-lg p-5">
      <h3 className="border-b-2 mt-4 text-xl font-semibold text-blue-500">
        Course Hour Remaining: {courseTime}
      </h3>
      <h3 className="border-b-2 mt-5 text-xl font-semibold">Course Name</h3>
      <ul className="list-disc m-5 ">
        {carts.map((cart, idx) => (
          <li className="mb-4 text-lg" key={idx}>
            {cart.title}
          </li>
        ))}
      </ul>

      <h3 className="border-b-2 mt-5 text-xl font-semibold">
        Total Credit Hour: {creditHour}
      </h3>

      <p className="text-xl mt-5">Total Price: {coursePrice} USD</p>
    </div>
  );
};

CourseCart.propTypes = {
  carts: PropTypes.array,
  courseTime: PropTypes.number,
  creditHour: PropTypes.number,
  coursePrice: PropTypes.number,
};

export default CourseCart;
