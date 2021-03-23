import React, { Component, Suspense, useState } from "react";
import { useTranslation, withTranslation, Trans } from "react-i18next";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../components/GlobalStyles";
import { lightTheme, darkTheme } from "../../components/Themes";
import Navigation from "../../components/organisms/Navigation/Navigation";
import Presentation from "../../components/organisms/Presentation/Presentation";
import styled from "styled-components";

// use hoc for class based components
// class LegacyWelcomeClass extends Component {
//   render() {
//     const { t } = this.props;
//     return <h2>{t('title')}</h2>;
//   }
// }
// const Welcome = withTranslation()(LegacyWelcomeClass);

// // Component using the Trans component
// function MyComponent() {
//   return (
//     <Trans i18nKey="title">
//       To get started, edit <code>src/App.js</code> and save to reload.
//     </Trans>
//   );
// }

// page uses the hook
function Page() {
	const { t, i18n } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};
	const [theme, setTheme] = useState("light");
	const [textOfTogglerMode, setTextOfTogglerMode] = useState("Dark Mode");

	const themeToggler = () => {
		if (theme === "light") {
			setTheme("dark");
			setTextOfTogglerMode("Light Mode");
		} else {
			setTheme("light");
			setTextOfTogglerMode("Dark Mode");
		}
	};

	const MainContainer = styled.div`
		padding: 0 36px 0 36px;
	`;

	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<>
				<GlobalStyles />

				<MainContainer>
					<div className="App-header">
						<Navigation
							toggleTheme={themeToggler}
							textOfMode={textOfTogglerMode}
							changeLanguage={changeLanguage}
						/>
						<Presentation />
					</div>
				</MainContainer>
			</>
		</ThemeProvider>
	);
}

// loading component for suspense fallback
const Loader = () => (
	<div>
		<div>loading...</div>
	</div>
);

// here app catches the suspense from page in case translations are not yet loaded
function App() {
	return (
		<Suspense fallback={<Loader />}>
			<Page />
		</Suspense>
	);
}

export default App;
