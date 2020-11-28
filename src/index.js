import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { store } from "./state"
import { GlobalStyle } from "./style"
import { StylesProvider } from "@material-ui/core/styles"

import { NavBar } from "./components"

const App = () => {
	return (
		<Provider store={store}>
			<GlobalStyle />
			<StylesProvider injectFirst>
				<NavBar />
			</StylesProvider>
		</Provider>
	)
}

ReactDOM.render(<App />, document.getElementById("root"))
