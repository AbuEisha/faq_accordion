import { useEffect, useRef, useState } from "react";
import plusIcon from "./assets/images/icon-plus.svg";
import minusIcon from "./assets/images/icon-minus.svg";
export default function Question({
  question,
  answer,
  isFirst,
  isFocused,
  onFocus,
}) {
  const [isOpen, setIsOpen] = useState(isFirst);
  const questinRef = useRef(null);
  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  const handleKeydown = (e) => {
    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        onFocus(-1);
        break;
      case "ArrowDown":
        e.preventDefault();
        onFocus(1);
        break;
      case "Home":
      case "PageUp":
        e.preventDefault();
        onFocus("home");
        break;
      case "End":
      case "PageDown":
        e.preventDefault();
        onFocus("end");
        break;
      case " ":
      case "Enter":
        handleToggle(e);
        break;

      case "Escape":
        if (isOpen) {
          e.preventDefault();
          setIsOpen(false);
        }
        break;
    }
  };

  useEffect(() => {
    if (isFocused && questinRef.current) {
      questinRef.current.focus();
    }
  }, [isFocused]);
  return (
    <div className="details">
      <div
        className="summary"
        ref={questinRef}
        tabIndex={isFocused ? 0 : -1}
        onClick={handleToggle}
        onKeyDown={handleKeydown}
        aria-expanded={isOpen}
        role="button"
      >
        <span
          id={question}
          role="heading"
          aria-level={2}
          className="summary-title"
        >
          {question}
        </span>
        <span aria-hidden="true">
          <img
            src={isOpen ? minusIcon : plusIcon}
            alt={isOpen ? "Minus Icon" : "Plus Icon"}
          />
        </span>
      </div>
      {isOpen && (
        <div
          className="details-content"
          role="region"
          aria-labelledby={question}
        >
          <h2 className="visually-hidden">{question}</h2>
          <div className="answer">
            <p>{answer}</p>
          </div>
        </div>
      )}
      {/* <div className="answer">
        <h2 className="visually-hidden">{question}</h2>
        <p>{answer}</p>
      </div> */}
    </div>
  );
}
