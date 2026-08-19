import React from "react";
import {useTranslation} from "react-i18next";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";

export default function Education() {
  const {t} = useTranslation();
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">{t("educationInfo.title")}</h1>
        <div className="education-card-container">
          {t("educationInfo.schools", {returnObjects: true}).map((school, index) => {
            const schoolWithLogo = {
              ...school,
              logo: educationInfo.schools[index].logo
            };
            return <EducationCard key={index} school={schoolWithLogo} />;
          })}
        </div>
      </div>
    );
  }
  return null;
}
