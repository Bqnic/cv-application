import "./compCSS/resume.css";

export default function Resume({ personalValues, educationValues, expValues }) {
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
