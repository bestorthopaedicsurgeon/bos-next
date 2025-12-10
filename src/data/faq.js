export const faqData = {
  pageTitle: "Frequently Asked Questions",
  breadcrumb: "Home > FAQs",
  
  header: {
    subtitle: "Got Questions? We've Got Answers",
    description: "Find answers to the most common questions about our orthopaedic surgeon directory, ratings, reviews, and more."
  },

  // FAQs to show on home page (first 5-6 most important ones)
  featuredFaqs: [
    {
      id: 1,
      question: "How does the rating system work?",
      answer: "Our rating system is based on verified patient reviews, clinical experience metrics, communication quality, and overall patient satisfaction. Each review is screened for authenticity, and ratings are weighted to reflect genuine patient experiences. Surgeons cannot alter or influence their ratings."
    },
    {
      id: 2,
      question: "Are all orthopaedic surgeons in WA included?",
      answer: "We aim for full coverage. Most surgeons practising in Western Australia are listed. Surgeons can also request to claim, update, or enhance their profiles to ensure accuracy. If you notice a surgeon missing, you can submit a request, and we will verify and add them within 72 hours."
    },
    {
      id: 3,
      question: "Are the reviews verified?",
      answer: "Yes. We use a strict review verification process, including email validation and fraud detection, to ensure authenticity. Reviews are monitored for inappropriate, misleading, or abusive content."
    },
    {
      id: 4,
      question: "Is the directory free to use?",
      answer: "Yes. The directory is completely free for patients and the general public. Surgeons may choose optional paid enhancements for additional profile features, but this does not affect ratings or listing visibility."
    },
    {
      id: 5,
      question: "Does this website provide medical advice?",
      answer: "No. We do not offer medical or clinical advice. Our directory is an information and navigation tool only. All treatment decisions should be made in consultation with a qualified healthcare professional."
    }
  ],

  // All FAQs for the FAQ page
  allFaqs: [
    {
      id: 1,
      question: "How does the rating system work?",
      answer: "Our rating system is based on verified patient reviews, clinical experience metrics, communication quality, and overall patient satisfaction. Each review is screened for authenticity, and ratings are weighted to reflect genuine patient experiences. Surgeons cannot alter or influence their ratings.",
      category: "Ratings & Reviews"
    },
    {
      id: 2,
      question: "Are all orthopaedic surgeons in WA included?",
      answer: "We aim for full coverage. Most surgeons practising in Western Australia are listed. Surgeons can also request to claim, update, or enhance their profiles to ensure accuracy. If you notice a surgeon missing, you can submit a request, and we will verify and add them within 72 hours.",
      category: "Directory"
    },
    {
      id: 3,
      question: "How do I choose the right orthopaedic surgeon?",
      answer: "When selecting a surgeon, consider their subspecialty (e.g., knee, foot & ankle, hip, shoulder, hand, spine), location and hospital affiliations, waiting times, surgeon experience and fellowship training, patient reviews, and communication style. Our platform helps filter these factors to simplify your decision.",
      category: "Getting Started"
    },
    {
      id: 4,
      question: "Does this website provide medical advice?",
      answer: "No. We do not offer medical or clinical advice. Our directory is an information and navigation tool only. All treatment decisions should be made in consultation with a qualified healthcare professional.",
      category: "General"
    },
    {
      id: 5,
      question: "Are the reviews verified?",
      answer: "Yes. We use a strict review verification process, including email validation and fraud detection, to ensure authenticity. Reviews are monitored for inappropriate, misleading, or abusive content.",
      category: "Ratings & Reviews"
    },
    {
      id: 6,
      question: "Is the directory free to use?",
      answer: "Yes. The directory is completely free for patients and the general public. Surgeons may choose optional paid enhancements for additional profile features, but this does not affect ratings or listing visibility.",
      category: "General"
    },
    {
      id: 7,
      question: "What subspecialties are included?",
      answer: "Our directory covers all orthopaedic subspecialties, including Hip & Knee, Foot & Ankle, Shoulder & Elbow, Hand & Wrist, Spine, Sports Orthopaedics, Trauma Surgery, Paediatrics, and Orthopaedic Oncology. Each profile clearly displays the surgeon's areas of expertise.",
      category: "Directory"
    },
    {
      id: 8,
      question: "Can GPs use this directory for referrals?",
      answer: "Absolutely. Many GPs use our platform to identify the most appropriate specialist for their patient's condition based on subspecialty focus, urgency, wait times, and geographical convenience.",
      category: "For Healthcare Professionals"
    },
    {
      id: 9,
      question: "How do you keep information up to date?",
      answer: "We update public information weekly and allow surgeons and clinics to update their details directly. Users can also submit corrections, which are reviewed and applied promptly.",
      category: "Directory"
    },
    {
      id: 10,
      question: "Is my personal information secure?",
      answer: "Yes. We comply with Australian privacy laws (Privacy Act 1988) and use encrypted data handling. We do not share your data with third parties without consent.",
      category: "Privacy & Security"
    },
    {
      id: 11,
      question: "How do I leave a review?",
      answer: "After your appointment or surgery, simply visit the surgeon's profile and click \"Leave Review.\" You will be asked to verify your email to ensure authenticity.",
      category: "Ratings & Reviews"
    },
    {
      id: 12,
      question: "Can surgeons respond to reviews?",
      answer: "Yes. Surgeons or clinic staff may respond to reviews professionally. All responses are monitored to maintain respectful communication.",
      category: "Ratings & Reviews"
    },
    {
      id: 13,
      question: "What if I had a negative experience?",
      answer: "You can submit an honest review. However, defamatory or unsubstantiated claims may be moderated according to Australian defamation standards. Our moderation team ensures fairness for both patients and clinicians.",
      category: "Ratings & Reviews"
    },
    {
      id: 14,
      question: "What geographic areas are covered?",
      answer: "We cover the entire Western Australia region, including Perth Metro, South West (Bunbury, Busselton, Margaret River), Pilbara, Kimberley, Wheatbelt, Goldfields, and Great Southern. Regional accessibility and telehealth availability are included in each surgeon's profile.",
      category: "Directory"
    },
    {
      id: 15,
      question: "Who operates this directory?",
      answer: "The directory is operated by an independent team dedicated to improving patient access to orthopaedic care in Western Australia. We have no affiliation with particular clinics or hospital groups.",
      category: "General"
    },
    {
      id: 16,
      question: "How are surgeons verified?",
      answer: "We verify AHPRA registration, subspecialty training, and publicly available professional information.",
      category: "For Surgeons"
    },
    {
      id: 17,
      question: "Are reviews moderated?",
      answer: "Yes. We remove defamatory, abusive, or unconstructive comments to maintain fairness.",
      category: "Ratings & Reviews"
    },
    {
      id: 18,
      question: "Do I need a GP referral to see an orthopaedic surgeon?",
      answer: "Yes, Medicare rebates require a valid GP referral.",
      category: "Getting Started"
    },
    {
      id: 19,
      question: "Are outcomes guaranteed?",
      answer: "No directory can guarantee individual outcomes. Always follow medical advice and consult directly with your surgeon.",
      category: "General"
    }
  ],

  // Categories for filtering
  categories: [
    "All",
    "Getting Started",
    "Ratings & Reviews",
    "Directory",
    "For Surgeons",
    "For Healthcare Professionals",
    "Privacy & Security",
    "General"
  ]
};

