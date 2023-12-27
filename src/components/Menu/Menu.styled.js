import styled from "@emotion/styled";
import { flexBox, device } from "../../styles/mixins";
import { NavLink } from "react-router-dom";

export const UlStyled = styled.ul`
	${flexBox};
	flex-direction: ${props => (props.sideMenu ? "column" : "row")};
	align-items: ${props => (props.sideMenu ? "flex-start;" : "center")};
	display: ${props => (props.sideMenu ? "flex" : "none")};
	margin: ${props => (props.sideMenu ? "156px 0 0 40px" : "0")};
	gap: ${props => (props.sideMenu ? "20px" : "0")};

	@media screen and (${device.burger}) {
		${flexBox};
		gap: 44px;
		width: 600px;
		height: 24px;
	}
`;

export const NavLinkStyled = styled(NavLink)`
	color: ${({ current, active }) =>
		current === active ? "var(--accentLink)" : "var(--lightText)"};
	position: relative;
	&::before {
		content: "";
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 0;
		height: 2px;
		background-color: var(--accentLink);
		transition: width 0.3s ease-in-out;
	}
	&:hover::before {
		width: 100%;
	}
`;
