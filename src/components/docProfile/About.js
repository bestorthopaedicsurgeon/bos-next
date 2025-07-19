"use client";

export default function About({ className, doctData }) {
  const data = doctData?.doctorProfile;
  return (
    <div className={`rounded-lg bg-white p-6 shadow-md ${className}`}>
      <p className="text-primary mb-6 font-[700]">About doctor</p>

      {/* Introduction Paragraph */}
      <p className="mb-6 text-[14px]">{data?.about}</p>

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
          {data?.qualifications?.map((qualification) => (
            <li key={qualification}>{qualification}</li>
          ))}
        </ul>
      </div>

      <div className="my-6 border-t border-gray-200"></div>

      {/* Awards and Publications Section */}
      <div className="mb-8">
        <h2 className="mb-4 text-[14px] font-[700]">Awards and Publications</h2>
        <ul className="list-disc space-y-4 pl-5 text-[14px]">
          {data?.awardsPublications?.map((award) => (
            <li key={award}>{award}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
