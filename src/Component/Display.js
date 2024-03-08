// import React, { Fragment } from "react";
// import "./Display.css";

// const Display = () => {
//   const navigateData = JSON.parse(sessionStorage.getItem("tableData"));

//   return (
//     <Fragment>
//       <div className="datatable">
//         <table className="table table-striped">
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Mobile No.</th>
//               <th>D.O.B</th>
//               <th>Password</th>
//             </tr>
//           </thead>
//           <tbody>
//             {navigateData?.map((data, index) => {
//               return (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{data.name}</td>
//                   <td>{data.email}</td>
//                   <td>{data.mobile}</td>
//                   <td>{data.startDate1}</td>
//                   <td>{data.password}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </Fragment>
//   );
// };

// export default Display;

import React, { Fragment, useRef } from "react";
// import "./Display.css";
// import * as XLSX from "xlsx";
// import { jsPDF } from "jspdf";
// import "jspdf-autotable";
import { useReactToPrint } from "react-to-print";
const ExcelJS = require("exceljs");

const Display = () => {
  const navigateData = JSON.parse(sessionStorage.getItem("tableData"));
  const conponentPDF = useRef();

  const downloadButton =
    "font-medium mt-4 mr-16 border-1 border-solid border-black-600 text-sm px-4 py-2 bg-blue-800 text-black rounded hover:bg-blue-600 hover:text-white";
  const handleExelDownload = () => {
    const flag = false;
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("ExcelData");
    sheet.properties.defaultRowHeight = 20;
    if (flag) {
      const newData = navigateData.map(
        ({ name, email, mobile, birthDate }) => ({
          name,
          email,
          mobile,
          birthDate,
        })
      );
      const newData1 = navigateData.map(({ password }) => ({ password }));
      let mergedData = newData.map((data, index) => ({
        ...data,
        ...newData1[index],
      }));

      // console.log(newData);
      // const workBook = XLSX.utils.book_new();
      // const workSheet = XLSX.utils.json_to_sheet(newData);
      // XLSX.utils.book_append_sheet(workBook, workSheet, "MyFile");
      // XLSX.writeFile(workBook, "MyExel.xlsx");

      sheet.columns = [
        {
          header: "Id",
          key: "id",
          width: 10,
        },
        { header: "Name", key: "name", width: 15 },
        {
          header: "Email",
          key: "email",
          width: 30,
        },
        {
          header: "Mobile",
          key: "mobile",
          width: 20,
        },
        {
          header: "BirthDate",
          key: "birthdate",
          width: 20,
        },
        {
          header: "Password",
          key: "password",
          width: 15,
        },
      ];
      mergedData?.map(async (data, index) => {
        sheet.addRow({
          id: index + 1,
          name: data?.name,
          email: data?.email,
          mobile: data?.mobile,
          birthdate: data?.birthDate,
          password: data?.password,
        });
      });
      const idCol = sheet.getColumn(1);
      idCol.eachCell((cell) => {
        const cellValue = sheet.getCell(cell?.address).value;
        if (cellValue < 3) {
          sheet.getCell(cell?.address).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FF0000" },
          };
        }
        if (cellValue > 2) {
          sheet.getCell(cell?.address).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "00FF00" },
          };
        }
      });
    }
    if (!flag) {
      const newData = navigateData.map(
        ({ name, email, mobile }) => ({
          name,
          email,
          mobile,
        })
      );
      const newData1 = navigateData.map(({ password }) => ({ password }));
      let mergedData = newData.map((data, index) => ({
        ...data,
        ...newData1[index],
      }));

      // console.log(newData);
      // const workBook = XLSX.utils.book_new();
      // const workSheet = XLSX.utils.json_to_sheet(newData);
      // XLSX.utils.book_append_sheet(workBook, workSheet, "MyFile");
      // XLSX.writeFile(workBook, "MyExel.xlsx");

      sheet.columns = [
        {
          header: "Id",
          key: "id",
          width: 10,
        },
        { header: "Name", key: "name", width: 15 },
        {
          header: "Email",
          key: "email",
          width: 30,
        },
        {
          header: "Mobile",
          key: "mobile",
          width: 20,
        },
        {
          header: "Password",
          key: "password",
          width: 15,
        },
      ];
      mergedData?.map(async (data, index) => {
        sheet.addRow({
          id: index + 1,
          name: data?.name,
          email: data?.email,
          mobile: data?.mobile,
          password: data?.password,
        });
      });
      const idCol = sheet.getColumn(1);
      idCol.eachCell((cell) => {
        const cellValue = sheet.getCell(cell?.address).value;
        if (cellValue < 3) {
          sheet.getCell(cell?.address).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FF0000" },
          };
        }
        if (cellValue > 2) {
          sheet.getCell(cell?.address).fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "00FF00" },
          };
        }
      });
    }
    workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = "MySheet.xlsx";
      anchor.click();
      window.URL.revokeObjectURL(url);
    });
  };

  // const handlePdfDownload = () => {
  //   const doc = new jsPDF();
  //   const table = document.getElementById('table');
  //   doc.autoTable({
  //     html: table
  //   });
  //   doc.save("myPdf.pdf");
  // };
  const handlePdfDownload = useReactToPrint({
    content: () => conponentPDF.current,
    documentTitle: "Userdata",
  });

  return (
    <Fragment>
      <div className="flex justify-center relative z-0 flex-col">
        <div className="flex justify-end">
          <button onClick={handleExelDownload} className={`${downloadButton} `}>
            Excel
          </button>
          <button onClick={handlePdfDownload} className={`${downloadButton}`}>
            Pdf
          </button>
        </div>
        <div ref={conponentPDF} className="w-5/6 mx-10">
          <table
            id="table"
            className="bg-white table mt-12 border-collapse border-2 border-black "
          >
            <thead>
              <tr>
                <th className="border border-black">Id</th>
                <th className="border border-black">Name</th>
                <th className="border border-black">Email</th>
                <th className="border border-black ">Mobile No.</th>
                <th className="border border-black">D.O.B</th>
                <th className="border border-black">Password</th>
              </tr>
            </thead>
            <tbody>
              {navigateData?.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className="border border-black">{index + 1}</td>
                    <td className="border border-black">{data.name}</td>
                    <td className="border border-black">{data.email}</td>
                    <td className=" border border-black text-danger ">
                      {data.mobile}
                    </td>
                    <td className="border border-black">{data.birthDate}</td>
                    <td className="border border-black">{data.password}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default Display;
