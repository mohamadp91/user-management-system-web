import React, { useState } from "react"
import styled from "styled-components"
import { Dialog, Fab } from "@material-ui/core"
import { Add as AddIcon, Clear as ClearIcon } from "@material-ui/icons"
import { useSelector } from "react-redux"

import { UsersList } from "../usersList"
import { AddUser } from "../addUser"

const FabStyled = styled(Fab)`
	position: absolute;
	right: 16px;
	bottom: 16px;
`

const EmptyUsersListContainer = styled.div`
	text-align: center;
`

const FabClearStyled = styled(Fab)`
	margin-left: 10px;
`

const NO_USER = "no user"

export const UsersTab = () => {
	const [showDialog, setShowDialog] = useState(false)
	const users = useSelector((users) => users)

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
			<FabClearStyled
				onClick={() => setShowDialog(true)}
				color="secondary"
				data-test-id="fab-button"
			>
				<ClearIcon />
			</FabClearStyled>
			<Dialog open={showDialog}>
				<AddUser handleCancel={() => setShowDialog(false)} />
			</Dialog>
		</EmptyUsersListContainer>
	)
}

export default UsersTab
