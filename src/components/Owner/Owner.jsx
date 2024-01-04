import { useState } from 'react';
import { ButtonConsultation } from '../ButtonConsultation';

import {
  SectionStyled,
  Container,
  CompanyBox,
  ImageBoxStyled,
  ImageStyled,
  TextStyled,
} from './Owner.styled';

import imageOwner from '/src/assets/images/owner-section/photo-owner.webp';

export const Owner = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <SectionStyled>
      <Container>
        <CompanyBox>
          <TextStyled>
            <h3>
              Адвокатська компанія
              <span>«STATUS»</span>
            </h3>

            <p>
              Маючи надійну команду юристів і адвокатів, ми надаємо повний
              спектр юридичних послуг у корпоративній, цивільно-правовій,
              кримінальній та інших сферах. Також, маємо досвід захисту
              інтелектуальної власності, надаємо нормативно-правові консультації
              підприємницької діяльності широкого кола клієнтів, в тому числі
              крупним компаніям, а також громадським та некомерційним
              організаціям.
            </p>

            <ButtonConsultation className="btn-owner"
              modalActive={modalActive}
              setModalActive={setModalActive}
            />
          </TextStyled>
        </CompanyBox>

        <ImageBoxStyled>
          <ImageStyled
            src={imageOwner}
            width={610}
            height={900}
            alt="photo-owner"
          />
        </ImageBoxStyled>
      </Container>
    </SectionStyled>
  );
};
