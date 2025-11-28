'use client';
import { useState } from "react";
import { ChevronLeft, ChevronRight, Clock, MapPin } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function AvailabilityCalendar({ className, availability = [], specificAvailability = [], onDateClick }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Debug logging
  console.log('AvailabilityCalendar - availability:', availability);
  console.log('AvailabilityCalendar - specificAvailability:', specificAvailability);
  console.log('AvailabilityCalendar - onDateClick:', !!onDateClick);

  // Get month and year
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  // Map day names to index (0-6)
  const dayMap = {
    SUNDAY: 0,
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
    FRIDAY: 5,
    SATURDAY: 6,
  };

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
      const dateObj = new Date(year, month, i);
      const dayOfWeekIndex = dateObj.getDay(); // 0-6
      
      // 1. Check for Specific Date Override
      // Normalize date comparison to YYYY-MM-DD
      const dateString = dateObj.toISOString().split('T')[0];
      const override = specificAvailability.find(s => {
        const sDate = new Date(s.date).toISOString().split('T')[0];
        return sDate === dateString;
      });

      let dayAvailability = null;
      let isOverride = false;

      if (override) {
        isOverride = true;
        if (override.isAvailable) {
          dayAvailability = {
            startTime: override.startTime,
            endTime: override.endTime,
            location: override.location,
            clinicName: override.clinicName,
            dayOfWeek: Object.keys(dayMap).find(key => dayMap[key] === dayOfWeekIndex)
          };
        } else {
          // Explicitly unavailable
          dayAvailability = null; 
        }
      } else {
        // 2. Fallback to Weekly Schedule
        const weeklySlot = availability.find(
          (slot) => dayMap[slot.dayOfWeek] === dayOfWeekIndex
        );
        
        // Only consider it available if it has a valid location
        if (weeklySlot && weeklySlot.location) {
          dayAvailability = weeklySlot;
        } else {
          dayAvailability = null;
        }
      }

      days.push({
        date: i,
        fullDate: dateObj,
        currentMonth: true,
        disabled: false,
        availability: dayAvailability,
        isOverride,
        dayOfWeekIndex, // Store index to identify day of week
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

  const changeMonth = (increment) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + increment);
    setCurrentDate(newDate);
  };

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Handle click on a day
  const handleDayClick = (day) => {
    if (!day.currentMonth) return;
    
    // If onDateClick is provided (Edit Mode), call it with the FULL DATE object
    if (onDateClick) {
      onDateClick(day.fullDate, day.dayOfWeekIndex);
    }
  };

  return (
    <div
      className={`border-primary h-auto max-w-full rounded-lg border-2 p-2 min-md:p-4 ${className}`}
    >
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

      <div className="grid grid-cols-7 gap-1 min-md:gap-2">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="contents">
            {week.map((day, dayIndex) => {
              const isAvailable = !!day.availability;
              const location = day.availability?.location === "CLINIC" 
                ? day.availability?.clinicName 
                : day.availability?.location;
              
              const timeSlot = day.availability 
                ? `${day.availability.startTime} - ${day.availability.endTime}`
                : "";

              // Base styling for the day cell
              let bgClass = "";
              let textClass = "text-gray-700";
              let isDisabled = false;
              
              if (day.currentMonth) {
                if (isAvailable) {
                  // Available: Green (Weekly or Specific)
                  bgClass = "bg-green-100 border-2 border-green-300";
                  textClass = "text-green-900";
                } else {
                  // Unavailable
                  if (onDateClick) {
                    // Edit Mode: Show red for unavailable
                    bgClass = "bg-red-100 border-2 border-red-300";
                    textClass = "text-red-900";
                    isDisabled = true; // Disable clicking on unavailable days
                  } else {
                    // View Mode: Show as regular gray date (no red)
                    bgClass = "";
                    textClass = "text-gray-700";
                  }
                }
              } else {
                textClass = "text-gray-300";
              }

              const cellClasses = `flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-colors min-md:h-10 min-md:w-10 
                ${bgClass} ${textClass} 
                ${day.currentMonth && onDateClick && !isDisabled ? "cursor-pointer" : ""}
                ${day.currentMonth && onDateClick && isDisabled ? "cursor-not-allowed opacity-60" : ""}
                ${day.currentMonth && !onDateClick && isAvailable ? "cursor-pointer" : ""}
              `;

              // Render logic
              if (!day.currentMonth) {
                return (
                  <div key={`${weekIndex}-${dayIndex}`} className="flex justify-center">
                    <div className={cellClasses}>{day.date}</div>
                  </div>
                );
              }

              // If Edit Mode (onDateClick provided), simpler render without Popover
              if (onDateClick) {
                return (
                  <div key={`${weekIndex}-${dayIndex}`} className="flex justify-center">
                    <div 
                      className={cellClasses}
                      onClick={() => handleDayClick(day)}
                      title={day.isOverride ? "Specific Override" : "Weekly Schedule"}
                    >
                      {day.date}
                    </div>
                  </div>
                );
              }

              // If View Mode (Profile), use Popover for available days
              if (isAvailable) {
                return (
                  <div key={`${weekIndex}-${dayIndex}`} className="flex justify-center">
                    <Popover>
                      <PopoverTrigger asChild>
                        <button className={cellClasses}>{day.date}</button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-3">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-[#2F797B]" />
                            <span className="font-semibold text-sm">{location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-[#2F797B]" />
                            <span className="text-xs">{timeSlot}</span>
                          </div>
                          {day.isOverride && (
                             <span className="text-[10px] text-blue-600 font-medium">Specific Date</span>
                          )}
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                );
              }

              // View Mode but unavailable
              return (
                <div key={`${weekIndex}-${dayIndex}`} className="flex justify-center">
                  <div className={cellClasses}>{day.date}</div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
      
      <div className="mt-4 flex flex-wrap gap-4 justify-center text-xs text-gray-600">
        {onDateClick && (
          <>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-green-100 border border-green-300"></span>
              <span>Available</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-100 border border-red-300"></span>
              <span>Unavailable</span>
            </div>
          </>
        )}
        {!onDateClick && (
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-green-100 border border-green-300"></span>
            <span>Available</span>
          </div>
        )}
      </div>
    </div>
  );
}
