import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/axios";

import "../css/editFaq.css";

const EditFAQ = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetchFAQ();
  }, []);

  const fetchFAQ = async () => {
    const res = await api.get("/faqs");
    const faq = res.data.find((f) => f._id === id);

    if (!faq) return;

    setQuestion(faq.question);
    setAnswer(faq.answer);
    setCategory(faq.category);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    await api.put(`/faqs/${id}`, {
      question,
      answer,
      category
    });

    navigate("/admin/dashboard");
  };

  return (
    <div className="edit-faq">
      <div className="edit-faq-card fade-in">
        <h2 className="edit-faq-title">Edit FAQ</h2>

        <form onSubmit={submitHandler} className="edit-faq-form">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
            aria-label="FAQ question"
          />

          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
            rows="4"
            aria-label="FAQ answer"
          />

          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            aria-label="FAQ category"
          />

          <button type="submit" className="edit-faq-btn">
            Update FAQ
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditFAQ;
