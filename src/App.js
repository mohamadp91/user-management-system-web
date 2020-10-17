import React from 'react'
import NavBar from './Components/Navbar'
import { StylesProvider } from '@material-ui/core/styles'

function App() {
	return (
		<StylesProvider injectFirst>
			<NavBar />
		</StylesProvider>
	)
}

export default App
