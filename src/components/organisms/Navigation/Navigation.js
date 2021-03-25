import React  from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Nav = styled.nav`
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	top: ${(props) => (props.visibility ? "-100vh" : "75px")};
	padding: 40px 0;
	width: 100%;
	background-color: rgb(19, 89, 128);
	transition: 0.4s;
   box-shadow: 2px 2px 5px #292929;
	overflow: hidden;

   @media(min-width: 1000px){
      position: relative;
      display: flex;
      flex-direction: row;
		justify-content: space-between;
      top:0;
      margin: 0 15px 10px 0;
		max-width: 400px;
      width: auto;
      font-size: 11px;
      background-color: transparent;
      box-shadow: none;
   }
`;

const LinkMenu = styled.a`
	margin: 10px 0;
	color: white;
	text-transform: uppercase;
	text-decoration: none;
	font-weight: 600;

	@media (min-width: 800px) {
		text-transform: uppercase;
		text-decoration: none;
		color: ${({ theme }) => theme.textColor};
		font-size: 12px;
		font-weight: 600;
	}
   @media(min-width: 1000px){
      margin-top: 0;
   }
`;

const LinkMenuMode = styled.span`
	margin: 10px 0;
	color: white;
	text-transform: uppercase;
	text-decoration: none;
	font-weight: 600;
	cursor: pointer;

	@media (min-width: 800px) {
		text-transform: uppercase;
		text-decoration: none;
		color: ${({ theme }) => theme.textColor};
		font-size: 12px;
		font-weight: 600;
		cursor: pointer;
	}

   @media(min-width: 1000px){
      margin-top: 0;
   }
`;

const LanguageSwitcher = styled.span`
	@media (min-width: 800px) {
		display: flex;
		font-size: 12px;
	}
`;

const Navigation = ({
	toggleTheme,
	textOfMode,
	changeLanguage,
	handleNav,
	navVisibility,
}) => {
	const { t, i18n } = useTranslation();
   const handleThemeMode = () => {
      handleNav();
      toggleTheme();
   }
	return (
		<Nav visibility={navVisibility}>
			<LinkMenu href="/">start</LinkMenu>
			<LinkMenu href="/">{t("about")}</LinkMenu>
			<LinkMenu href="/">{t("skills")}</LinkMenu>
			<LinkMenu href="/">{t("contact")}</LinkMenu>
			<LinkMenuMode onClick={handleThemeMode}>{textOfMode}</LinkMenuMode>
			<LanguageSwitcher>
				<LinkMenuMode
					type="button"
					onClick={() => {
						changeLanguage("pl");
						handleNav();
					}}
				>
					pl |
				</LinkMenuMode>

				<LinkMenuMode
					type="button"
					onClick={() => {
						changeLanguage("en");
						handleNav();
					}}
				>
					| en
				</LinkMenuMode>
			</LanguageSwitcher>
		</Nav>
	);
};

export default Navigation;
