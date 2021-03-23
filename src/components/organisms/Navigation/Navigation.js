import React, { useState } from "react";
import styled, { css } from "styled-components";
import Button from "../../atoms/Button";
import { useTranslation, withTranslation, Trans } from "react-i18next";

const Nav = styled.nav`
	padding: 100px 0 0 200px ;
	display: flex;
   max-width: 600px;
	justify-content: space-around;
`;

const LinkMenu = styled.a`
	text-transform: uppercase;
	text-decoration: none;
	color: ${({ theme }) => theme.text};
	font-size: 12px;
	font-weight: 600;
`;

const LinkMenuMode = styled.p`
	text-transform: uppercase;
	text-decoration: none;
	color: ${({ theme }) => theme.text};

   font-size: 12px;

	font-weight: 600;
	cursor: pointer;
`;

const LanguageSwitcher = styled.span`
	display: flex;
	font-size: 12px;
`;

const Navigation = ({ toggleTheme, textOfMode, changeLanguage }) => {
   const { t, i18n } = useTranslation();
   const text = textOfMode;
	return (
		<Nav>
			<LinkMenu href="/">start</LinkMenu>
			<LinkMenu href="/">{t("about")}</LinkMenu>
			<LinkMenu href="/">{t("skills")}</LinkMenu>
			<LinkMenu href="/">{t("contact")}</LinkMenu>
			<LinkMenuMode onClick={toggleTheme}>{textOfMode}</LinkMenuMode>
			<LanguageSwitcher>
				<LinkMenuMode type="button" onClick={() => changeLanguage("pl")}>
					pl
				</LinkMenuMode>
				
            |
				<LinkMenuMode type="button" onClick={() => changeLanguage("en")}>
					en
				</LinkMenuMode>
			</LanguageSwitcher>
		</Nav>
	);
};

export default Navigation;
