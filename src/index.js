import React from "react"
import ReactDOM from "react-dom"
import GlobalStyle from "./globalStyles"
import { Provider } from "react-redux"

import App from "./App"
import { store } from "./state/UsersReducer"

ReactDOM.render(
	<Provider store={store}>
		<GlobalStyle />
		<App />
	</Provider>,
	document.getElementById("root")
)
