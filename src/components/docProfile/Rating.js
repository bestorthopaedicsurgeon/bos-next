'use client';
import React, { useEffect, useState } from "react";
import { docProfile_Details } from "@/data/doctorProfile";
import { Star } from "lucide-react";
import Image from "next/image";
import { fetchDoctorReviews } from "@/lib/apiCalls/client/doctor";
import { toast } from "sonner";
const Rating = ({ className, doctorId }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  // const [reviews, setReviews] = useState([]);
  // const [averageRatings, setAverageRatings] = useState({
  //   professionalism: 0,
  //   punctuality: 0,
  //   helpfulness: 0,
  //   knowledge: 0,
  //   overall: 0
  // });

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const data = await fetchDoctorReviews(doctorId);
        console.log(data);
        setData(data);
        // setReviews(data.reviews);
        // setAverageRatings(data.averageRatings);
      } catch (error) {
        console.error('Error loading reviews:', error);
        toast.error(error.message || 'Failed to load reviews');
      } finally {
        setLoading(false);
      }
    };

    if (doctorId) {
      loadReviews();
    }
  }, []);


  return (
    <div className={`rounded-lg bg-white p-10 ${className}`}>
      <div className="mb-3 flex items-center justify-between">
        <h5 className="text-primary font-[700]">
          Reviews & Ratings{" "}
          <span className="font-[500]"> ({data.totalReviews}) </span>{" "}
        </h5>
        <svg
          width="3"
          height="18"
          viewBox="0 0 3 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.75422 9C2.75422 9.24105 2.68076 9.47668 2.54311 9.6771C2.40547 9.87752 2.20983 10.0337 1.98094 10.126C1.75204 10.2182 1.50017 10.2424 1.25718 10.1953C1.01419 10.1483 0.790986 10.0322 0.615798 9.86179C0.44061 9.69134 0.321306 9.47418 0.272971 9.23777C0.224637 9.00135 0.249444 8.7563 0.344255 8.53361C0.439066 8.31091 0.599623 8.12056 0.805622 7.98665C1.01162 7.85273 1.25381 7.78125 1.50156 7.78125C1.83379 7.78125 2.15241 7.90965 2.38733 8.13821C2.62225 8.36677 2.75422 8.67677 2.75422 9ZM1.50156 3.3125C1.74932 3.3125 1.99151 3.24102 2.1975 3.1071C2.4035 2.97319 2.56406 2.78284 2.65887 2.56015C2.75368 2.33745 2.77849 2.0924 2.73015 1.85598C2.68182 1.61957 2.56252 1.40241 2.38733 1.23196C2.21214 1.06152 1.98894 0.945444 1.74594 0.898418C1.50295 0.851393 1.25108 0.875528 1.02219 0.967772C0.793297 1.06002 0.597657 1.21623 0.460013 1.41665C0.322369 1.61707 0.248902 1.8527 0.248902 2.09375C0.248902 2.41698 0.380878 2.72698 0.615798 2.95554C0.850717 3.1841 1.16934 3.3125 1.50156 3.3125ZM1.50156 14.6875C1.25381 14.6875 1.01162 14.759 0.805622 14.8929C0.599623 15.0268 0.439066 15.2172 0.344255 15.4399C0.249444 15.6626 0.224637 15.9076 0.272971 16.144C0.321306 16.3804 0.44061 16.5976 0.615798 16.768C0.790986 16.9385 1.01419 17.0546 1.25718 17.1016C1.50017 17.1486 1.75204 17.1245 1.98094 17.0322C2.20983 16.94 2.40547 16.7838 2.54311 16.5834C2.68076 16.3829 2.75422 16.1473 2.75422 15.9062C2.75422 15.583 2.62225 15.273 2.38733 15.0445C2.15241 14.8159 1.83379 14.6875 1.50156 14.6875Z"
            fill="#232323"
          />
        </svg>
      </div>
      <div>
        {data.reviews?.map((data, key) => (
          <div key={key} className="mt-10 border-t-2 border-[#BDC6C6]">
            <div className="flex items-center gap-2 pt-5">
              <Image
                src={data.user.image}
                height={30}
                width={30}
                className="h-7 w-7 rounded-full border-[1px] border-[#737373]"
                alt="user profile picture"
                loading="lazy"
              />
              <p className="text-[14px] font-[600] text-[#737373]">
                {data.user.name} -  {new Date(data.createdAt).toLocaleDateString("en-AU", { year: "numeric", month: "2-digit", day: "2-digit" })}
              </p>
            </div>
            <div className="flex items-start justify-between gap-2 max-md:mt-5 max-md:flex-col-reverse">
              <div>
                {/* <p className="text-primary my-2 font-[600]">
                  Satisfied with the doctor
                </p> */}
                <p className="max-w-[425px] p-3 text-[14px] font-[500]">
                  {data.review}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 1L11.5 6L17 6.75L13 10.75L14 16L9 13.5L4 16L5 10.75L1 6.75L6.5 6L9 1Z"
                        fill={star <= Math.round(data.averageRating) ? "#F3CD03" : "#E2E8F0"}
                        stroke={star <= Math.round(data.averageRating) ? "#F3CD03" : "#E2E8F0"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ))}
                  <p className="text-[14px] font-[600] ml-1">{data.averageRating}</p>
                </div>
                <ul className="text-primary">
                  <li>Professionalism:{data.professionalism}/5</li>
                  <li>Punctuality: {data.punctuality}/5</li>
                  <li>Helpfulness: {data.helpfulness}/5</li>
                  <li>Knowledge: {data.knowledge}/5</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rating;
