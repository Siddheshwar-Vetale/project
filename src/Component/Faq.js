import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Faq.css";

const Faq = () => {
  return ( 
    <div className="faq">
      <big className="head">FAQ'S</big>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>What are the features of React?</Accordion.Header>
          <Accordion.Body>
            JSX: JSX is a syntax extension to JavaScript. Components: Components
            are the building blocks of any React application <br /> Virtual DOM:
            React keeps a lightweight representation of the real DOM in the
            memory, and that is known as the virtual DOM.
            <br /> data-binding: Reacts one-way data binding keeps everything
            modular and fast.
            <br /> High performance: React updates only those components that
            have changed, rather than updating all the components at once.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What is JSX?</Accordion.Header>
          <Accordion.Body>
            JSX is a syntax extension of JavaScript. It is used with React to
            describe what the user interface should look like. By using JSX, we
            can write HTML structures in the same file that contains JavaScript
            code.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What is the virtual DOM?</Accordion.Header>
          <Accordion.Body>
            DOM stands for Document Object Model. The DOM represents an HTML
            document with a logical tree structure. Each branch of the tree ends
            in a node, and each node contains objects.eact keeps a lightweight
            representation of the real DOM in the memory, and that is known as
            the virtual DOM. When the state of an object changes, the virtual
            DOM changes only that object in the real DOM, rather than updating
            all the objects
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>How do you create a React app?</Accordion.Header>
          <Accordion.Body>
            These are the steps for creating a React app: <br />
            1. Install NodeJS on the computer because we need npm to install the
            React library. Npm is the node package manager that contains many
            JavaScript libraries, including React.
            <br />
            2.Install the create-react-app package using the command prompt or
            terminal.
            <br />
            3.Install a text editor of your choice, like VS Code or Sublime
            Text.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header> What are forms in React?</Accordion.Header>
          <Accordion.Body>
            React employs forms to enable users to interact with web
            applications.
            <br />
            1. Using forms, users can interact with the application and enter
            the required information whenever needed.
            <br />
            2. Form contain certain elements, such as text fields, buttons,
            checkboxes, radio buttons, etc Forms are used for many different
            tasks such as user authentication, searching, filtering, indexing,
            etc
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Faq;
