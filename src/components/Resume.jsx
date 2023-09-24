import "./compCSS/resume.css";

export default function Resume({
  personalValues,
  educationValues,
  expValues,
  allEducationValues,
  allExpValues,
}) {
  return (
    <div className="outputs">
      <div className="header">
        <h1>{personalValues.name}</h1>
        <div className="personal-info">
          <p>{personalValues.mail}</p>
          <p>{personalValues.phone}</p>
          <p>{personalValues.adress}</p>
        </div>
      </div>
      <h2>Education</h2>
      {allEducationValues.map((element, index) => (
        <div key={index} className="education-info">
          <div className="date-and-location">
            <p>
              {element.startingDateEdu} - {element.endingDateEdu}
            </p>
            <p>{element.locationEdu}</p>
          </div>
          <div className="school-and-degree">
            <p>{element.school}</p>
            <p>{element.degree}</p>
          </div>
        </div>
      ))}
      <div className="education-info">
        <div className="date-and-location">
          <p>
            {educationValues.startingDateEdu} - {educationValues.endingDateEdu}
          </p>
          <p>{educationValues.locationEdu}</p>
        </div>
        <div className="school-and-degree">
          <p>{educationValues.school}</p>
          <p>{educationValues.degree}</p>
        </div>
      </div>
      <h2>Experience</h2>
      {allExpValues.map((element, index) => (
        <div key={index} className="exp-info">
          <div className="date-and-location">
            <p>
              {element.startingDateXP} - {element.endingDateXP}
            </p>
            <p>{element.locationXP}</p>
          </div>
          <div className="company">
            <p>{element.company}</p>
            <p>{element.position}</p>
            <p>{element.desc}</p>
          </div>
        </div>
      ))}
      <div className="exp-info">
        <div className="date-and-location">
          <p>
            {expValues.startingDateXP} - {expValues.endingDateXP}
          </p>
          <p>{expValues.locationXP}</p>
        </div>
        <div className="company">
          <p>{expValues.company}</p>
          <p>{expValues.position}</p>
          <p>{expValues.desc}</p>
        </div>
      </div>
    </div>
  );
}
