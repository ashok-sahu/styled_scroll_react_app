import React from "react";
import {
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  Img,
  ImgWrap,
  Heading,
  Column1,
  Column2,
  TopLine,
  BtnWrap,
} from "./InfoSecStyle";
import { Button } from "../Button/ButtonStyle";

const Infosection = ({
  LightBg,
  Id,
  ImgStart,
  LightText,
  topLine,
  darkText,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
}) => {
  return (
    <>
      <InfoContainer lightBg={LightBg} id={Id}>
        <InfoWrapper>
          <InfoRow imgStart={ImgStart}>
            <Column1>
              <TextWrapper>
                <TopLine lightText={LightText}>{topLine}</TopLine>
                <Heading darkText={darkText}>{headline}</Heading>
                <Subtitle>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    // dark2={dark2 ? 1 :0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Infosection;
