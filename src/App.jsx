import starIcon from "./assets/images/icon-star.svg";
import "./App.css";
import Question from "./Question";
import { useState } from "react";

function App() {
  const [focusIndex, setFocusIndex] = useState(0);
  const questionsArray = [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      question: "Is Frontend Mentor free?",
      answer:
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      question: "How can I get help if I'm stuck on a challenge?",
      answer:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];

  const handleFocus = (direction) => {
    if (typeof direction === "number") {
      const newIndex = focusIndex + direction;
      if (newIndex >= 0 && newIndex < questionsArray.length)
        setFocusIndex(newIndex);
    } else if (direction === "home") setFocusIndex(0);
    else if (direction === "end") setFocusIndex(questionsArray.length - 1);
  };
  return (
    <div className="app">
      <header>
        <h1>
          <img src={starIcon} alt="Star Icon" />
          FAQs
        </h1>
      </header>
      <main>
        {questionsArray.map((q, i) => (
          <Question
            key={i}
            question={q.question}
            answer={q.answer}
            isFirst={i === 0}
            isFocused={i === focusIndex}
            onFocus={handleFocus}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
