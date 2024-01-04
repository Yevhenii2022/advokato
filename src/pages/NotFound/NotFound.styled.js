import styled from "@emotion/styled";
import { mainButton, device } from "../../styles/mixins";
import { Link } from "react-router-dom";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 56px;

	background-color: var(--lightBackground);

	@media screen and (${device.mobileL}) {
		padding: 0 80px;
	}
	@media screen and (${device.tablet}) {
		padding: 0 208px;
	}

	@media screen and (${device.desktop}) {
		padding: 0 280px;
	}
`;

export const TopBackground = styled.div`
	position: absolute;
	top: 0;
	left: 0;

	height: 52px;
	width: 100%;

	background-color: var(--darkBackground);

	@media screen and (${device.mobileL}) {
		height: 68px;
	}
	@media screen and (${device.tablet}) {
		height: 76px;
	}
	@media screen and (${device.burger}) {
		height: 80px;
	}
	@media screen and (${device.desktop}) {
		height: 88px;
	}
`;

export const Title = styled.p`
	margin-top: 92px;
	margin-bottom: 20px;

	font-family: var(--Montserrat);
	font-weight: 700;
	font-size: 100px;
	line-height: 122px;

	@media screen and (${device.mobileL}) {
		margin-top: 200px;
		margin-bottom: 72px;
	}

	@media screen and (${device.tablet}) {
		margin-top: 224px;
		margin-bottom: 60px;
		font-size: 140px;
		line-height: 170px;
	}

	@media screen and (${device.desktop}) {
		margin-top: 240px;
		margin-bottom: 56px;
		font-size: 300px;
		line-height: 366px;
	}
`;

export const Text = styled.p`
	margin-bottom: 36px;

	font-family: var(--Raleway);
	font-weight: 400;
	font-size: 12px;
	line-height: 19px;
	text-align: center;

	@media screen and (${device.mobileL}) {
		margin-bottom: 84px;
		font-size: 22px;
		line-height: 31px;
	}
	@media screen and (${device.tablet}) {
		margin-bottom: 68px;
	}
	@media screen and (${device.desktop}) {
		margin-bottom: 88px;
		font-size: 32px;
		line-height: 45px;
	}
`;

export const Button = styled(Link)`
	margin-bottom: 36px;

	${mainButton};

	font-family: Raleway;
	font-weight: 600;
	font-size: 14px;
	line-height: 21px;

	transition: all var(--timing-function) var(--animation-duration);

	@media screen and (${device.mobileL}) {
		margin-bottom: 168px;

		font-size: 14px;
		font-weight: 500;
		line-height: 17px;
	}

	@media screen and (${device.tablet}) {
		margin-bottom: 148px;
		font-size: 16px;
		line-height: 19px;
	}

	@media screen and (${device.desktop}) {
		margin-bottom: 100px;

		font-size: 18px;
		line-height: 27px;
	}
`;
