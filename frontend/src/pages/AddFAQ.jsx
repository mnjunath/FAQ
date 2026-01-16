import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

import "../css/addFaq.css";

const AddFAQ = () => {
  const navigate = useNavigate();

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    await api.post("/faqs", {
      question,
      answer,
      category
    });

    navigate("/admin/dashboard");
  };

  return (
    <div className="add-faq">
      <div className="add-faq-card fade-in">
        <h2 className="add-faq-title">Add New FAQ</h2>

        <form onSubmit={submitHandler} className="add-faq-form">
          <input
            type="text"
            placeholder="Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
            aria-label="FAQ question"
          />

          <textarea
            placeholder="Answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
            aria-label="FAQ answer"
            rows="4"
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            aria-label="FAQ category"
          />

          <button type="submit" className="add-faq-btn">
            Save FAQ
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFAQ;
