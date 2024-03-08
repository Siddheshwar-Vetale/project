// import React, { useState } from "react";
// import "./Register.css";
// import person from "../person.svg";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const Register = () => {
//   const [tableData, setTableData] = useState([]);
//   const [details, setdetails] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     birthDate: "",
//     password: "",
//     confirmpassword: "",
//   });
//   const [errors, seterrors] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     password: "",
//     confirmpassword: "",
//   });
//   const [startDate, setStartDate] = useState();
//   const onChangeHandler = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setdetails({ ...details, [name]: value });
//   };
//   const handleChange = (date) => {
//     setStartDate(date);
//     printFormat(date);
//   };
//   const printFormat = (date) => {
//     const formatdate = `${new Date(date).getDate()}/${
//       new Date(date).getMonth() + 1
//     }/${new Date(date).getFullYear()}`;
//     details.birthDate = formatdate;
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const checkVal = !Object.values(details).every((res) => res === "");
//     if (checkVal) {
//       const dataObj = (data) => [...data, details];
//       setTableData(dataObj);
//     }
//     const isEmpty = {
//       name: "",
//       email: "",
//       mobile: "",
//       birthDate: "",
//       password: "",
//       confirmpassword: "",
//     };
//     setStartDate(null);
//     setdetails(isEmpty);
//     const newErrors = { ...errors };
//     if (details.name.trim() === "") {
//       newErrors.name = "*Name is required";
//     } else {
//       newErrors.name = "";
//     }
//     if (
//       !details.email.match(
//         /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//       )
//     ) {
//       newErrors.email = "*Invalid email address";
//     } else {
//       newErrors.email = "";
//     }
//     if (!details.mobile.match(/^\d{10}$/)) {
//       newErrors.mobile = "*Mobile Number Should be 10 Numbers";
//     } else {
//       newErrors.mobile = "";
//     }
//     if (details.password.length < 6) {
//       newErrors.password = "*Password must be at least 6 characters long";
//     } else {
//       newErrors.password = "";
//     }
//     if (details.confirmpassword !== details.password) {
//       newErrors.confirmpassword = "*Passwords do not match";
//     } else {
//       newErrors.confirmpassword = "";
//     }
//     seterrors(newErrors);
//   };
//   // localStorage.setItem("tableData", JSON.stringify(tableData));
//   if (
//     errors.name === "" &&
//     errors.email === "" &&
//     errors.mobile === "" &&
//     errors.password === "" &&
//     errors.confirmpassword === ""
//   ) {
//     sessionStorage.setItem("tableData", JSON.stringify(tableData));
//   }

//   return (
//     <>
//       <div className="formdiv">
//         <form onSubmit={handleSubmit} className="mt-2 formdiv1 shadow p-5">
//           <img id="person" alt="" src={person}></img>
//           <h3 className="mt-3 fst-italic text-primary text-center">
//             ______REGISTRATION PAGE______
//           </h3>
//           <div className="row m-2 g-3 mt-5 align-items-center">
//             <div className="col-auto">
//               <label className="mx-4 fw-bolder text-secondary col-form-label">
//                 Name
//               </label>
//             </div>
//             <div className="col-auto mx-5">
//               <input
//                 type="text"
//                 name="name"
//                 value={details.name}
//                 onChange={onChangeHandler}
//                 className="form-control name"
//               />
//             </div>
//           </div>
//           <div className="row align-items-center error">{errors.name}</div>
//           <div className="row m-2 g-3 align-items-center">
//             <div className="col-auto">
//               <label className="mx-4 fw-bolder text-secondary col-form-label">
//                 E-Mail
//               </label>
//             </div>
//             <div className="col-auto mx-5">
//               <input
//                 type="email"
//                 name="email"
//                 value={details.email}
//                 onChange={onChangeHandler}
//                 className="form-control email"
//               />
//             </div>
//           </div>
//           <div className="row align-items-center error">{errors.email}</div>
//           <div className="row m-2 g-3 align-items-center">
//             <div className="col-auto">
//               <label className="mx-4 fw-bolder text-secondary col-form-label">
//                 Mobile
//               </label>
//             </div>
//             <div className="col-auto mx-5">
//               <input
//                 type="number"
//                 name="mobile"
//                 value={details.mobile}
//                 onChange={onChangeHandler}
//                 className="form-control mt-0 mobile"
//               />
//             </div>
//           </div>
//           <div className="row align-items-center error">{errors.mobile}</div>
//           <div className="row m-2 g-3 align-items-center">
//             <div className="col-auto">
//               <label className="mx-4 fw-bolder text-secondary col-form-label">
//                 D.O.B
//               </label>
//             </div>
//             <div className="col-auto mx-5">
//               <DatePicker
//                 name="startDate"
//                 selected={startDate}
//                 onChange={handleChange}
//                 dateFormat="dd/MM/yyyy"
//                 className="mt-0 form-control date"
//                 showYearDropdown
//                 scrollableMonthYearDropdown
//                 autoComplete="off"
//               />
//               {/* <input type="date" name="birthDate" value={details.birthDate} onChange={onChangeHandler} className="form-control date" /> */}
//             </div>
//           </div>

