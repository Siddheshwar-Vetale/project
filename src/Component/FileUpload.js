// // import { upload } from "@testing-library/user-event/dist/upload";
// import React, { useState } from "react";
// import axios from "axios";

// const FileUpload = () => {
//   const [file, setFile] = useState([]);
//   const [progress, setProgress] = useState({ started: false, pc: 0 });
//   const [msg, setMsg] = useState(null);

//   // const fileUpload =(e)=>{

//   //     setFile(e.target.files[0]);

//   // }

//   const handleUpload = (file) => {

//   console.log(file)

//     if (!file) {
//       setMsg("No file selected");
//       return;
//     }
//     const fd = new FormData();
//     fd.append("file", file);
//     setMsg("Uploading.....");
//     setProgress((prevState) => {
//       return { ...prevState, started: true };
//     });
//     axios
//       .post("http://httpbin.org/post", fd, {
//         onUploadProgress: (progressEvent) => {
//           setProgress((prevState) => {
//             return { ...prevState, pc: progressEvent.progress * 100 };
//           });
//         },
//         headers: {
//           "Custom-Header": "value",
//         },
//       })
//       .then((res) => {
//         setMsg("Upload Successful");
//         console.log(res.data);
//       })
//       .catch((err) => {
//         setMsg("Upload failed");
//         console.log(err);
//       });
//   };

//   const Sbutton =
//     "font-medium mb-5 mx-48 border-1 border-solid border-blue-600	 text-sm px-4 py-2 bg-white-800 text-blue-700 rounded hover:bg-blue-600 hover:text-white";

//   return (
//     <div className="flex justify-center	mt-40">
//       <form className="z-0 bg-blue-50 rounded-lg shadow-2xl shadow-indigo-500/50">
//         <h2 className="z-0 mx-24 mt-3">Select file to upload</h2>
//         <input
//           className="flex mx-36 mr-4 mt-4"
//           type="file"
//           name="file"
//           onChange={(e)=>{
//             let files = e.target.files[0]
//             console.log(files,"asdflngvsdlkjgv")
//           }}
//         />
//         <button
//           type="submit"
//           onClick={handleUpload}
//           className={`${Sbutton} mt-4`}
//         >
//           Upload
//         </button>
//         {progress.started && <progress className="flex mx-36 mr-4 mt-4" max="100" value={progress.pc}></progress>}
//         {msg && <span className="flex mx-36 mr-4 mt-4" value={msg}></span>}
//       </form>
//     </div>
//   );
// };

// export default FileUpload;

import React, { useState } from "react";

function FileUpload() {
  const [file, setFile] = useState(null);

  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [isSuccess, setIsSuccess] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
    setIsSuccess(false);

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowedTypes.includes(selectedFile?.type)) {
      setIsError(true);
      setErrorMsg("*Only pdf and doc files are allowed.");
      return;
    }

    setIsError(false);
    setFile(selectedFile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isError) return;
    setErrorMsg("");

    if (!file) {
      setIsError(true);
      setErrorMsg("*Please select a file.");
      return;
    }

    setIsError(false);
    setIsSuccess(true);
  };
  const Sbutton =
    "font-medium mb-5 mx-48 border-1 border-solid border-blue-600	 text-sm px-4 py-2 bg-white-800 text-blue-700 rounded hover:bg-blue-600 hover:text-white";

  return (
    <div className="flex justify-center	mt-40">
      <form
        onSubmit={handleSubmit}
        className="z-0 bg-blue-50 rounded-lg shadow-2xl shadow-indigo-500/50"
      >
        <h2 className="z-0 mx-28 mt-3">File Type Validation</h2>
        <input
          className="flex mx-36 mr-4 mt-4"
          type="file"
          // accept=".pdf,.docx"
          onChange={handleFileChange}
        />

        {isError && (
          <div className="error-text mx-36 mr-1 text-red-900">{errorMsg}</div>
        )}

        <button className={`${Sbutton} mt-4`} type="submit">
          Upload
        </button>

        {isSuccess && (
          <div className="success-text mb-4 mx-44 text-green-400">
            *Valid File Type
          </div>
        )}
      </form>
    </div>
  );
}

export default FileUpload;
