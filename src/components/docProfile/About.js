"use client";

export default function About({ className }) {
  return (
    <div className={`rounded-lg bg-white p-6 shadow-md ${className}`}>
      <p className="text-primary mb-6 font-[700]">About doctor</p>

      {/* Introduction Paragraph */}
      <p className="mb-6 text-[14px]">
        A career as a doctor is a clinical professional that involves providing
        services in healthcare facilities. Individuals in the doctor's career
        path are responsible for diagnosing, examining, and identifying
        diseases, disorders, and illnesses of patients. A career as a doctor is
        a clinical professional that involves providing services in healthcare
        facilities.
      </p>

      <div className="my-6 border-t border-gray-200"></div>

      {/* Special Interests Section */}
      <div className="mb-8">
        <h2 className="mb-4 text-[14px] font-[700]">Special interests</h2>
        <p className="text-[14px]">
          Total Hip Replacements (Including Anterior Approach), Robotic Total
          and Partial Krise Replacements, ACL Reconstructions, Krise
          Arthroscopy, Orthopaedic Oncology Surgery, Patella Stabilisation and
          re-alignment surgery, Revision Arthroplasty, Trauma services, Sports
          Knee; ACL Reconstruction. I am a No-Gap provider for all private
          health funds, and welcome WC and ICWA claims.
        </p>
      </div>

      <div className="my-6 border-t border-gray-200"></div>

      {/* Qualifications Section */}
      <div className="mb-8">
        <h2 className="mb-4 text-[14px] font-[700]">Qualifications</h2>
        <ul className="list-disc space-y-2 pl-5 text-[14px]">
          <li>Fellowship Royal Australian College of Surgeons</li>
          <li>Bachelor of Medicine, Bachelor of Surgery (Honours)</li>
          <li>University of Notre Dame Australia, Fremantle</li>
          <li>Masters of Health Science</li>
          <li>University of Sydney, Cumberland.</li>
          <li>Bachelor of Information Technology</li>
          <li>Charles Sturt University</li>
          <li>Bachelor of Applied Science (Medical Imaging)</li>
          <li>Charles Sturt University</li>
        </ul>
      </div>

      <div className="my-6 border-t border-gray-200"></div>

      {/* Awards and Publications Section */}
      <div className="mb-8">
        <h2 className="mb-4 text-[14px] font-[700]">Awards and Publications</h2>
        <ul className="list-disc space-y-4 pl-5 text-[14px]">
          <li>
            "Do different screw combinations reduce the incidence of
            peri-prosthetic fractures in osteoporotic bone?" – Presented at
            Australian Orthopedic Association Annual Scientific Meeting,
            Brisbane, 2019
          </li>
          <li>
            "Up to date surgical treatment of neck of femur fractures" –
            Scientific congress of the Australian Society of Anesthetists, Perth
            2015
          </li>
          <li>
            "Alignment of Total Krise Arthroplasty using patient matched
            instrumentation vs computer assisted surgery" – Presented at
            Australian Orthopedic Association Annual Scientific Meeting,
            Melbourne, 2014
          </li>
          <li>
            "Alignment of Total Krise Arthroplasty using patient matched
            instrumentation vs computer assisted surgery" – Presented at EFORT
            Istanbul 2013
          </li>
          <li>
            Clark R, Hird K, Misur P, Ramsay D, Mendelson R. "CT grading scales
            for splenic injury: why can't we agree? J Med Imaging. 2011, Apr.
            5:6(2): 16309
          </li>
          <li>
            "Grading of splenic injury using CT – Inter-observer reliability"
            Presented at College of Radiologist Annual Scientific meeting,
            Brisbane, 2009
          </li>
          <li>
            Masters Thesis: "Reducing intravenous contract agent for chest
            computerized tomography" University of Sydney 2005
          </li>
        </ul>
      </div>
    </div>
  );
}
