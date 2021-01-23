import React, { useState } from "react"
import styled from "styled-components"
import { Dialog, Fab } from "@material-ui/core"
import { Add as AddIcon } from "@material-ui/icons"
import { useSelector } from "react-redux"

import { UsersList } from "../usersList"
import { AddUser } from "../addUser"

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
`

export const UsersTab = () => {
	const [showDialog, setShowDialog] = useState(false)
	const users = useSelector((users) => users)
	const NO_USER = "No user ! click on the button below to add a user "

	return users ? (
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
		<EmptyUsersListContainer>
			{NO_USER}
			<Fab
				onClick={() => setShowDialog(true)}
				color="primary"
				data-test-id="fab-button"
			>
				<AddIcon />
			</Fab>
			<Dialog open={showDialog}>
				<AddUser handleCancel={() => setShowDialog(false)} />
			</Dialog>
		</EmptyUsersListContainer>
	)
}

export default UsersTab
