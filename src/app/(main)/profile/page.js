import React from "react";
import PatientInfo from "@/components/patientProfile/PatientInfo";
import PersonalInfo from "@/components/patientProfile/PersonalInfo";
import GeneralSettings from "@/components/patientProfile/GeneralSettings";
import PatientRating from "@/components/patientProfile/PatientRating";
import PatientAppointments from "@/components/patientProfile/PatientAppointments";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Page = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login");
  }

  if (session.user.role !== "PATIENT") {
    redirect("/");
  }

  let userData = null;
  try {
    const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/users/me`, {
      headers: await headers(),
      cache: "no-store",
    });

    if (res.ok) {
      const data = await res.json();
      userData = data.data;
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
  }

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Banner Section */}
      <div className="bg-[#2F797B] py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-syne mb-4">Your Profile</h1>
          <nav className="flex items-center justify-center gap-2 text-white/80 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Profile</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column (Main) */}
          <div className="lg:col-span-2 space-y-8">
            <PatientInfo user={userData?.user || session.user} />
            <PersonalInfo user={userData?.user || session.user} />
            {/* <PatientAppointments /> */}
            <GeneralSettings />
            <PatientRating 
              reviews={userData?.reviews || []} 
              questions={userData?.questions || []}
            />
          </div>

          {/* Right Column (Sidebar) */}
          <div className="space-y-8">
            {/* Recent Question Card */}
            {userData?.questions && userData.questions.length > 0 ? (
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                <h2 className="text-xl font-bold text-[#232323] mb-2 font-syne">Recent Question</h2>
                <p className="text-[#2F797B] text-xs font-semibold mb-6">Your question has been answered!</p>
                
                <div className="space-y-4">
                  {userData.questions.slice(0, 1).map((q) => (
                    <div key={q.id} className="space-y-4">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <h3 className="text-sm font-bold text-[#232323] mb-2 leading-tight line-clamp-2">
                          Q. {q.content}
                        </h3>
                        {q.answers && q.answers.length > 0 && (
                          <div className="flex items-center gap-2 mt-4">
                            <div className="h-6 w-6 rounded-full bg-gray-200 border border-white relative overflow-hidden">
                              {q.answers[0].author?.image && (
                                <img src={q.answers[0].author.image} alt={q.answers[0].author.name} className="object-cover fill" />
                              )}
                            </div>
                            <span className="text-[11px] font-bold text-[#2F797B]">
                              {q.answers[0].author?.name || "Doctor"} answered
                            </span>
                          </div>
                        )}
                      </div>

                      {q.answers && q.answers.length > 0 && (
                        <div className="pt-4 border-t border-gray-100">
                          <p className="text-xs text-gray-500 italic mb-4">"{q.answers[0].content}"</p>
                          <div className="flex items-center justify-between text-gray-400">
                            <div className="flex items-center gap-1">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 10v12M15 10v12M11 10v12M2 10h20M2 21a2 2 0 002 2h16a2 2 0 002-2V10H2v11z"/></svg>
                              <span className="text-[10px]">Was this helpful?</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm text-center">
                <p className="text-gray-400 text-sm">No recent questions found.</p>
                <Link href="/doctors" className="text-[#2F797B] text-xs font-bold hover:underline mt-2 inline-block">
                  Ask a Doctor
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
