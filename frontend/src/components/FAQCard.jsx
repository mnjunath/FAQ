import "../css/faqCard.css";

const FAQCard = ({ faq }) => {
  return (
    <div className="faq-card card-hover fade-in">
      <h4 className="faq-question">{faq.question}</h4>
      <p className="faq-answer">{faq.answer}</p>
      <span className="faq-category">{faq.category}</span>
    </div>
  );
};

export default FAQCard;
