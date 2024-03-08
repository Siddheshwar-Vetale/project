// import React from "react";
// import "./Login.css";
// import person from "../person.svg";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, seterror] = useState("");
//   const navigate = useNavigate();

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };
//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const users = [
//       { email: "test1@test.com", password: "test@123" },
//       { email: "test2@test.com", password: "test@890" },
//     ];
//     const user = users.find(
//       (user) => user.email === email && user.password === password
//     );
//     if (user) {
//       navigate("/display");
//     } else {
//       var newErrors = { ...error };
//       newErrors = "*The email and password does not match";
//       seterror(newErrors);
//     }
//   };

//   return (
//     <>
//       <div className="formdiv">
//         <form className="mt-5 shadow formdiv1 p-3">
//           <img id="person1" alt="" src={person}></img>
//           <h3 className="mt-4 text-center fst-italic text-primary">
//             ______Sign In______
//           </h3>
//           <div className="error1">{error}</div>
//           <div className="row m-2 g-3 align-items-center">
//             <div className="col-auto">
//               <label
//                 htmlFor="inputemail"
//                 className="fw-bolder text-secondary col-form-label"
//               >
//                 E-Mail
//               </label>
//             </div>
//             <div className="col-auto mx-4">
//               <input
//                 type="email"
//                 id="inputemail"
//                 value={email}
//                 onChange={handleEmailChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//           <div className="row m-2 g-3 align-items-center">
//             <div className="col-auto">
//               <label
//                 htmlFor="inputPassword"
//                 className="fw-bolder text-secondary col-form-label"
//               >
//                 Password
//               </label>
//             </div>
//             <div className="mx col-auto">
//               <input
//                 type="password"
//                 id="inputPassword"
//                 value={password}
//                 onChange={handlePasswordChange}
//                 className="form-control"
//               />
//             </div>
//           </div>
//           <div>
//             <button
//               type="submit"
//               onClick={handleLogin}
//               className="mt-4 mb-4 btn btn-outline-primary"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Login;

import React from "react";
// import "./Login.css";
import person from "../person.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const users = [
      { email: "test1@test.com", password: "test@123" },
      { email: "test2@test.com", password: "test@890" },
    ];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      navigate("/display");
    } else {
      var newErrors = { ...error };
      newErrors = "*The email and password does not match";
      seterror(newErrors);
    }
  };
  const Sbutton =
    "font-medium mb-5 mx-48 border-1 border-solid border-blue-600	 text-sm px-4 py-2 bg-white-800 text-blue-700 rounded hover:bg-blue-600 hover:text-white";

  return (
    <>
      <div className="flex justify-center	mt-40">
        <form className="z-0 bg-blue-50 rounded-lg shadow-2xl shadow-indigo-500/50">
          <img className="mt-4 w-20 mx-52" alt="" src={person}></img>
          <h3 className="mx-32 my-3">______Sign In______</h3>
          <div className="text-red-900 mx-24 mr-4">{error}</div>
          <div className="flex m-5 ">
            <div className="">
              <label
                htmlFor="inputemail"
                className="italic text-black-200 font-semibold mx-4"
              >
                E-Mail
              </label>
            </div>
            <div className="">
              <input
                type="email"
                id="inputemail"
                value={email}
                onChange={handleEmailChange}
                className="mx-11 border-2 block w-52 rounded h-10"
              />
            </div>
          </div>
          <div className="flex m-5">
            <div className="">
              <label
                htmlFor="inputPassword"
                className="italic text-black-200 font-semibold mx-4"
              >
                Password
              </label>
            </div>
            <div className="">
              <input
                type="password"
                id="inputPassword"
                value={password}
                onChange={handlePasswordChange}
                className="mx-4 border-2 w-52 h-10 rounded"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              onClick={handleLogin}
              className={`${Sbutton}`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
