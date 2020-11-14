import React, { useState } from "react"
import styled from "styled-components"
import Fab from "@material-ui/core/Fab"
import Dialog from "@material-ui/core/Dialog"
import AddIcon from "@material-ui/icons/Add"

import UsersList from "./UsersList"
import AddUser from "./AddUser"

const FabStyled = styled(Fab)`
	position: absolute;
	right: 16px;
	bottom: 16px;
`

export const UsersTab = () => {
	const [showDialog, setShowDialog] = useState(false)

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

export default UsersTab
