// import React from "react";
// import { Link } from "react-router-dom";
// import "./NavBar.css";

// const NavBar = () => {
//   return (
//     <div className="d-grid gap-2 d-md-block div">
//       <Link
//         className="mt-4 mb-4 btn btn-outline-primary button"
//         type="button"
//         to="/"
//       >
//         Login
//       </Link>
//       <Link
//         className="mt-4 mb-4 btn btn-outline-primary button"
//         type="button"
//         to="/register"
//       >
//         Register
//       </Link>
//       <Link
//         className="mt-4 mb-4 btn btn-outline-primary button"
//         type="button"
//         to="/display"
//       >
//         Display
//       </Link>
//       <Link
//         className="mt-4 mb-4 btn btn-outline-primary button"
//         type="button"
//         to="/Faq's"
//       >
//         FAQ's
//       </Link>
//     </div>
//   );
// };

// export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
// import "./NavBar.css";
const styleCss = {
  buttonDiv: "mt-5 mr-24 flex justify-end",
  buttonCss:
    "z-0 italic relative text-lg px-3 py-2 bg-white-800 text-white rounded hover:bg-blue-600",
};
// const style =
//   "z-0 font-medium mb-5 mt-4 mx-36 border-1 border-solid border-blue-600	 text-sm px-4 py-2 bg-white-800 text-blue-700 rounded hover:bg-blue-600 hover:text-white";

const NavBar = () => {
  return (
    <div className={`${styleCss.buttonDiv}`}>
      <Link className={`${styleCss.buttonCss}`} type="button" to="/">
        Login
      </Link>
      <Link className={`${styleCss.buttonCss} mx-1`} type="button" to="/register">
        Register
      </Link>
      <Link className={`${styleCss.buttonCss} mx-1`} type="button" to="/display">
        Display
      </Link>
      <Link
        className={`${styleCss.buttonCss} mx-1`}
        type="button"
        to="/Faq's"
      >
        FAQ's
      </Link>
      <Link
        className={`${styleCss.buttonCss} mx-1`}
        type="button"
        to="/FileUpload"
      >
        FileUpload
      </Link>
    </div>
  );
};

export default NavBar;
