import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { GlobalStyles } from "../../components/theme/GlobalStyles";
import Presentation from "../../components/organisms/Presentation/Presentation";
import Navigation from "../../components/organisms/Navigation/Navigation";
import  Projects from '../../components/organisms/Projects/Projects';
import Footer from '.././../components/organisms/Footer/Footer';
import { lightTheme, darkTheme } from "../../components/theme/Themes";
import styled, { ThemeProvider } from "styled-components";
import photo from "../../images/photo.jpg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IconContext } from "react-icons";

const MainContainer = styled.div`
	max-width: 1100px;

	@media (min-width: 1000px) {
		display: flex;
		margin: 50px;
	}

   @media (min-width: 1150px) {
		display: flex;
		margin: 50px auto;
	}
`;

const LogoName = styled.p`
	margin: 7px;
	padding: 7px 17px;
	color: rgb(255 255 255);
	font-weight: 700;
	background: rgb(43, 119, 166);
	background: linear-gradient( 90deg, rgb(18 65 94) 0%, rgba(18,86,128,1) 54%, rgba(18,65,94,1) 89% );
	border-radius: 6px;
	filter: ${({theme}) => theme.shadowLogo};
`;

const PhotoBox = styled.div`
	background-image: url(${photo});
	background-position: bottom;
	background-size: cover;
	height: 70vh;
	width: 100vw;
	overflow: hidden;

	@media (min-width: 1000px) {
		display: flex;
		justify-content: center;
		width: 50%;
      height: auto;
      max-height: 90vh;
		overflow: none;
	}
`;

const DescriptionBox = styled.div`
	@media (min-width: 1000px) {
		padding: 0 60px 0 0;
	}
`;

const Header = styled.header`
	display: flex;
	justify-content: space-between;
   max-width: 700px;
	margin: 5px auto;

   @media(min-width: 700px){
      padding: 0 12px;
   }

	@media (min-width: 1000px) {
		display: none;
	}
`;

const Page = () => {
	const { t, i18n } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};
	const [theme, setTheme] = useState("light");
	const [textOfTogglerMode, setTextOfTogglerMode] = useState("Dark Mode");
	const [toggleNavVisibility, setNavVisibility] = useState("true");

	const themeToggler = () => {
		if (theme === "light") {
			setTheme("dark");
			setTextOfTogglerMode("Light Mode");
		} else {
			setTheme("light");
			setTextOfTogglerMode("Dark Mode");
		}
	};

	const style = {
		color: theme === "light" ? "#135980" : "white",
		fontSize: "3em",
		cursor: "pointer",
	};

	const handleNav = () => setNavVisibility(!toggleNavVisibility);

	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme} >
			<>
				<GlobalStyles />
				<MainContainer>
					<Header>
						<LogoName>
							&lt;/&gt; Patrycja <br />
							Paczkowska
						</LogoName>
						<IconContext.Provider value={{ style }}>
							<HiOutlineMenuAlt3 onClick={handleNav} />
						</IconContext.Provider>
					</Header>
					<DescriptionBox>
						<Navigation
							toggleTheme={themeToggler}
							textOfMode={textOfTogglerMode}
							changeLanguage={changeLanguage}
							handleNav={handleNav}
							navVisibility={toggleNavVisibility}
						/>
						<Presentation />
					</DescriptionBox>
					<PhotoBox />
				</MainContainer>
            <Projects />
           <Footer />
			</>
		</ThemeProvider>
	);
};

export default Page;
