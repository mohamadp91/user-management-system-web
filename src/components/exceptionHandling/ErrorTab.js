import React from "react"
import { Card, CircularProgress } from "@material-ui/core"
import styled from "styled-components"
import { SERVER_IS_DISCONNECT } from "../../state"

const CardStyled = styled(Card)`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 300px;
	height: 400px;
	border-radius: 5px;
	border: 1px solid red;
`
const SpanStyled = styled.div`
	text-align: center;
	font-family: comic sans ms, serif;
	color: red;
	font-size: 15px;
`

export const ErrorTab = ({ errorMessage }) => {
	return (
		<CardStyled>
			<CircularProgress color="secondary"></CircularProgress>
			<SpanStyled>
				{errorMessage === SERVER_IS_DISCONNECT
					? "The Server is down :("
					: "The database is down :("}
				<br />
				please make sure, servers and the database is running and try again
				later.
			</SpanStyled>
		</CardStyled>
	)
}
export default ErrorTab
