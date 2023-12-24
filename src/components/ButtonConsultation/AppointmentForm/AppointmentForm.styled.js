import styled from '@emotion/styled';
import {
  flexBox,
  secondaryButton,
  fontSectionTitle,
} from '../../../styles/mixins';

export const FormWrp = styled.div`
  padding-top: 124px;
  padding-right: 72px;
  padding-bottom: 60px;
  padding-left: 72px;
  width: 800px;
  min-height: 1076px;

  background-color: white;

  h2 {
    height: 48px;
    min-width: 471px;

    ${fontSectionTitle};
    text-align: center;
    color: var(--mainText);
  }
`;

export const FormStyled = styled.form`
  ${flexBox};
  flex-direction: column;
  gap: 40px;
`;

export const ButtonWrp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const UpperButton = styled.button`
  ${secondaryButton};
  width: 288px;
  height: 52px;

  &:hover,
  &:focus {
    border: 1px solid var(--darkBackground);
  }
`;

export const LowerButton = styled.button`
  ${secondaryButton};
  width: 288px;
  height: 52px;

  color: var(--mainText);
  background-color: inherit;
  border: 1px solid var(--darkBackground);

  &:hover,
  &:focus {
    color: var(--lightText);
    background-color: var(--darkBackground);
  }
`;
