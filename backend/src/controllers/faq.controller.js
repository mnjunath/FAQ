import {
  getAllFAQs,
  searchFAQs,
  getFAQsByCategory,
  createFAQ,
  updateFAQ,
  deleteFAQ
} from "../services/faq.service.js";

export const getFAQsController = async (req, res) => {
  const faqs = await getAllFAQs();
  res.json(faqs);
};

export const searchFAQsController = async (req, res) => {
  const results = await searchFAQs(req.query.q);
  res.json(results);
};

export const getByCategoryController = async (req, res) => {
  const faqs = await getFAQsByCategory(req.params.category);
  res.json(faqs);
};

export const createFAQController = async (req, res) => {
  const faq = await createFAQ(req.body);
  res.status(201).json(faq);
};

export const updateFAQController = async (req, res) => {
  const faq = await updateFAQ(req.params.id, req.body);
  res.json(faq);
};

export const deleteFAQController = async (req, res) => {
  await deleteFAQ(req.params.id);
  res.json({ message: "FAQ deleted" });
};
