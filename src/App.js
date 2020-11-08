import React from "react"
import { StylesProvider } from "@material-ui/core/styles"

import NavBar from "./components/Navbar"

function App() {
	return (
		<StylesProvider injectFirst>
			<NavBar />
		</StylesProvider>
	)
}

export default App
