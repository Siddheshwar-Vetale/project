import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import Login from "../Login";
import { BrowserRouter } from "react-router-dom";
const baseClasses =
  "font-medium mb-5 mx-48 border-1 border-solid border-blue-600	 text-sm px-4 py-2 bg-white-800 text-blue-700";

const Todo = () => {
//   return (
//     <BrowserRouter>
//       <Login />
//     </BrowserRouter>
//   );
};

describe("Testing button component", () => {
  it("should have default button styling", () => {
    render(<Login />);
    const defaultbtn = screen.getByRole("button");
    expect(defaultbtn).toHaveClass(baseClasses);
  });
});
