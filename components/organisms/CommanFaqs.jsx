"use client"

import React from 'react';

function CommanFaqs({ item, isActive, onToggle }) {
  if (!item) return null;

  return (
    <div
      className={`faq_item ${isActive ? 'active' : ''}`}
      id={`faq-${item.id}`}
    >
      <button
        className="faq_item_question"
        onClick={() => onToggle(item.id)}
        aria-expanded={isActive}
        aria-controls={`faq-body-${item.id}`}
      >
        <span className="faq_item_text">{item.heading}</span>
        <span className="faq_item_icon" aria-hidden="true">
          {isActive ? '−' : '+'}
        </span>
      </button>

      <div
        id={`faq-body-${item.id}`}
        className={`faq_item_body${isActive ? ' active' : ''}`}
        role="region"
      >
        <p className="faq_item_answer">{item.subheading}</p>
      </div>
    </div>
  );
}

export default CommanFaqs;