import { SectionStyled } from "./BurgerMenu.styled";
import { Menu } from "../Menu";

import { useTranslation } from "react-i18next";
import { LangButton } from "../Layout/Layout.styled";


export const BurgerMenu = ({ activeLang, toggleLanguage,isOpen }) => {
	const [t, i18n] = useTranslation("global");
	return (
		<SectionStyled className={`${!isOpen ? "close" : ""}`}>
			<Menu side={true}/>
			<LangButton
						onClick={() =>
							activeLang === "ua" ? toggleLanguage("en") : toggleLanguage("ua")
						}
						aria-label="lang-ua"
						activeLang={activeLang}
						currentLang="ua"
						burger
					>
						{activeLang.toUpperCase()}
					</LangButton>
		</SectionStyled>
	);
};