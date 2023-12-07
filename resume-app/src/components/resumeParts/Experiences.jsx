import React from "react";
import Icon from "../Icon";
import { Translate } from "react-redux-i18n";
import { translation } from "../../i18n/i18n_translations.enum";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({ locale, experiences }) => {
  return (
    <>
      <div className="section-title">
        <Translate value={translation.body.EXPERIENCE} />
      </div>
      {locale &&
        experiences.map((experience, i) => {
          const { timelapse, title, link, techStack, keyPoints } =
            experience[locale];

          return (
            <div
              key={i}
              className="section-experience-container"
            >
              <span className="section-time">{timelapse}</span> {title}
              <br />
              {link && (
                <a
                  href={link.href}
                  className="section-experience-reference print-hide"
                >
                  {link.text}
                  <Icon
                    className="section-experience-reference-image"
                    icon="external-link-alt"
                  />
                </a>
              )}
              <br />
              <span>
                <FontAwesomeIcon icon={["fas", "wrench"]} />{" "}
                <Translate value={translation.body.TECHSTACK} />
              </span>
              <div className="section-experience-skills">
                {techStack?.map((skill, i) => (
                  <span>
                    - {skill}
                    <br />
                  </span>
                ))}
              </div>
              <span>
                <FontAwesomeIcon icon={["fas", "star"]} />{" "}
                <Translate value={translation.body.KEYPOINTS} />
              </span>
              <div className="section-experience-skills">
                {keyPoints?.map((skill, i) => (
                  <span>
                    - {skill}
                    <br />
                  </span>
                ))}
              </div>
            </div>
          );
        })}
    </>
  );
};
