import "./styles/main.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ScrollToTop from "./helpers/scrollToTop"

import Navbar from "./Components/navigation/navbar"
import HomePage from "./Pages/homepage"
import RobbersPage from "./Pages/robberspage"
import About from "./Pages/About"
import PersonalRobberPage from "./Pages/personalrobberpage"
import { useTranslation } from "react-i18next"

function App() {

	// Hi

	return (
		<div className="App">

			<Router>
				<ScrollToTop />
				<Navbar />

				<Routes>
					<Route path="/Robbers_portal" element={<HomePage />} />
					<Route path="/" element={<HomePage />} />
					<Route path="/robberspage" element={<RobbersPage />} />
					<Route path="/about" element={<About />} />
					<Route path="/robberpersonal/:id" element={<PersonalRobberPage />} />

				</Routes>

			</Router>
		</div>
	);
}

export default App;
