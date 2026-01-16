import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

import "../css/adminDashboard.css";

const AdminDashboard = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetchFAQs();
  }, []);

  const fetchFAQs = async () => {
    const res = await api.get("/faqs");
    setFaqs(res.data);
  };

  const deleteHandler = async (id) => {
    if (!confirm("Delete this FAQ?")) return;

    await api.delete(`/faqs/${id}`);
    fetchFAQs();
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-dashboard-container fade-in">
        <div className="admin-dashboard-header">
          <h2 className="admin-dashboard-title">Admin Dashboard</h2>

          <Link to="/admin/add">
            <button className="add-faq-btn">Add FAQ</button>
          </Link>
        </div>

        {faqs.length === 0 && (
          <p className="admin-empty">No FAQs found</p>
        )}

        <div className="admin-faq-list">
          {faqs.map((faq) => (
            <div key={faq._id} className="admin-faq-card card-hover">
              <h4 className="admin-faq-question">
                {faq.question}
              </h4>
              <p className="admin-faq-answer">{faq.answer}</p>
              <span className="admin-faq-category">
                {faq.category}
              </span>

              <div className="admin-faq-actions">
                <Link to={`/admin/edit/${faq._id}`}>
                  <button className="edit-btn">Edit</button>
                </Link>
                <button
                  className="delete-btn"
                  onClick={() => deleteHandler(faq._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
