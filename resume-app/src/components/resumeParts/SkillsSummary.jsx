import React from "react";
import Icon from "../Icon";
import { Translate } from "react-redux-i18n";
import { translation } from "../../i18n/i18n_translations.enum";

export default ({ locale, skills }) => {
  const mapSkill = (skill, i) => {
    const { title, time, details } = skill[locale];
    return (
      <div
        key={i}
        className="section-tech-skill-container"
      >
        <div className="tech-skill-title">{title}</div>
        {time && (
          <div>
            <Icon
              className="section-work-activity"
              icon="business-time"
            />
            <span className="section-time">{time}</span>
          </div>
        )}
        {details.map(({ text, icon }, j) => (
          <div
            key={j}
          >
            <Icon
              className="section-work-activity skill-icon"
              icon={icon}
            />
            {text}
          </div>
        ))}
      </div>
    );
  };

  const skills_b = skills.splice(Math.ceil(skills.length / 2));

  return (
    <React.Fragment>
      <div className="section-title">
        <Translate value={translation.body.SKILLSSUMMARY} />
      </div>
      <div className="section-techs-skills row">
        {locale && (
          <React.Fragment>
            <div className="col-sm-12 col-md-6">{skills.map(mapSkill)}</div>
            <div className="col-sm-12 col-md-6">{skills_b.map(mapSkill)}</div>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};
