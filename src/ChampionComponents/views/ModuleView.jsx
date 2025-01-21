import "./ModuleView.scss";

const listOfLevel4Workshops = [
  {
    WorkshopID: 1,
    WorkshopModuleID: 2,
    WorkshopModuleName: 'CI4105 Programming 1',
    WorkshopSize: 230,
    WorkshopTeachingblockID: 2,
    WorkshopTeachingblockName: 'Teaching Block 2',
    WorkshopDay: 4,
    WorkshopStarttime: '12:00',
    WorkshopDuration: 120,
    WorkshopLocationID: 1,
    WorkshopLocationName: 'PRSB2021-23',
  },
  {
    WorkshopID: 2,
    WorkshopModuleID: 1,
    WorkshopModuleName: 'CI4105 Programming 1',
    WorkshopSize: 230,
    WorkshopTeachingblockID: 2,
    WorkshopTeachingblockName: 'Teaching Block 2',
    WorkshopDay: 5,
    WorkshopStarttime: '16:00',
    WorkshopDuration: 120,
    WorkshopLocationID: 1,
    WorkshopLocationName: 'PRSB2021-23',
  },

  {
    WorkshopID: 3,
    WorkshopModuleID: 2,
    WorkshopModuleName: 'Computing Fundamentals',
    WorkshopSize: 150,
    WorkshopTeachingblockID: 2,
    WorkshopTeachingblockName: 'Teaching Block 2',
    WorkshopDay: 2,
    WorkshopStarttime: '15:00',
    WorkshopDuration: 120,
    WorkshopLocationID: 2,
    WorkshopLocationName: 'PRSB3034-35',
  },
  {
    WorkshopID: 4,
    WorkshopModuleID: 2,
    WorkshopModuleName: 'Computing Fundamentals',
    WorkshopSize: 40,
    WorkshopTeachingblockID: 2,
    WorkshopTeachingblockName: 'Teaching Block 2',
    WorkshopDay: 4,
    WorkshopStarttime: '15:00',
    WorkshopDuration: 120,
    WorkshopLocationID: 3,
    WorkshopLocationName: 'PRSB3017',
  },
  {
    WorkshopID: 5,
    WorkshopModuleID: 2,
    WorkshopModuleName: 'Computing Fundamentals',
    WorkshopSize: 120,
    WorkshopTeachingblockID: 2,
    WorkshopTeachingblockName: 'Teaching Block 2',
    WorkshopDay: 5,
    WorkshopStarttime: '09:00',
    WorkshopDuration: 120,
    WorkshopLocationID: 1,
    WorkshopLocationName: 'PRSB2021-23',
  },
  {
    WorkshopID: 6,
    WorkshopModuleID: 2,
    WorkshopModuleName: 'Computing Fundamentals',
    WorkshopSize: 150,
    WorkshopTeachingblockID: 2,
    WorkshopTeachingblockName: 'Teaching Block 2',
    WorkshopDay: 5,
    WorkshopStarttime: '12:30',
    WorkshopDuration: 120,
    WorkshopLocationID: 2,
    WorkshopLocationName: 'PRSB3034-35',
  },

  {
    WorkshopID: 7,
    WorkshopModuleID: 3,
    WorkshopModuleName: 'Requirements Analysis and Design',
    WorkshopSize: 130,
    WorkshopTeachingblockID: 2,
    WorkshopTeachingblockName: 'Teaching Block 2',
    WorkshopDay: 4,
    WorkshopStarttime: '09:00',
    WorkshopDuration: 120,
    WorkshopLocationID: 4,
    WorkshopLocationName: 'PRJG1009',
  },
  {
    WorkshopID: 8,
    WorkshopModuleID: 3,
    WorkshopModuleName: 'Requirements Analysis and Design',
    WorkshopSize: 140,
    WorkshopTeachingblockID: 2,
    WorkshopTeachingblockName: 'Teaching Block 2',
    WorkshopDay: 4,
    WorkshopStarttime: '16:00',
    WorkshopDuration: 120,
    WorkshopLocationID: 1,
    WorkshopLocationName: 'PRSB2021-23',
  },

  {
    WorkshopID: 9,
    WorkshopModuleID: 4,
    WorkshopModuleName: 'Professional Environments 1',
    WorkshopSize: 150,
    WorkshopTeachingblockID: 2,
    WorkshopTeachingblockName: 'Teaching Block 2',
    WorkshopDay: 2,
    WorkshopStarttime: '09:00',
    WorkshopDuration: 120,
    WorkshopLocationID: 1,
    WorkshopLocationName: 'PRSB2021-23',
  },
  {
    WorkshopID: 10,
    WorkshopModuleID: 4,
    WorkshopModuleName: 'Professional Environments 1',
    WorkshopSize: 150,
    WorkshopTeachingblockID: 2,
    WorkshopTeachingblockName: 'Teaching Block 2',
    WorkshopDay: 3,
    WorkshopStarttime: '09:00',
    WorkshopDuration: 160,
    WorkshopLocationID: 1,
    WorkshopLocationName: 'PRSB2021-23',
  },
  {
    WorkshopID: 11,
    WorkshopModuleID: 4,
    WorkshopModuleName: 'Professional Environments 1',
    WorkshopSize: 150,
    WorkshopTeachingblockID: 2,
    WorkshopTeachingblockName: 'Teaching Block 2',
    WorkshopDay: 4,
    WorkshopStarttime: '09:00',
    WorkshopDuration: 160,
    WorkshopLocationID: 1,
    WorkshopLocationName: 'PRSB2021-23',
  },
];


