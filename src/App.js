import React from "react";
import Accordion from "./components/index.js";

const faq = [
  {
    id: 1,
    question: "How many team members can I invite?",
    answer:
      "Commodo deserunt consequat irure cupidatat aliqua deserunt. Velit qui ullamco dolore fugiat dolore incididunt pariatur pariatur et.",
  },
  {
    id: 2,
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space",
  },
  {
    id: 3,
    question: "How do I reset my password",
    answer:
      "Esse officia consectetur in sit sunt consequat mollit est sit quis esse. Ullamco tempor aliqua nostrud ex nisi.",
  },
  {
    id: 4,
    question: "Can I cancel my subscription?",
    answer:
      "Aute tempor sunt do ullamco voluptate ipsum nisi voluptate commodo non proident.Culpa incididunt dolore mollit aute proident.",
  },
  {
    id: 5,
    question: "Do you provide additional support?",
    answer:
      "Ea aliqua id et incididunt.Nostrud labore ut tempor dolor sit.Dolor exercitation fugiat labore cupidatat consectetur non cillum sit proident elit.",
  },
];

function App() {
  return (
    <div className="App">
      <Accordion faq={faq} />
    </div>
  );
}

export default App;
