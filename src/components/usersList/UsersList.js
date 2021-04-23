import React, { useState } from "react"
import {
	Checkbox,
	Paper,
	TableRow,
	TableHead,
	TableContainer,
	TableCell,
	TableBody,
	Table,
	Button,
	Dialog,
} from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import styled from "styled-components"
import { useSelector } from "react-redux"

import { DeleteUser } from "../deleteUser"

const TableHeadCellStyled = styled(TableCell)`
	background: #ced2aa;
	font-size: large;
`

const TableBodyCellStyled = styled(TableCell)`
	font-size: 14px;
`

const TableContainerStyled = styled(TableContainer)`
	margin-top: 100px;
	margin-left: 200px;
	margin-right: 200px;
`

const TableStyled = styled(Table)`
	min-width: 100px;
	margin-top: 10px;
`

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

export const UsersList = () => {
	const users = useSelector((users) => users)
	const [showDialog, setShowDialog] = useState(false)
	const [selectedUser, setSelectedUser] = useState()

	const handleDelete = (id) => {
		setShowDialog(true)
		setSelectedUser(id)
	}

	return (
		<Container>
			<TableContainerStyled component={Paper}>
				<TableStyled aria-label="customized table">
					<TableHead>
						<TableRow>
							<TableHeadCellStyled>Name</TableHeadCellStyled>
							<TableHeadCellStyled align="right">Email</TableHeadCellStyled>
							<TableHeadCellStyled align="right">
								Creation Time
							</TableHeadCellStyled>
							<TableHeadCellStyled align="right"></TableHeadCellStyled>
						</TableRow>
					</TableHead>
					<TableBody data-test-id="table-body">
						{users &&
							users.map((user) => (
								<TableRow key={user.id}>
									<TableBodyCellStyled
										component="th"
										scope="row"
										data-test-id={`name-tableCell-${user.id}`}
									>
										<Checkbox color="default" />
										{`${user.firstName} ${user.lastName}`}
									</TableBodyCellStyled>
									<TableBodyCellStyled
										align="right"
										data-test-id={`email-tableCell-${user.id}`}
									>
										{user.emailAddress}
									</TableBodyCellStyled>
									<TableBodyCellStyled align="right">
										{user.creationTime}
									</TableBodyCellStyled>
									<TableBodyCellStyled align="right">
										<Button
											onClick={() => handleDelete(user.id)}
											data-test-id="delete-dialog"
										>
											<DeleteIcon />
										</Button>
										<Dialog open={showDialog}>
											<DeleteUser
												cancel={() => setShowDialog(false)}
												userId={selectedUser}
											/>
										</Dialog>
									</TableBodyCellStyled>
								</TableRow>
							))}
					</TableBody>
				</TableStyled>
			</TableContainerStyled>
		</Container>
	)
}

export default UsersList
