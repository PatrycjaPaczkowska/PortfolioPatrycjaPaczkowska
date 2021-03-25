import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Link } from "react-scroll";

const Presentation = () => {
	const { t, i18n } = useTranslation();

	const Title = styled.h1`
		margin: 10px 0;
		font-size: 13px;
		font-weight: 800;
		color: rgb(19, 89, 128);
	`;

	const PresentationBox = styled.div`
		margin: 0 auto;
		padding: 38px 24px;
		max-width: 700px;

		@media (min-width: 1000px) {
			padding: 0;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			flex-grow: 1;
		}
	`;

	const Name = styled.p`
		margin: 10px 0 20px;
		font-size: 36px;
		font-weight: 700;
		text-transform: uppercase;
		@media (min-width: 1000px) {
			margin: 10px 0 20px;
			font-size: 60px;
			font-weight: 700;
			text-transform: uppercase;
		}
	`;

	const Description = styled.p`
		font-size: 16px;
		line-height: 30px;
		font-weight: 500;
	`;

	const Scrool = styled.p`
		margin: 40px 0;
		color: ${({ theme }) => theme.scrollColor};
		font-size: 13px;
		letter-spacing: 0.5px;
		font-weight: 500;
		text-transform: uppercase;
		cursor: pointer;
		opacity: 0.5;
		transition: opacity 0.3s ease;

		&:hover {
			opacity: 1;
		}
	`;

	return (
		<PresentationBox>
			<Title>{t("title")}</Title>
			<Name>Patrycja Paczkowska</Name>
			<Description>{t("description")}</Description>
			<Link spy={true} smooth={true} offset={-70} duration={500} to="projects">
				<Scrool>{t("scroll")}</Scrool>
			</Link>
		</PresentationBox>
	);
};

export default Presentation;
