import { CardContainer, Card } from "../UI/Card.jsx";
import "./Modules.scss";
function durationcalc(workshopminutes, workshophours, wd) {
  let hours = Math.floor(wd / 60);

  let addmin = hours * 60 - wd;

  workshopminutes = Math.abs(addmin + workshopminutes);
  //console.log(workshopminutes);
  let wm = workshopminutes.toString();
  if (wm === "0") {
    wm = "00";
  }

  let time = `${workshophours + hours}:${wm}`;
  return time;
}
function Modules() {
  const listOfLevel4Workshops = [
    {
      WorkshopID: 1,
      WorkshopModuleID: 2,
      WorkshopModuleName: "CI4105 Programming 1",
      WorkshopSize: 230,
      WorkshopTeachingblockID: 2,
      WorkshopTeachingblockName: "Teaching Block 2",
      WorkshopDay: 4,
      WorkshopStarttime: "12:00",
      WorkshopDuration: 120,
      WorkshopLocationID: 1,
      WorkshopLocationName: "PRSB2021-23",
    },
    {
      WorkshopID: 2,
      WorkshopModuleID: 1,
      WorkshopModuleName: "CI4105 Programming 1",
      WorkshopSize: 230,
      WorkshopTeachingblockID: 2,
      WorkshopTeachingblockName: "Teaching Block 2",
      WorkshopDay: 5,
      WorkshopStarttime: "16:00",
      WorkshopDuration: 120,
      WorkshopLocationID: 1,
      WorkshopLocationName: "PRSB2021-23",
    },

    {
      WorkshopID: 3,
      WorkshopModuleID: 2,
      WorkshopModuleName: "Computing Fundamentals",
      WorkshopSize: 150,
      WorkshopTeachingblockID: 2,
      WorkshopTeachingblockName: "Teaching Block 2",
      WorkshopDay: 2,
      WorkshopStarttime: "15:00",
      WorkshopDuration: 120,
      WorkshopLocationID: 2,
      WorkshopLocationName: "PRSB3034-35",
    },
    {
      WorkshopID: 4,
      WorkshopModuleID: 2,
      WorkshopModuleName: "Computing Fundamentals",
      WorkshopSize: 40,
      WorkshopTeachingblockID: 2,
      WorkshopTeachingblockName: "Teaching Block 2",
      WorkshopDay: 4,
      WorkshopStarttime: "15:00",
      WorkshopDuration: 120,
      WorkshopLocationID: 3,
      WorkshopLocationName: "PRSB3017",
    },
    {
      WorkshopID: 5,
      WorkshopModuleID: 2,
      WorkshopModuleName: "Computing Fundamentals",
      WorkshopSize: 120,
      WorkshopTeachingblockID: 2,
      WorkshopTeachingblockName: "Teaching Block 2",
      WorkshopDay: 5,
      WorkshopStarttime: "09:00",
      WorkshopDuration: 120,
      WorkshopLocationID: 1,
      WorkshopLocationName: "PRSB2021-23",
    },
    {
      WorkshopID: 6,
      WorkshopModuleID: 2,
      WorkshopModuleName: "Computing Fundamentals",
      WorkshopSize: 150,
      WorkshopTeachingblockID: 2,
      WorkshopTeachingblockName: "Teaching Block 2",
      WorkshopDay: 5,
      WorkshopStarttime: "12:30",
      WorkshopDuration: 120,
      WorkshopLocationID: 2,
      WorkshopLocationName: "PRSB3034-35",
    },

    {
      WorkshopID: 7,
      WorkshopModuleID: 3,
      WorkshopModuleName: "Requirements Analysis and Design",
      WorkshopSize: 130,
      WorkshopTeachingblockID: 2,
      WorkshopTeachingblockName: "Teaching Block 2",
      WorkshopDay: 4,
      WorkshopStarttime: "09:00",
      WorkshopDuration: 120,
      WorkshopLocationID: 4,
      WorkshopLocationName: "PRJG1009",
    },
    {
      WorkshopID: 8,
      WorkshopModuleID: 3,
      WorkshopModuleName: "Requirements Analysis and Design",
      WorkshopSize: 140,
      WorkshopTeachingblockID: 2,
      WorkshopTeachingblockName: "Teaching Block 2",
      WorkshopDay: 4,
      WorkshopStarttime: "16:00",
      WorkshopDuration: 120,
      WorkshopLocationID: 1,
      WorkshopLocationName: "PRSB2021-23",
    },

    {
      WorkshopID: 9,
      WorkshopModuleID: 4,
      WorkshopModuleName: "Professional Environments 1",
      WorkshopSize: 150,
      WorkshopTeachingblockID: 2,
      WorkshopTeachingblockName: "Teaching Block 2",
      WorkshopDay: 2,
      WorkshopStarttime: "09:00",
      WorkshopDuration: 120,
      WorkshopLocationID: 1,
      WorkshopLocationName: "PRSB2021-23",
    },
    {
      WorkshopID: 10,
      WorkshopModuleID: 4,
      WorkshopModuleName: "Professional Environments 1",
      WorkshopSize: 150,
      WorkshopTeachingblockID: 2,
      WorkshopTeachingblockName: "Teaching Block 2",
      WorkshopDay: 3,
      WorkshopStarttime: "09:00",
      WorkshopDuration: 160,
      WorkshopLocationID: 1,
      WorkshopLocationName: "PRSB2021-23",
    },
    {
      WorkshopID: 11,
      WorkshopModuleID: 4,
      WorkshopModuleName: "Professional Environments 1",
      WorkshopSize: 150,
      WorkshopTeachingblockID: 2,
      WorkshopTeachingblockName: "Teaching Block 2",
      WorkshopDay: 4,
      WorkshopStarttime: "09:00",
      WorkshopDuration: 160,
      WorkshopLocationID: 1,
      WorkshopLocationName: "PRSB2021-23",
    },
  ];
  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const startDate = new Date("2024-09-16");

  function moduleCard(workshop, dateIn) {
    let newDate = new Date(dateIn);
    console.log(newDate);
    console.log(newDate.getDate());
    return (
      <Card>
        <p className="moduleName">{workshop.WorkshopModuleName}</p>
        <p className="moduleDay">
          {" "}
          {weekDay[workshop.WorkshopDay]} - {workshop.WorkshopStarttime}{" "}
        </p>
        <p>{DateNumber(newDate)}</p>
        <p className="moduleLocation">{workshop.WorkshopLocationName}</p>
      </Card>
    );
  }

  function DateNumber(dateIn) {
    let newDate = new Date(dateIn);
    let dateString = "";
    dateString = dateString.concat(newDate.getDate(), "-");
    dateString = dateString.concat(newDate.getMonth() + 1, "-");
    dateString = dateString.concat(newDate.getYear() + 1900);
    return dateString;
  }
  function addWeek(dateIn) {
    let newDate = new Date(dateIn);
    newDate.setDate(newDate.getDate() + 7);
    return newDate;
  }

  return (
    <>
      <h1>My Mentoring Sessions</h1>
      {
        <>
          <CardContainer>
            {listOfLevel4Workshops.map((workshop) => {
              let workshopminutes = parseInt(
                workshop.WorkshopStarttime.substring(3, 5)
              );
              let workshophours = parseInt(
                workshop.WorkshopStarttime.substring(0, 2)
              );
              let time = durationcalc(
                workshopminutes,
                workshophours,
                workshop.WorkshopDuration
              );
              return (
                <div className="moduleCard" key={workshop.WorkshopID}>
                  <Card>
                    <p className="moduleName">{workshop.WorkshopModuleName}</p>
                    <p className="moduleDay">
                      {" "}
                      {weekDay[workshop.WorkshopDay]} -{" "}
                      {workshop.WorkshopStarttime}{" "}
                    </p>
                    <p className="moduleLocation">
                      {workshop.WorkshopLocationName}
                    </p>
                  </Card>
                </div>
              );
            })}
          </CardContainer>
          <CardContainer>
            {moduleCard(listOfLevel4Workshops[0], startDate)}
            {moduleCard(listOfLevel4Workshops[0], addWeek(startDate))}
          </CardContainer>
        </>
      }
    </>
  );
}

export default Modules;
