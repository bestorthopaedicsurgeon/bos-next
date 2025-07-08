'use client';
import { useState, useEffect } from "react";
import { Edit, ChevronLeft, ChevronRight, Save, Check } from "lucide-react";
import { usePathname } from "next/navigation";

export default function AvailabilityCalendar({ className }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isEditing, setIsEditing] = useState(false);
  const [availability, setAvailability] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Detect current route
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";
  // const pathname = usePathname ? usePathname() : "";
  const isDocRegistration = pathname.includes("/doctor_registration");

  // Get month and year
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();
  const monthKey = `${currentDate.getFullYear()}-${currentDate.getMonth()}`;

  // Load data from localStorage on initial render
  useEffect(() => {
    const loadAvailability = async () => {
      try {
        // Simulate API call for backend data
        const backendData = await fetchAvailabilityFromAPI();

        // Load user selections from localStorage
        const savedData =
          JSON.parse(localStorage.getItem("availability")) || {};

        // Merge backend data with user selections (user selections take precedence)
        setAvailability({
          ...backendData,
          ...savedData,
        });
      } catch (error) {
        console.error("Error loading availability:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadAvailability();
  }, []);

  // Mock API function - replace with actual API call
  const fetchAvailabilityFromAPI = async () => {
    // This would be your actual API call in production
    // const response = await fetch('/api/availability');
    // return await response.json();

    // Mock data - days 5, 10, 15 are available
    return {
      [monthKey]: {
        5: true,
        10: true,
        15: true,
      },
    };
  };

  // Save to localStorage whenever availability changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("availability", JSON.stringify(availability));
    }
  }, [availability, isLoading]);

  // Generate calendar days
  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const prevMonthDays = firstDay.getDay();
    const nextMonthDays = 6 - lastDay.getDay();

    const days = [];

    // Previous month days
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = prevMonthDays - 1; i >= 0; i--) {
      days.push({
        date: prevMonthLastDay - i,
        currentMonth: false,
        disabled: true,
      });
    }

    // Current month days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push({
        date: i,
        currentMonth: true,
        disabled: false,
      });
    }

    // Next month days
    for (let i = 1; i <= nextMonthDays; i++) {
      days.push({
        date: i,
        currentMonth: false,
        disabled: true,
      });
    }

    return days;
  };

  const days = getDaysInMonth();
  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  const toggleAvailability = (date) => {
    if (isEditing && date.currentMonth) {
      setAvailability((prev) => {
        const monthAvailability = prev[monthKey] || {};
        const updated = {
          ...prev,
          [monthKey]: {
            ...monthAvailability,
            [date.date]: !monthAvailability[date.date],
          },
        };
        return updated;
      });
    }
  };

  const changeMonth = (increment) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + increment);
    setCurrentDate(newDate);
  };

  const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

  // Get availability for current month
  const currentMonthAvailability = availability[monthKey] || {};

  if (isLoading) {
    return <div className="mx-auto max-w-md p-4 text-center">Loading...</div>;
  }

  return (
    <div
      className={`border-primary h-[350px] max-w-full rounded-lg border-2 p-2 min-md:h-[450px] min-md:p-4 ${className}`}
    >
      {isDocRegistration && (
        <div className="mb-4 flex items-center justify-center gap-3">
          <h2 className="text-primary text-xl font-semibold">Availability</h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`rounded-full p-1 ${isEditing ? "bg-gray-200" : ""}`}
            aria-label={isEditing ? "Stop editing" : "Edit availability"}
          >
            {!isEditing ? (
              <Edit className="text-primary h-5 w-5 hover:text-gray-800" />
            ) : (
              <Check className="text-primary h-5 w-5 hover:text-gray-800" />
            )}
          </button>
        </div>
      )}

      <div className="mb-4 flex items-center justify-center gap-2">
        <button
          onClick={() => changeMonth(-1)}
          className="bg-primary rounded-full p-1 hover:cursor-pointer"
          aria-label="Previous month"
        >
          <ChevronLeft className="text-secondary h-5 w-5" />
        </button>
        <p className="w-full text-center font-medium text-gray-700 min-lg:w-50">
          {month} {year}
        </p>
        <button
          onClick={() => changeMonth(1)}
          className="bg-primary rounded-full p-1 hover:cursor-pointer"
          aria-label="Next month"
        >
          <ChevronRight className="text-secondary h-5 w-5" />
        </button>
      </div>

      <div className="mb-2 grid grid-cols-7 gap-1">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="py-1 text-center text-[11px] font-medium text-gray-500 min-md:text-sm"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 min-md:gap-2">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="contents">
            {week.map((day, dayIndex) => {
              const isAvailable = currentMonthAvailability[day.date];
              const isFromAPI =
                day.currentMonth &&
                isAvailable &&
                !localStorage
                  .getItem("availability")
                  ?.includes(`"${day.date}":true`);

              return (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  onClick={() => toggleAvailability(day)}
                  className={`cursor-pointer rounded-full py-1 text-center text-[#A6A6A6] transition-colors min-md:w-13 min-md:py-3 ${day.currentMonth ? "" : "text-gray-400"} ${day.disabled ? "cursor-default" : ""} ${isAvailable && day.currentMonth ? "bg-[#04434317] !text-black" : ""} ${isEditing && day.currentMonth ? "hover:bg-blue-200 hover:text-gray-800" : ""} relative text-sm font-medium`}
                >
                  {day.date}
                  {isFromAPI && (
                    <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-yellow-400"></span>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
