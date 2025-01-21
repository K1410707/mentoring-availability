import { Card } from "../UI/Card.jsx";
import "./ModuleView.scss";

function ModuleView() {
  const weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <>
      <h1>Timetable</h1>
      <div className="timetable">
        {weekDay.map((day) => (
          <Card key={day}>
            <p className="dayName">{day}</p>
          </Card>
        ))}
      </div>
    </>
  );
}

export default ModuleView;
