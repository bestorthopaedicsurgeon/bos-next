import React from "react";
import { privacyPolicyData } from "@/data/privacyPolicy";

const PrivacyPolicyPage = () => {
  const { pageTitle, breadcrumb, header, sections, contactEmail, websiteUrl } = privacyPolicyData;

  return (
    <div className="container">
      {/* Header Section */}
      <div className="profile_head mb-10">
        <h1 className="text-white text-center">{pageTitle}</h1>
        <p className="text-white/90 text-center">{breadcrumb}</p>
      </div>

      {/* Content Section */}
      <div className="mt-20 mx-auto pb-16">
        {/* Privacy Policy Introduction */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <div className="text-center mb-8">
            <span className="inline-block bg-[#217B7E]/10 text-[#217B7E] px-4 py-2 rounded-full text-sm font-medium mb-4">
              {header.badge}
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
            {/* Intro text */}
            {section.intro && (
              <p className="text-gray-700 mb-4">{section.intro}</p>
            )}

            {/* Subsections (for section 1) */}
            {section.subsections && section.subsections.map((subsection, idx) => (
              <SubSection key={idx} title={subsection.title}>
                <BulletList items={subsection.items} />
              </SubSection>
            ))}

            {/* Simple bullet list */}
            {section.items && !section.subsections && (
              <BulletList items={section.items} />
            )}

            {/* Paragraphs */}
            {section.paragraphs && section.paragraphs.map((text, idx) => (
              <p key={idx} className={`text-gray-700 ${idx < section.paragraphs.length - 1 ? 'mb-2' : ''}`}>
                {text}
              </p>
            ))}

            {/* Secondary intro and items (for section 8) */}
            {section.secondaryIntro && (
              <>
                <p className="text-gray-700 mt-4 mb-2">{section.secondaryIntro}</p>
                <BulletList items={section.secondaryItems} />
              </>
            )}

            {/* Contact box (for section 7) */}
            {section.contactBox && (
              <div className="bg-[#217B7E]/5 border border-[#217B7E]/20 p-4 rounded-lg mt-4">
                <p className="text-gray-700 text-sm">
                  <strong>{section.contactBox.label}</strong>{" "}
                  <a href={`mailto:${contactEmail}`} className="text-[#217B7E] hover:underline">
                    {contactEmail}
                  </a>
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  {section.contactBox.note}
                </p>
              </div>
            )}

            {/* Show contact email (for section 12) */}
            {section.showContactEmail && (
              <div className="bg-[#217B7E]/5 border border-[#217B7E]/20 p-4 rounded-lg">
                <a href={`mailto:${contactEmail}`} className="text-[#217B7E] hover:underline font-medium">
                  {contactEmail}
                </a>
              </div>
            )}

            {/* Full contact info (for section 14) */}
            {section.showFullContact && (
              <div className="bg-[#217B7E]/5 border border-[#217B7E]/20 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Website:</strong>{" "}
                  <a href={`https://${websiteUrl}`} className="text-[#217B7E] hover:underline">
                    {websiteUrl}
                  </a>
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${contactEmail}`} className="text-[#217B7E] hover:underline">
                    {contactEmail}
                  </a>
                </p>
              </div>
            )}

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

        {/* Divider */}
        <div className="border-t-2 border-gray-200 my-12"></div>
      </div>
    </div>
  );
};

// Reusable Components
const PolicySection = ({ number, title, children, variant = "policy" }) => {
  const bgColor = variant === "disclaimer" ? "bg-gray-50" : "bg-white";
  return (
    <div className={`${bgColor} rounded-2xl shadow-sm border border-gray-100 p-8 mb-6`}>
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

const SubSection = ({ title, children }) => {
  return (
    <div className="mb-4">
      <h4 className="text-lg font-semibold text-gray-700 mb-2">{title}</h4>
      {children}
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
    info: "bg-[#217B7E]/5 border border-[#217B7E]/20 text-gray-700"
  };

  return (
    <div className={`${styles[type] || styles.info} p-4 rounded-r-lg mt-4`}>
      <p className="text-sm font-medium">
        {type === "warning" && <strong>Note: </strong>}
        {text}
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
