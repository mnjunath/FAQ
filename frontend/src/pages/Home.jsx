import { useEffect, useState } from "react";
import api from "../api/axios";

import FAQCard from "../components/FAQCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

import "../css/home.css";

const Home = () => {
  const [faqs, setFaqs] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchFAQs();
  }, []);

  const fetchFAQs = async () => {
    const res = await api.get("/faqs");
    setFaqs(res.data);

    const uniqueCategories = [
      ...new Set(res.data.map((faq) => faq.category))
    ];
    setCategories(uniqueCategories);
  };

  const searchHandler = async (query) => {
    if (!query) {
      fetchFAQs();
      return;
    }
    const res = await api.get(`/faqs/search?q=${query}`);
    setFaqs(res.data);
  };

  const categoryHandler = async (category) => {
    if (!category) {
      fetchFAQs();
      return;
    }
    const res = await api.get(`/faqs/category/${category}`);
    setFaqs(res.data);
  };

  return (
    <div className="home">
      <div className="home-container fade-in">
        <h2 className="home-title">Frequently Asked Questions</h2>

        <div className="home-filters">
          <SearchBar onSearch={searchHandler} />
          <CategoryFilter
            categories={categories}
            onSelect={categoryHandler}
          />
        </div>

        {faqs.length === 0 && (
          <p className="home-empty">No FAQs found</p>
        )}

        <div className="faq-list">
          {faqs.map((faq) => (
            <FAQCard key={faq._id} faq={faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
