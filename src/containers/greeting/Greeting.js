import React, {useContext} from "react";
import {useTranslation} from "react-i18next";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import deepworkImage from "../../assets/images/deepwork.svg";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  const {t} = useTranslation();
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {t("greeting.title")}{" "}
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {t("greeting.subTitle")}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text={t("greeting.contactBtn")} href="#contact" />
                {greeting.resumeLink && (
                  <Button
                    text={t("greeting.resumeBtn")}
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="man working"
              src={deepworkImage}
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
