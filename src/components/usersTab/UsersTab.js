import React, { useState, useEffect, useCallback } from "react"
import styled from "styled-components"
import { Dialog, Fab } from "@material-ui/core"
import { Add as AddIcon } from "@material-ui/icons"
import { useSelector, useDispatch } from "react-redux"
import env from "@beam-australia/react-env"

import { UsersList } from "../usersList"
import { AddUser } from "../addUser"
import { DATABASE_IS_DISCONNECT, REQUEST_FETCH_USERS } from "../../state"
import axios from "axios"
import { ErrorTab } from "../exceptionHandling"
import { SERVER_IS_DISCONNECT } from "../../state"

const FabStyled = styled(Fab)`
	position: absolute;
	right: 16px;
	bottom: 16px;
`

const EmptyUsersListContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 100px;
	font-size: x-large;
`

const FabEmptyListStyled = styled(Fab)`
	margin-top: 40px;
`

export const UsersTab = () => {
	const [showDialog, setShowDialog] = useState(false)
	const [connectionError, setConnectionError] = useState(null)
	const [errorMessage, setErrorMessage] = useState(null)
	const users = useSelector((users) => users)
	const NO_USER = "No user ! click on the button below to add a user "
	const dispatch = useDispatch()

	const initFetch = useCallback(() => {
		dispatch({ type: REQUEST_FETCH_USERS })
	}, [dispatch])

	useEffect(() => {
		const fetchRequest = async () => {
			await axios
				.get(`${env("API_HOST")}/check_connection`)
				.then((r) => {
					if (r.data === SERVER_IS_DISCONNECT) {
						setConnectionError(true)
						setErrorMessage(SERVER_IS_DISCONNECT)
					} else if (r.data === DATABASE_IS_DISCONNECT) {
						setConnectionError(true)
						setErrorMessage(DATABASE_IS_DISCONNECT)
					} else {
						setConnectionError(false)
						initFetch()
					}
				})
				.catch((err) => {
					setConnectionError(true)
					setErrorMessage(SERVER_IS_DISCONNECT)
				})
		}
		fetchRequest().then((r) => r)
	}, [initFetch])

	return connectionError ? (
		<Dialog open={connectionError}>
			<ErrorTab errorMessage={errorMessage} />
		</Dialog>
	) : users ? (
		<>
			<UsersList />
			<FabStyled
				onClick={() => setShowDialog(true)}
				color="primary"
				data-test-id="fab-button"
			>
				<AddIcon />
			</FabStyled>
			<Dialog open={showDialog}>
				<AddUser handleCancel={() => setShowDialog(false)} />
			</Dialog>
		</>
	) : (
		<EmptyUsersListContainer data-test-id="empty-usersList">
			{NO_USER}
			<FabEmptyListStyled
				onClick={() => setShowDialog(true)}
				color="primary"
				data-test-id="fab-button-empty-list"
			>
				<AddIcon />
			</FabEmptyListStyled>
			<Dialog open={showDialog}>
				<AddUser handleCancel={() => setShowDialog(false)} />
			</Dialog>
		</EmptyUsersListContainer>
	)
}

export default UsersTab
