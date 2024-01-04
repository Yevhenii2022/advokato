import styled from '@emotion/styled';
import { fontSectionTitle, device } from '../../styles/mixins';

export const tabletAndDesktop = {
  padding: '16px 24px',
  width: '288px',
  height: '52px',
};

export const mobileLAndTablet = {
  padding: '0',
  width: '260px',
  height: '44px',
};

export const SectionStyled = styled.section`
  background-color: var(--darkBackground);

  @media screen and (${device.mobileL}) {
    padding: 60px 0;
  }

  @media screen and (${device.tablet}) {
    padding: 120px 0;
  }

  @media screen and (${device.desktop}) {
    padding: 132px 0;
  }
`;

export const Container = styled.div`
  margin: 0 auto;

  @media screen and (${device.mobileL}) {
    width: 648px;
  }

  @media screen and (${device.tablet}) {
    width: 864px;
  }

  @media screen and (${device.desktop}) {
    width: 1120px;
  }
`;

export const TitleStyled = styled.h2`
  margin-bottom: 40px;

  ${fontSectionTitle};
  color: var(--lightText);

  @media screen and (${device.mobileL}) {
    max-width: 648px;
    min-height: 68px;
    font-size: 24px;
    line-height: calc(34 / 24);
  }

  @media screen and (${device.tablet}) {
    max-width: 792px;
    min-height: 72px;
    font-size: 32px;
    line-height: calc(45 / 32);
  }

  @media screen and (${device.desktop}) {
    max-width: 1116px;
    min-height: 120px;
    font-size: 40px;
    line-height: calc(56 / 40);
  }
`;

export const PracticeDescWrp = styled.div`
  margin-bottom: 12px;
  overflow: hidden;
`;

export const PracticeWrp = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PracticeInfo = styled.div`
  @media screen and (${device.mobileL}) {
    width: 300px;
  }

  @media screen and (${device.tablet}) {
    width: 348px;
  }

  @media screen and (${device.desktop}) {
    width: 456px;
  }
`;

export const ImageStyled = styled.img`
  border-radius: 24px;
  background: linear-gradient(#0000002e, #00000099);

  @media screen and (${device.mobileL}) {
    margin-bottom: 28px;
    height: 240px;
    width: 300px;
  }

  @media screen and (${device.tablet}) {
    margin-bottom: 32px;
    height: 272px;
    width: 348px;
  }

  @media screen and (${device.desktop}) {
    margin-bottom: 60px;
    height: 320px;
    width: 456px;
  }
`;

export const PracticeTitle = styled.h3`
  margin-bottom: 24px;

  font-family: var(--Raleway);
  font-weight: 400;
  letter-spacing: 0em;
  color: var(--lightText);

  @media screen and (${device.mobileL}) {
    min-height: 28px;
    font-size: 20px;
    line-height: calc(28 / 20);
  }

  @media screen and (${device.tablet}) {
    min-height: 32px;
    font-size: 28px;
    line-height: calc(40 / 28);
  }

  @media screen and (${device.desktop}) {
    min-height: 36px;
    font-size: 32px;
    line-height: calc(45 / 32);
  }
`;

export const PracticeDesc = styled.p`
  display: ${({ isShowMoreDesc }) => (isShowMoreDesc ? 'block' : null)};
  margin-bottom: 12px;

  font-family: var(--Raleway);
  font-weight: 400;
  letter-spacing: 0em;
  color: var(--lightText);

  @media screen and (${device.mobileL}) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }

  @media screen and (${device.tablet}) {
    font-size: 18px;
    line-height: calc(27 / 18);
  }
`;

export const PracticeDescFull = styled.div`
  font-family: var(--Raleway);
  font-weight: 400;
  letter-spacing: 0em;
  color: var(--lightText);

  p:not(:last-of-type) {
    margin-bottom: 12px;
  }

  ul,
  ol {
    list-style-type: disc;
    margin-left: 30px;
    margin-bottom: 12px;
  }

  @media screen and (${device.mobileL}) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }

  @media screen and (${device.tablet}) {
    font-size: 18px;
    line-height: calc(27 / 18);
  }
`;

export const MoreButtonStyled = styled.button`
  width: 100px;
  height: 24px;
  float: right;

  font-family: var(--Raleway);
  font-weight: 400;
  letter-spacing: 0em;
  text-align: right;
  color: var(--greyText);
  border: none;
  background-color: inherit;

  @media screen and (${device.mobileL}) {
    font-size: 16px;
    line-height: calc(24 / 16);
  }

  @media screen and (${device.tablet}) {
    font-size: 18px;
    line-height: calc(27 / 18);
  }
`;

export const ExtraInfoWrpStyled = styled.div`
  p {
    margin-bottom: 30px;

    text-align: justify;
    color: red;
  }
`;
