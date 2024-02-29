import "./Timeline2.css";
import timelineElements from "./timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsCalendarDateFill, BsCalendar2Date } from "react-icons/bs";

function Timeline2() {
  let workIconStyles = { background: "#212529" };
  let schoolIconStyles = { background: "#3270a3" };

  return (
    <div className="timeline-container">
      <h5 className="lg:text-4xl md:text-3xl text-3xl px-5 text-center text-sky-500 pb-10 font-semibold">Glorious Past of <span className="text-white">NIT Patna</span></h5>
      <VerticalTimeline>
        {timelineElements.map((element, index) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={index}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <BsCalendar2Date /> : <BsCalendarDateFill />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${isWorkIcon ? "workButton" : "schoolButton"
                    }`}
                  href="/error"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
export default Timeline2;
