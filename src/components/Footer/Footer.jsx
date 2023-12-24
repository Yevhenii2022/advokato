import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { PdfViewer } from "../PdfViewer";
import { Modal } from "../Modal";
import { SocialList } from "../SocialList";
import {
	Container,
	FlexWraper,
	FooterStyled,
	Line,
	LinkStyled,
	List,
	PolicyText,
	Text,
	TextLink,
} from "./Footer.styled";

import pdfFile from "../../assets/documents/test_privacy_policy.pdf";
import pdfSiteRules from "../../assets/documents/site_rules.pdf";
import { getContent } from "../../api/";

const address =
	"https://www.google.com.ua/maps/place/%D0%90%D0%B4%D0%B2%D0%BE%D0%BA%D0%B0%D1%82%D1%81%D0%BA%D0%B0%D1%8F+%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D1%8F+%22%D0%A1%D0%A2%D0%90%D0%A2%D0%A3%D0%A1%22/@46.9771042,31.9821151,306m/data=!3m1!1e3!4m15!1m8!3m7!1s0x40c5c9736d5787e1:0x22995cbf959306a!2z0YPQuy4g0J3QuNC60L7Qu9GM0YHQutCw0Y8sIDE5LCDQndC40LrQvtC70LDQtdCyLCDQndC40LrQvtC70LDQtdCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDU0MDAw!3b1!8m2!3d46.9771042!4d31.9821151!16s%2Fg%2F1tf22ljf!3m5!1s0x40c5c9736d45554d:0xf623d7f2ab386bdb!8m2!3d46.9770991!4d31.9829098!16s%2Fg%2F11hd9rjdw5?entry=ttu";

const currentYear = new Date().getFullYear();

export const Footer = () => {
	const [t, i18n] = useTranslation("global");
	const [modalActive, setModalActive] = useState(false);
	const [active, setActive] = useState("home");
	const [selectedPdfFile, setSelectedPdfFile] = useState(null);
	const { pathname, hash } = useLocation();

	// const [cities, setCities] = useState([]);
	const [contacts, setContacts] = useState([]);
	const phone = contacts[0]?.contacts[0]?.phone;
	const formattedPhone = phone ? phone.replace(/[^\d]/g, "") : "";

	useEffect(() => {
		const getData = async () => {
			const data = await getContent("contacts");

			// setCities(prev => data.cities);
			setContacts(prev => data.contacts);
		};

		getData();
	}, []);

	useEffect(() => {
		if (pathname === "/" && hash === "") {
			return setActive(prev => "home");
		}
		if (pathname === "/company") {
			return setActive(prev => "company");
		}
		if (hash === "#practice") {
			return setActive(prev => "practice");
		}
		if (hash === "#news") {
			return setActive(prev => "news");
		}
		if (pathname === "/contacts") {
			return setActive(prev => "contacts");
		}
	}, [pathname, hash]);

	return (
		<FooterStyled>
			<Container>
				<Modal
					active={modalActive}
					setActive={setModalActive}
				>
					<PdfViewer pdfFile={selectedPdfFile} />
				</Modal>

				<FlexWraper>
					<nav>
						<List>
							<li>
								<LinkStyled
									to="/"
									aria-label="посилання на головну сторінку"
									current="home"
									active={active}
								>
									{t("header.nav.home")}
								</LinkStyled>
							</li>
							<li>
								<LinkStyled
									to="/company"
									aria-label="посилання на сторінку компанії"
									current="company"
									active={active}
								>
									{t("header.nav.company")}
								</LinkStyled>
							</li>
							<li>
								<LinkStyled
									to="/#practice"
									aria-label="посилання на сторінку практики"
									current="practice"
									active={active}
								>
									{t("header.nav.practice")}
								</LinkStyled>
							</li>
							<li>
								<LinkStyled
									to="/#news"
									aria-label="посилання на сторінку новин"
									current="news"
									active={active}
								>
									{t("header.nav.news")}
								</LinkStyled>
							</li>
							<li>
								<LinkStyled
									to="/contacts"
									aria-label="посилання на сторінку контактів"
									current="contacts"
									active={active}
								>
									{t("header.nav.contacts")}
								</LinkStyled>
							</li>
						</List>
					</nav>

					<div>
						<PolicyText
							to="#"
							onClick={() => {
								setModalActive(true);
								setSelectedPdfFile(pdfFile);
							}}
							aria-label="посилання на політику конфіденційності"
						>
							Політика конфіденційності
						</PolicyText>
						<PolicyText
							to="#"
							onClick={() => {
								setModalActive(true);
								setSelectedPdfFile(pdfSiteRules);
							}}
							aria-label="посилання на умови користування сайтом"
						>
							Правила користування сайтом
						</PolicyText>
					</div>

					<FlexWraper
						flexDirection="column"
						gap="0"
					>
						<Text>ADVOCATE COMPANY «STATUS»</Text>
						<TextLink
							to={address}
							target="_blank"
							rel="noopener nofollow noreferrer"
							aria-label="адреса компанії"
						>
							Вул. Нікольська 19, м. Миколаїв, <br /> Україна
						</TextLink>
						{/* <TextLink
							to="tel:+380512377373"
							aria-label="телефон компанії"
							marginbottom="0"
						>
							+38 (0512) 37 73 73
						</TextLink> */}
						{contacts?.length > 0 && (
							<>
								<TextLink
									to={`tel:+${formattedPhone}`}
									aria-label="телефон компанії"
								>
									{phone}
								</TextLink>
								<TextLink
									to={`mailto:${contacts[0]?.contacts[1]?.mail}`}
									aria-label="електронна пошта компанії"
								>
									{contacts[0]?.contacts[1]?.mail}
								</TextLink>

								<SocialList media={contacts[0]?.social} />
							</>
						)}
					</FlexWraper>
				</FlexWraper>

				<Line />
				<Text>{`${currentYear} ADVOCATE COMPANY «STATUS». All rights reserved.`}</Text>
			</Container>
		</FooterStyled>
	);
};