//           <div className="row m-2 g-3 align-items-center">
//             <div className="col-auto">
//               <label className="mx-4 fw-bolder text-secondary col-form-label">
//                 Password
//               </label>
//             </div>
//             <div className="mx-4 mt-3 col-auto">
//               <input
//                 type="password"
//                 name="password"
//                 value={details.password}
//                 onChange={onChangeHandler}
//                 className="form-control pass"
//               />
//             </div>
//           </div>
//           <div className="row align-items-center error">{errors.password}</div>
//           <div className="row m-2 g-3 align-items-center">
//             <div className="col-auto">
//               <label className="mx-4 fw-bolder text-secondary col-form-label">
//                 C.Password
//               </label>
//             </div>
//             <div className="mt-2 mx-3 col-auto">
//               <input
//                 type="password"
//                 name="confirmpassword"
//                 value={details.confirmpassword}
//                 onChange={onChangeHandler}
//                 className="form-control cpass"
//               />
//             </div>
//           </div>
//           <div className="row align-items-center error">
//             {errors.confirmpassword}
//           </div>
//           <div className="display">
//             <button type="submit" className="mt-4 btn btn-outline-primary">
//               Register
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Register;

import React, { useState } from "react";
// import "./Register.css";
import person from "../person.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Register = () => {
  const [tableData, setTableData] = useState([]);
  const [details, setdetails] = useState({
    name: "",
    email: "",
    mobile: "",
    birthDate: "",
    password: "",
    confirmpassword: "",
  });
  const [errors, seterrors] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmpassword: "",
  });
  const [startDate, setStartDate] = useState();
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdetails({ ...details, [name]: value });
  };
  const handleChange = (date) => {
    setStartDate(date);
    printFormat(date);
  };
  const printFormat = (date) => {
    const formatdate = `${new Date(date).getDate()}/${
      new Date(date).getMonth() + 1
    }/${new Date(date).getFullYear()}`;
    details.birthDate = formatdate;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const checkVal = !Object.values(details).every((res) => res === "");
    if (checkVal) {
      const dataObj = (data) => [...data, details];
      setTableData(dataObj);
    }
    const isEmpty = {
      name: "",
      email: "",
      mobile: "",
      birthDate: "",
      password: "",
      confirmpassword: "",
    };
    setStartDate(null);
    setdetails(isEmpty);
    const newErrors = { ...errors };
    if (details.name.trim() === "") {
      newErrors.name = "*Name is required";
    } else {
      newErrors.name = "";
    }
    if (
      !details.email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      newErrors.email = "*Invalid email address";
    } else {
      newErrors.email = "";
    }
    if (!details.mobile.match(/^\d{10}$/)) {
      newErrors.mobile = `*Mobile Number Should be 10 Numbers`;
    } else {
      newErrors.mobile = "";
    }
    if (details.password.length < 6) {
      newErrors.password = "*Password must be at least 6 characters long";
    } else {
      newErrors.password = "";
    }
    if (details.confirmpassword !== details.password) {
      newErrors.confirmpassword = "*Passwords do not match";
    } else {
      newErrors.confirmpassword = "";
    }
    seterrors(newErrors);
  };
  // localStorage.setItem("tableData", JSON.stringify(tableData));
  if (
    errors.name === "" &&
    errors.email === "" &&
    errors.mobile === "" &&
    errors.password === "" &&
    errors.confirmpassword === ""
  ) {
    sessionStorage.setItem("tableData", JSON.stringify(tableData));
  }

  const Rbutton = "font-medium mb-5 mt-4 mx-52 border-1 border-solid border-blue-600	 text-sm px-4 py-2 bg-white-800 text-blue-700 rounded hover:bg-blue-600 hover:text-white";

  return (
    <>
      <div className="flex justify-center	mt-20">
        <form onSubmit={handleSubmit} className="z-0 bg-blue-50 rounded-lg shadow-2xl	shadow-indigo-500/50">
          <img
            alt=""
            className="flex justify-center mt-4 w-20 mx-52"
            src={person}
          ></img>
          <h3 className="mx-5 my-3">______REGISTRATION PAGE______</h3>
          <div className="flex m-1 mx-5 mt-5">
            <div className="">
              <label className="italic text-black-200 font-semibold mx-4">
                Name
              </label>
            </div>
            <div className="">
              <input
                type="text"
                name="name"
                value={details.name}
                onChange={onChangeHandler}
                className="mx-12 border-2 block w-52 rounded h-10"
              />
            </div>
          </div>
          <div className="text-red-900 mx-48 mr-4">{errors.name}</div>
          <div className="flex m-1 mx-5 mt-4">
            <div className="">
              <label className="italic text-black-200 font-semibold mx-4">
                E-Mail
              </label>
            </div>
            <div className="">
              <input
                type="email"
                name="email"
                value={details.email}
                onChange={onChangeHandler}
                className="mx-12 border-2 block w-52 rounded h-10"
              />
            </div>
          </div>
          <div className="text-red-900 mt-0 mx-48 mr-4">{errors.email}</div>
          <div className="flex m-1 mx-5 mt-4">
            <div className="">
              <label className="italic text-black-200 font-semibold mx-4">
                Mobile
              </label>
            </div>
            <div className="">
              <input
                type="number"
                name="mobile"
                value={details.mobile}
                onChange={onChangeHandler}
                className="mx-12 border-2 block w-52 rounded h-10"
              />
            </div>
          </div>
          <div className="text-red-900 mx-48 mr-4">{errors.mobile}</div>
          <div className="flex m-1 mx-5 mt-4">
            <div className="">
              <label className="italic text-black-200 font-semibold mx-4">
                D.O.B
              </label>
            </div>
            <div className="">
              <DatePicker
                name="startDate"
                selected={startDate}
                onChange={handleChange}
                dateFormat="dd/MM/yyyy"
                className="w-52 h-10 border-2 block mx-14 rounded"
                showYearDropdown
                scrollableMonthYearDropdown
                autoComplete="off"
              />
              {/* <input type="date" name="birthDate" value={details.birthDate} onChange={onChangeHandler} className="form-control date" /> */}
            </div>
          </div>

          <div className="flex m-1 mx-5 mt-4">
            <div className="">
              <label className="italic text-black-200 font-semibold mx-4">
                Password
              </label>
            </div>
            <div className="">
              <input
                type="password"
                name="password"
                value={details.password}
                onChange={onChangeHandler}
                className="mx-7 border-2 block w-52 rounded h-10"
              />
            </div>
          </div>
          <div className="text-red-900 mx-48 mr-4">{errors.password}</div>
          <div className="flex m-1 mx-5 mt-4">
            <div className="">
              <label className="italic text-black-200 font-semibold mx-4">
                C.Password
              </label>
            </div>
            <div className="">
              <input
                type="password"
                name="confirmpassword"
                value={details.confirmpassword}
                onChange={onChangeHandler}
                className="mx-3 border-2 block w-52 rounded h-10"
              />
            </div>
          </div>
          <div className="text-red-900 mx-48 mr-4">
            {errors.confirmpassword}
          </div>
          <div className="display">
            <button
              type="submit"
              className={`${Rbutton}`}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
