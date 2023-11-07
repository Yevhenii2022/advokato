import styled from "@emotion/styled";
import { container, fontSectionTitle } from "../../styles/mixins";

export const SectionStyled = styled.section`
  position: relative;
  top: -30vh;
  padding: 132px 0;
  background-color: var(--darkBackground);
`;

export const Container = styled.div`
  ${container};
`;

export const TitleStyled = styled.h2`
  margin-bottom: 40px;

  ${fontSectionTitle};
  color: var(--lightText);
`;

export const PracticeWrp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PracticeInfo = styled.div`
  width: 456px;
`;

export const ImageStyled = styled.img`
  margin-bottom: 60px;

  border-radius: 24px;
  background: linear-gradient(#0000002e, #00000099);
`;

export const PracticeTitle = styled.h3`
  margin-bottom: 24px;

  font-family: var(--Raleway);
  font-size: 32px;
  font-weight: 400;
  line-height: calc(45 / 32);
  letter-spacing: 0em;

  color: var(--lightText);
`;

export const PracticeDesc = styled.p`
  font-family: var(--Raleway);
  font-size: 18px;
  font-weight: 400;
  line-height: calc(27 / 18);
  letter-spacing: 0em;

  color: var(--lightText);
`;
