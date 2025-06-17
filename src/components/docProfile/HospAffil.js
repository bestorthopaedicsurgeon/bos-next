import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const hospitals = [
    {
        name: 'Apollo Hospital',
        address: '123 Maple Street, Apollo hospital, Springfield, Sydney'
    },
    {
        name: 'Royal Perth Hospital',
        address: '456 Royal Street, Royal Perth Hospital, Springfield, Perth'
    },
    {
        name: 'Melbourne Central Hospital',
        address: '789 Health Ave, Melbourne CBD, Melbourne'
    },
    {
        name: 'Brisbane Medical Center',
        address: '321 Care Blvd, South Brisbane, Brisbane'
    }
];

export default function HospitalAffiliations() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animateDirection, setAnimateDirection] = useState(null);

    // Show 2 hospitals at a time
    const visibleHospitals = hospitals.slice(currentIndex, currentIndex + 2);

    const nextSlide = () => {
        if (currentIndex + 2 < hospitals.length) {
            setAnimateDirection('right');
            setTimeout(() => {
                setCurrentIndex(currentIndex + 1);
                setAnimateDirection(null);
            }, 300);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setAnimateDirection('left');
            setTimeout(() => {
                setCurrentIndex(currentIndex - 1);
                setAnimateDirection(null);
            }, 300);
        }
    };



    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow mt-10">
            <div className='flex items-center justify-between'>


                <h2 className="text-2xl font-bold text-primary">Hospital affiliations</h2>
                <div>
                    {/* Left Arrow */}
                    <button
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className={
                            `p-2 rounded-full ${currentIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'
                            }`
                        }
                        aria-label="Previous hospitals"
                    >
                        {/* <ChevronLeft className="w-6 h-6" /> */}
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.87744 17.5173C4.24882 17.5171 0.496582 13.7642 0.496582 9.1355C0.496825 4.50702 4.24897 0.754881 8.87744 0.754639C13.5061 0.754639 17.259 4.50687 17.2593 9.1355C17.2593 13.7643 13.5063 17.5173 8.87744 17.5173Z" stroke="#006D77" strokeWidth="0.728804" />
                            <path d="M10.295 6.22083L7.41968 9.0467L10.295 11.8726" stroke="#006D77" strokeWidth="0.728804" strokeLinecap="round" />
                        </svg>

                    </button>
                    {/* Right Arrow */}
                    <button
                        onClick={nextSlide}
                        disabled={currentIndex + 2 >= hospitals.length}
                        className={
                            ` p-2 rounded-full ${currentIndex + 2 >= hospitals.length ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'
                            }`
                        }
                        aria-label="Next hospitals"
                    >
                        {/* <ChevronRight className="w-6 h-6" /> */}
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.05298 0.482666C13.6816 0.482909 17.4338 4.23582 17.4338 8.8645C17.4336 13.493 13.6815 17.2451 9.05298 17.2454C4.4243 17.2454 0.671386 13.4931 0.671143 8.8645C0.671143 4.23567 4.42415 0.482666 9.05298 0.482666Z" stroke="#006D77" strokeWidth="0.728804" />
                            <path d="M7.63546 11.7792L10.5107 8.9533L7.63546 6.12742" stroke="#006D77" strokeWidth="0.728804" strokeLinecap="round" />
                        </svg>

                    </button>
                </div>
            </div>
            <div className="relative">


                {/* Hospital Cards */}
                <div className="flex overflow-hidden">
                    {visibleHospitals.map((hospital, index) => (
                        <div
                            key={hospital.name}
                            className={
                                `flex-shrink-0 w-1/2 transition-all duration-300 ease-in-out ${animateDirection === 'right' ? 'translate-x-full opacity-0' : ''
                                } ${animateDirection === 'left' ? '-translate-x-full opacity-0' : ''
                                } ${index === 1 ? 'pl-4' : 'pr-4'
                                }`
                            }
                        >
                            <div className=" py-4 h-full">
                                <h3 className="font-semibold text-lg mb-2 text-[#82889C]">{hospital.name}</h3>
                                <p className="text-gray-600 w-50 text-[15px]">{hospital.address}</p>
                                
                            </div>
                              {/* Vertical separator line - only show between cards */}
      {index === 0 && visibleHospitals.length > 1 && (
        <div className="absolute top-0 right-86 h-full w-px bg-gray-200"></div>
      )}
                           
                        </div>
                    ))}
                    
                </div>


            </div>

        </div>
    );
}