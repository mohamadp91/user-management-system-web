import React, { useState } from "react"
import styled from "styled-components"
import { Dialog, Fab } from "@material-ui/core"
import { Add as AddIcon } from "@material-ui/icons"

import { UsersList } from "../usersList"
import { AddUser } from "../addUser"

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
