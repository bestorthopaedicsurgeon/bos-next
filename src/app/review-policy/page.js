import React from "react";
import { reviewPolicyData } from "@/data/reviewPolicy";

const ReviewPolicyPage = () => {
  const { pageTitle, breadcrumb, header, sections, contactEmail } = reviewPolicyData;

  return (
    <div className="container">
      {/* Header Section */}
      <div className="profile_head mb-10">
        <h1 className="text-white text-center">{pageTitle}</h1>
        <p className="text-white/90 text-center">{breadcrumb}</p>
      </div>

      {/* Content Section */}
      <div className="mt-20 mx-auto pb-16">
        {/* Review Policy Introduction */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <div className="text-center mb-8">
            <span className="inline-block bg-[#217B7E]/10 text-[#217B7E] px-4 py-2 rounded-full text-sm font-medium mb-4">
              Fairness • Transparency • Accuracy
            </span>
            <p className="text-gray-500 text-sm">Last Updated: {header.lastUpdated}</p>
          </div>
          
          {header.intro.map((text, index) => (
            <p key={index} className={`text-gray-700 leading-relaxed ${index < header.intro.length - 1 ? 'mb-6' : ''}`}>
              {text}
            </p>
          ))}
        </div>

        {/* Dynamic Sections */}
        {sections.map((section) => (
          <PolicySection 
            key={section.number} 
            number={section.number} 
            title={section.title}
          >
            {/* Paragraphs before intro */}
            {section.paragraphs && section.intro && section.paragraphs.map((text, idx) => (
              <p key={idx} className="text-gray-700 mb-4">
                {text}
              </p>
            ))}

            {/* Intro text */}
            {section.intro && (
              <p className="text-gray-700 mb-4">{section.intro}</p>
            )}

            {/* Show contact email (for section 10) */}
            {section.showContactEmail && (
              <div className="bg-[#217B7E]/5 border border-[#217B7E]/20 p-4 rounded-lg mb-4">
                <a href={`mailto:${contactEmail}`} className="text-[#217B7E] hover:underline font-medium">
                  {contactEmail}
                </a>
              </div>
            )}

            {/* Simple bullet list */}
            {section.items && (
              <BulletList items={section.items} />
            )}

            {/* Two column lists (for section 9) */}
            {section.twoColumnLists && (
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">✕</span>
                    {section.twoColumnLists.doNot.title}
                  </h4>
                  <ul className="space-y-2">
                    {section.twoColumnLists.doNot.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-red-700 text-sm">
                        <span className="text-red-400 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">✓</span>
                    {section.twoColumnLists.doList.title}
                  </h4>
                  <ul className="space-y-2">
                    {section.twoColumnLists.doList.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-green-700 text-sm">
                        <span className="text-green-400 mt-0.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Paragraphs (when no intro) */}
            {section.paragraphs && !section.intro && section.paragraphs.map((text, idx) => (
              <p key={idx} className={`text-gray-700 ${idx < section.paragraphs.length - 1 ? 'mb-2' : ''}`}>
                {text}
              </p>
            ))}

            {/* Notes/Alerts */}
            {section.note && (
              <NoteBox type={section.note.type} text={section.note.text} />
            )}

            {/* Footer text */}
            {section.footer && (
              <p className="text-gray-600 mt-4 italic text-sm">
                {section.footer}
              </p>
            )}
          </PolicySection>
        ))}
      </div>
    </div>
  );
};

// Reusable Components
const PolicySection = ({ number, title, children }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-6">
      <div className="flex items-start gap-4 mb-4">
        <span className="flex-shrink-0 w-10 h-10 bg-[#217B7E] text-white rounded-full flex items-center justify-center font-bold text-lg">
          {number}
        </span>
        <h3 className="text-xl font-bold text-gray-800 pt-1">{title}</h3>
      </div>
      <div className="ml-14">
        {children}
      </div>
    </div>
  );
};

const BulletList = ({ items }) => {
  return (
    <ul className="space-y-2 text-gray-700">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="flex-shrink-0 w-2 h-2 bg-[#217B7E] rounded-full mt-2"></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

const NoteBox = ({ type, text }) => {
  const styles = {
    warning: "bg-amber-50 border-l-4 border-amber-400 text-amber-800",
    success: "bg-green-50 border-l-4 border-green-500 text-green-800",
    danger: "bg-red-50 border-l-4 border-red-500 text-red-800",
    info: "bg-[#217B7E]/5 border-l-4 border-[#217B7E] text-gray-700"
  };

  return (
    <div className={`${styles[type] || styles.info} p-4 rounded-r-lg mt-4`}>
      <p className="text-sm font-medium">
        {text}
      </p>
    </div>
  );
};

export default ReviewPolicyPage;

