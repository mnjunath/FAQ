import FAQ from "../models/faq.model.js";

export const getAllFAQs = async () => {
  return FAQ.find();
};

export const searchFAQs = async (query) => {
  return FAQ.find({ $text: { $search: query } });
};

export const getFAQsByCategory = async (category) => {
  return FAQ.find({ category });
};

export const createFAQ = async (data) => {
  return FAQ.create(data);
};

export const updateFAQ = async (id, data) => {
  return FAQ.findByIdAndUpdate(id, data, { new: true });
};

export const deleteFAQ = async (id) => {
  return FAQ.findByIdAndDelete(id);
};