function ModuleView() {
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const timeSlots = [
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
    "17:00 - 18:00"
  ];

  // Helper function to find workshops for a specific day and time
  const getWorkshopForSlot = (dayIndex, timeSlot) => {
    const [slotStart, slotEnd] = timeSlot.split(" - ").map((time) => {
      const [hours, minutes] = time.split(":").map(Number);
      return hours * 60 + minutes; // Convert time to minutes
    });

    return listOfLevel4Workshops.filter((workshop) => {
      const workshopDayIndex = workshop.WorkshopDay - 1; // Adjust day index (1 = Monday)
      const workshopStartMinutes = parseInt(workshop.WorkshopStarttime.split(":")[0]) * 60 +
        parseInt(workshop.WorkshopStarttime.split(":")[1]);
      const workshopEndMinutes = workshopStartMinutes + workshop.WorkshopDuration;

      return (
        workshopDayIndex === dayIndex &&
        ((slotStart >= workshopStartMinutes && slotStart < workshopEndMinutes) ||
          (slotEnd > workshopStartMinutes && slotEnd <= workshopEndMinutes))
      );
    });
  };

  return (
    <div className="timetable-container">
      <h1>Timetable</h1>
      <div className="timetable">
        {/* Header Row */}
        <div className="header-row">
          <div className="time-header">Time</div>
          {weekDays.map((day) => (
            <div className="day-header" key={day}>
              {day}
            </div>
          ))}
        </div>

        {/* Timetable Rows */}
        {timeSlots.map((time, timeIndex) => (
          <div className="time-row" key={timeIndex}>
            <div className="time-slot">{time}</div>
            {weekDays.map((day, dayIndex) => {
              const workshops = getWorkshopForSlot(dayIndex, time);
              return (
                <div className="day-slot" key={`${day}-${time}`}>
                  {workshops.length > 0 ? (
                    workshops.map((workshop) => (
                      <div className="workshop-card" key={workshop.WorkshopID}>
                        <p>{workshop.WorkshopModuleName}</p>
                        <p>{workshop.WorkshopLocationName}</p>
                        <p>
                          {workshop.WorkshopStarttime} -{" "}
                          {`${parseInt(workshop.WorkshopStarttime.split(":")[0]) +
                            Math.floor(workshop.WorkshopDuration / 60)}:${(parseInt(
                            workshop.WorkshopStarttime.split(":")[1]
                          ) +
                            (workshop.WorkshopDuration % 60))
                            .toString()
                            .padStart(2, "0")}`}
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="placeholder-card">
                      <p></p>
                    </div>
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

export default ModuleView;
