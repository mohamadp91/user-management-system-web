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
	font-size: x-large;
`

const FabEmptyListStyled = styled(Fab)`
	margin-top: 40px;
`

export const UsersTab = () => {
	const [showDialog, setShowDialog] = useState(false)
	const users = useSelector((users) => users)
	const NO_USER = "No user ! click on the button below to add a user "

	if (users === null || users.length === 0) {
		return (
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
	} else {
		return (
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
		)
	}
}

export default UsersTab
