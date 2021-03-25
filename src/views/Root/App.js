import React, { Suspense } from "react";
import Page from '../Page/Page';

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
