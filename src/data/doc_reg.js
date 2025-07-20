export const doc_reg = {
  Subspeciality: [
    { value: "FOOT_AND_ANKLE", label: "Foot and Ankle Surgery" },
    { value: "PEDIATRIC_ORTHOPEDICS", label: "Pediatric Orthopedics" },
    { value: "JOINT_REPLACEMENT", label: "Joint Replacement (Arthroplasty)" },
    { value: "SPINE_SURGERY", label: "Spine Surgery" },
    { value: "HAND_SURGERY", label: "Hand Surgery" },
    { value: "SHOULDER_AND_ELBOW", label: "Shoulder and Elbow Surgery" },
    { value: "SPORTS_MEDICINE", label: "Sports Medicine" },
  ],
};

export const calendar_data = [
  {
    normal: 1,
    normal: 2,
    normal: 3,
    normal: 4,
    normal: 5,
    normal: 6,
    normal: 7,
    normal: 8,
    normal: 9,
    normal: 10,
    normal: 11,
    normal: 12,
    normal: 13,
    normal: 14,
    normal: 15,
    holiday: 16,
    normal: 17,
    normal: 18,
    normal: 19,
    normal: 20,
    normal: 21,
    normal: 22,
    normal: 23,
    normal: 24,
    normal: 25,
    holiday: 26,
    normal: 27,
    normal: 28,
    normal: 29,
    normal: 30,
    holiday: 31,
  },
];

export const calendar = [
  {
    type: "online",
    date: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ],
    holiday: [],
    // disabled days will be handled dynamically in the UI for Saturday and Sunday
  },

  {
    type: "clinic",
    date: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ],
    holiday: [],
    // disabled days will be handled dynamically in the UI for Saturday and Sunday
  },
];

export const schedule_date = [
  {
    day: "Mon",
    startTime: "09:00am",
    endTime:"09:30am",
    location: "Clinic",
  },
  {
    day: "Tue",
    startTime: "09:00am",
    endTime:"09:30am",
    location: "Online",
  },
  {
    day: "Wed",
    startTime: "09:00am",
    endTime:"09:30am",
    location: "Online",
  },
  {
    day: "Thu",
    startTime: "09:00am",
    endTime:"09:30am",
    location: "Online",
  },
  {
    day: "Fri",
    startTime: "09:00am",
    endTime:"09:30am",
    location: "Online",
  },
  {
    day: "Sat",
    startTime: "09:00am",
    endTime:"09:30am",
    location: "Online",
  },
  {
    day: "Sun",
    startTime: "09:00am",
    endTime:"09:30am",
    location: "Online",
  },
];
