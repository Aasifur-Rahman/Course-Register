import { useState } from "react";
import "./App.css";
import CourseCart from "./components/CourseCart/CourseCart";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [carts, setCarts] = useState([]);
  const [courseTime, setCourseTime] = useState(20);
  const [creditHour, setCreditHour] = useState(0);
  const [coursePrice, setCoursePrice] = useState(0);

  const handleCourseSelect = (course, time, price) => {
    console.log(price);
    // course selection
    const isAlreadyAdded = carts.some((cartItem) => cartItem.id === course.id);
    if (isAlreadyAdded) {
      toast.warning("Already Added");
    } else {
      // course added to the cart
      const newCart = [...carts, course];
      setCarts(newCart);

      // total course price
      const newCoursePrice = Math.round(coursePrice + price);
      setCoursePrice(newCoursePrice);
      // Course hour remaining
      if (time <= 0) {
        toast.error("Invalid course time");
      }
      const newCourseTime = courseTime - time < 0 ? 0 : courseTime - time;
      setCourseTime(newCourseTime);
      //  total credit hour calculation
      const newCreditHour = Math.min(creditHour + time, 20);
      setCreditHour(newCreditHour);
      if (newCreditHour >= 20) {
        toast.success("Congratulations Credit Hour Completed");
      }
    }
  };
  return (
    <>
      <Header></Header>

      <div className="lg:flex">
        <Courses handleCourseSelect={handleCourseSelect}></Courses>
        <CourseCart
          coursePrice={coursePrice}
          creditHour={creditHour}
          courseTime={courseTime}
          carts={carts}
        ></CourseCart>
      </div>
      <ToastContainer position="bottom-right"></ToastContainer>
    </>
  );
}

export default App;
