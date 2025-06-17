import { useState, useEffect } from 'react';
import { Edit, ChevronLeft, ChevronRight, Save, Check } from 'lucide-react';

export default function AvailabilityCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isEditing, setIsEditing] = useState(false);
  const [availability, setAvailability] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Get month and year
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();
  const monthKey = `${currentDate.getFullYear()}-${currentDate.getMonth()}`;

  // Load data from localStorage on initial render
  useEffect(() => {
    const loadAvailability = async () => {
      try {
        // Simulate API call for backend data
        const backendData = await fetchAvailabilityFromAPI();
        
        // Load user selections from localStorage
        const savedData = JSON.parse(localStorage.getItem('availability')) || {};
        
        // Merge backend data with user selections (user selections take precedence)
        setAvailability({
          ...backendData,
          ...savedData
        });
      } catch (error) {
        console.error('Error loading availability:', error);
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
        15: true
      }
    };
  };

  // Save to localStorage whenever availability changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('availability', JSON.stringify(availability));
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
        disabled: true
      });
    }
    
    // Current month days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push({
        date: i,
        currentMonth: true,
        disabled: false
      });
    }
    
    // Next month days
    for (let i = 1; i <= nextMonthDays; i++) {
      days.push({
        date: i,
        currentMonth: false,
        disabled: true
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
      setAvailability(prev => {
        const monthAvailability = prev[monthKey] || {};
        const updated = {
          ...prev,
          [monthKey]: {
            ...monthAvailability,
            [date.date]: !monthAvailability[date.date]
          }
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

  const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

  // Get availability for current month
  const currentMonthAvailability = availability[monthKey] || {};

  if (isLoading) {
    return <div className="max-w-md mx-auto p-4 text-center">Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto p-4  rounded-lg border-2 border-primary h-[420px]">
      <div className="flex justify-center gap-3 items-center mb-4">
        <h2 className="text-xl font-semibold text-primary">Availability</h2>
        <button 
          onClick={() => setIsEditing(!isEditing)}
          className={`p-1 rounded-full ${isEditing ? 'bg-gray-200' : ''}`}
          aria-label={isEditing ? 'Stop editing' : 'Edit availability'}
        >
         {!isEditing?<Edit className="w-5 h-5 text-primary hover:text-gray-800" />: <Check className="w-5 h-5 text-primary hover:text-gray-800" />}
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 mb-4">
        <button 
          onClick={() => changeMonth(-1)}
          className="p-1 rounded-full bg-primary hover:cursor-pointer"
          aria-label="Previous month"
        >
          <ChevronLeft className="w-5 h-5 text-secondary" />
        </button>
        <p className="text-gray-700 font-medium w-50 text-center">{month} {year}</p>
        <button 
          onClick={() => changeMonth(1)}
          className="p-1 rounded-full hover:cursor-pointer bg-primary"
          aria-label="Next month"
        >
          <ChevronRight className="w-5 h-5 text-secondary" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map(day => (
          <div key={day} className="text-center font-medium text-sm py-1 text-gray-500">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="contents">
            {week.map((day, dayIndex) => {
              const isAvailable = currentMonthAvailability[day.date];
              const isFromAPI = day.currentMonth && isAvailable && 
                               !localStorage.getItem('availability')?.includes(`"${day.date}":true`);
              
              return (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  onClick={() => toggleAvailability(day)}
                  className={`
                    text-center py-3 w-13  rounded-full cursor-pointer transition-colors text-[#A6A6A6]
                    ${day.currentMonth ? '' : 'text-gray-400'}
                    ${day.disabled ? 'cursor-default' : ''}
                    ${isAvailable && day.currentMonth ? 'bg-[#04434317] !text-black' : ''}
                    ${isEditing && day.currentMonth ? 'hover:bg-blue-200 hover:text-gray-800' : ''}
                    text-sm font-medium
                    relative
                  `}
                >
                  {day.date}
                  {isFromAPI && (
                    <span className="absolute top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full"></span>
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